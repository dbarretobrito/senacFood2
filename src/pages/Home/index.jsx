import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import RecipesSection from "../../components/RecipesSection";
import CategoriesSection from "../../components/CategoriesSection";
import { HomeContainer, Spacer } from "./styles";
import api from "../../services/api";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [loadingRecipes, setLoadingRecipes] = useState(true);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // 🔒 1) Protege a Home: se não tiver token, manda pro /login
  useEffect(() => {
    const token = localStorage.getItem("senacfood_token");
    if (!token) {
      console.log("🔒 Nenhum token encontrado — redirecionando para /login");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  // 2) Scroll até recipes + foco na busca (se solicitado via state)
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    const focusSearch = location.state?.focusSearch;

    if (scrollTo === "recipes-section") {
      const timeout = setTimeout(() => {
        const target = document.getElementById("recipes-section");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        if (focusSearch) {
          setTimeout(() => {
            const input = document.getElementById("recipes-search-input");
            if (input) input.focus();
          }, 300);
        }
      }, 150);

      // limpa o state da rota para não repetir a ação ao navegar
      window.history.replaceState({}, document.title, window.location.pathname);

      return () => clearTimeout(timeout);
    }
  }, [location]);

  // 3) Buscar receitas do backend
  useEffect(() => {
    async function fetchReceitas() {
      try {
        setLoadingRecipes(true);
        const response = await api.get("/api/receitas");
        setRecipes(response.data?.receitas || []);
      } catch (error) {
        console.error("❌ Erro ao chamar /api/receitas:", error);
        setRecipes([]);
      } finally {
        setLoadingRecipes(false);
      }
    }

    fetchReceitas();
  }, []);

  // Monta categorias únicas a partir das receitas
  const categories = useMemo(() => {
    const map = new Map();

    recipes.forEach((r) => {
      if (r.categoria && r.categoria.id) {
        map.set(r.categoria.id, r.categoria.nome);
      }
    });

    return Array.from(map.entries()).map(([id, nome]) => ({ id, nome }));
  }, [recipes]);

  // Aplica filtro por categoria (se houver selecionada)
  const filteredRecipes = useMemo(() => {
    if (!selectedCategoryId) return recipes;

    return recipes.filter(
      (r) => r.categoria && r.categoria.id === selectedCategoryId
    );
  }, [recipes, selectedCategoryId]);

  return (
    <HomeContainer>
      <Navbar />
      <Spacer />
      <HeroSection />

      <CategoriesSection
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={(id) => setSelectedCategoryId(id)}
      />

      {/* wrapper com id para o scroll funcionar */}
      <div id="recipes-section">
        <RecipesSection recipes={filteredRecipes} loading={loadingRecipes} />
      </div>
    </HomeContainer>
  );
}
