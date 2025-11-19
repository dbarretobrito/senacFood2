// src/components/RecipesSection/index.jsx
import React, { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Section,
  Header,
  Title,
  Subtitle,
  CtaRow,
  CtaButton,
  CardsGrid,
  EmptyState,
  SearchRow,
  SearchInput,
} from "./styles";
import RecipeCard from "../RecipeCard";
import { useFavorites } from "../../context/favorites";

export default function RecipesSection({ recipes = [], loading = false }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const hasAnyRecipe = recipes && recipes.length > 0;

  const filteredRecipes = useMemo(() => {
    if (!recipes) return [];

    const term = searchTerm.trim().toLowerCase();
    if (!term) return recipes;

    return recipes.filter((r) => {
      const title = (r.titulo || r.title || "").toLowerCase();
      const desc = (r.descricao || "").toLowerCase();
      const cat = (r.categoria?.nome || r.category || "").toLowerCase();

      return (
        title.includes(term) ||
        desc.includes(term) ||
        cat.includes(term)
      );
    });
  }, [recipes, searchTerm]);

  const hasFiltered = filteredRecipes.length > 0;

  const handleCtaClick = () => {
    navigate("/receitas/nova");
  };

  if (loading) {
    return (
      <Section>
        <Header>
          <Title>Suas receitas</Title>
          <Subtitle>Carregando seu caderno SenacFood...</Subtitle>
        </Header>
      </Section>
    );
  }

  const titleText = hasAnyRecipe
    ? "Suas receitas"
    : "Comece seu caderno de receitas";

  const subtitleText = hasAnyRecipe
    ? "Veja as receitas que você já cadastrou. Toque em uma para ver os detalhes ou use a busca abaixo."
    : "Você ainda não cadastrou nenhuma receita. Que tal criar a primeira agora?";

  return (
    <Section>
      <Header>
        <Title>{titleText}</Title>
        <Subtitle>{subtitleText}</Subtitle>

        <CtaRow>
          <CtaButton type="button" onClick={handleCtaClick}>
            {hasAnyRecipe ? "CRIAR NOVA RECEITA" : "CRIAR MINHA PRIMEIRA RECEITA"}
          </CtaButton>
        </CtaRow>

        {/* Só mostra a caixa de busca se já existir pelo menos 1 receita */}
        {hasAnyRecipe && (
          <SearchRow>
            <SearchInput
              id="recipes-search-input"
              type="search"
              placeholder="Buscar por título, descrição ou categoria..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchRow>
        )}
      </Header>

      {/* Caso NÃO haja nenhuma receita cadastrada ainda */}
      {!hasAnyRecipe && (
        <EmptyState>
          <p>
            Assim que você cadastrar receitas, elas aparecerão aqui em forma de cartões.
          </p>
        </EmptyState>
      )}

      {/* Já existem receitas, mas o filtro não encontrou nada */}
      {hasAnyRecipe && !hasFiltered && searchTerm.trim() !== "" && (
        <EmptyState>
          <p>
            Nenhuma receita encontrada para <strong>"{searchTerm}"</strong>.
            <br />
            Tente outro termo ou limpe a busca.
          </p>
        </EmptyState>
      )}

      {/* Lista filtrada de receitas */}
      {hasFiltered && (
        <CardsGrid>
          {filteredRecipes.map((r) => {
            const timeLabel = r.tempo_preparo
              ? `${r.tempo_preparo} min`
              : "Tempo não informado";

            const categoryLabel = r.categoria?.nome || "Sem categoria";

            return (
              <Link
                key={r.id}
                to={`/receita/${r.id}`}
                style={{ textDecoration: "none" }}
              >
                <RecipeCard
                  title={r.titulo}
                  image={null} // sem imagem vinda do backend
                  time={timeLabel}
                  category={categoryLabel}
                  featured={false}
                  isFavorite={isFavorite(r.id)}
                  onFavorite={(e) => {
                    e.preventDefault(); // não navegar ao clicar no coração
                    toggleFavorite({
                      id: r.id,
                      title: r.titulo,
                      image: null,
                      time: timeLabel,
                      category: categoryLabel,
                    });
                  }}
                />
              </Link>
            );
          })}
        </CardsGrid>
      )}
    </Section>
  );
}
