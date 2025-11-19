// src/components/RecommendedSection/index.jsx
import React from "react";
import { Section, Title, Rail, Slide, SeeAllRow } from "./styles";
import RecipeCard from "../RecipeCard";
import { Link } from "react-router-dom";

// Sugestões estáticas "SenacFood" (apenas frontend)
const SENAC_SUGGESTIONS = [
  {
    id: 101,
    title: "A Mais Cremosa Massa de Frango com Bacon",
    image:
      "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=1200&q=80",
    time: "30 Minutos",
    category: "Massas",
    featured: false,
  },
  {
    id: 102,
    title: "Panqueca de Frutas com Laranja e Mirtilo",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=80",
    time: "30 Minutos",
    category: "Doces",
    featured: false,
  },
  {
    id: 103,
    title: "Salmão Assado ao Limão com Molho de Gengibre",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    time: "30 Minutos",
    category: "Frutos do Mar",
    featured: false,
  },
  {
    id: 104,
    title: "Almôndegas de Frango com Cream Cheese",
    image:
      "https://images.unsplash.com/photo-1544025163-459f3f6f9a5f?auto=format&fit=crop&w=1200&q=80",
    time: "30 Minutos",
    category: "Carne",
    featured: false,
  },
];

export default function RecommendedSection({
  items = SENAC_SUGGESTIONS,
  onFavorite = () => {},
}) {
  return (
    <Section aria-labelledby="rec-title">
      <Title id="rec-title">Você também pode gostar dessas receitas</Title>

      <Rail>
        {items.map((r) => (
          <Slide key={r.id}>
            {/* a rota real no App.jsx é /receita/:id */}
            <Link
              to={`/receita/${r.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RecipeCard
                title={r.title}
                image={r.image}
                time={r.time}
                category={r.category}
                featured={r.featured}
                onFavorite={(e) => {
                  e.preventDefault(); // não navegar ao favoritar
                  onFavorite(r);
                }}
              />
            </Link>
          </Slide>
        ))}
      </Rail>

      <SeeAllRow>
        {/* hoje não existe /receitas, então levo pra Home */}
        <Link to="/">Ver todas</Link>
      </SeeAllRow>
    </Section>
  );
}
