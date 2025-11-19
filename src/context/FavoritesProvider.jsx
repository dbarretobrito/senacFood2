// src/context/FavoritesProvider.jsx
import React, { useEffect, useMemo, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";
import api from "../services/api";

export default function FavoritesProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // 1) Descobrir qual usuário está logado (via /api/user)
  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      try {
        const token = localStorage.getItem("senacfood_token");
        if (!token) {
          if (isMounted) {
            setUserId(null);
            setFavorites([]);
          }
          return;
        }

        const { data } = await api.get("/api/user");
        if (!isMounted) return;

        // data é o próprio user retornado pelo backend
        setUserId(data.id);
      } catch (error) {
        console.error("Erro ao buscar usuário em FavoritesProvider:", error);
        if (isMounted) {
          setUserId(null);
          setFavorites([]);
        }
      }
    }

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  // 2) Quando descobrir o userId, carregar os favoritos específicos dele
  useEffect(() => {
    if (!userId) {
      setFavorites([]);
      return;
    }

    try {
      const raw = localStorage.getItem(`senacfood_favorites_${userId}`);
      if (raw) {
        setFavorites(JSON.parse(raw));
      } else {
        setFavorites([]);
      }
    } catch (error) {
      console.error("Erro ao ler favoritos do localStorage:", error);
      setFavorites([]);
    }
  }, [userId]);

  // 3) Sempre que favorites mudar, salvar de volta usando a chave do userId
  useEffect(() => {
    if (!userId) return;
    try {
      localStorage.setItem(
        `senacfood_favorites_${userId}`,
        JSON.stringify(favorites)
      );
    } catch (error) {
      console.error("Erro ao salvar favoritos no localStorage:", error);
    }
  }, [favorites, userId]);

  // helpers
  const isFavorite = (id) => favorites.some((f) => f.id === id);

  const toggleFavorite = (recipe) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === recipe.id);
      if (exists) {
        return prev.filter((f) => f.id !== recipe.id);
      }
      return [...prev, recipe];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  const value = useMemo(
    () => ({
      favorites,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      userId,
    }),
    [favorites, userId]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
