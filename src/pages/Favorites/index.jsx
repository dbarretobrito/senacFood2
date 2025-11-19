import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import RecipeCard from "../../components/RecipeCard";
import {
  Page,
  Container,
  HeaderRow,
  Title,
  Count,
  Grid,
  CardWrapper,
  EmptyState,
} from "./styles";
import { useFavorites } from "../../context/favorites";

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  const handleUnfavorite = (recipeId) => {
    removeFavorite(recipeId);
  };

  const total = favorites.length;

  return (
    <>
      <Navbar />
      <div style={{ height: 70 }} /> {/* spacer da navbar fixa */}

      <Page>
        <Container>
          <HeaderRow>
            <Title>Favoritos</Title>
            <Count>
              {total === 0
                ? "Nenhuma receita favoritada ainda"
                : `${total} receita${total > 1 ? "s" : ""} favoritada${
                    total > 1 ? "s" : ""
                  }`}
            </Count>
          </HeaderRow>

          {total === 0 ? (
            <EmptyState>
              <p>
                Você ainda não adicionou receitas aos favoritos.
                <br />
                Explore o catálogo e toque no ♡ para salvar suas preferidas.
              </p>
            </EmptyState>
          ) : (
            <Grid>
              {favorites.map((recipe) => (
                <CardWrapper key={recipe.id}>
                  <Link
                    to={`/receita/${recipe.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <RecipeCard
                      title={recipe.title}
                      image={recipe.image}
                      time={recipe.time}
                      category={recipe.category}
                      featured={false}
                      isFavorite={true}
                      onFavorite={(e) => {
                        e.preventDefault(); // não navegar ao desfavoritar
                        handleUnfavorite(recipe.id);
                      }}
                    />
                  </Link>
                </CardWrapper>
              ))}
            </Grid>
          )}
        </Container>
      </Page>
    </>
  );
}
