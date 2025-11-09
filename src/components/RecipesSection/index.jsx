import React from "react";
import {
  Section,
  Header,
  Title,
  Subtitle,
  CtaRow,
  CtaButton,
  CardsGrid,
} from "./styles";
import RecipeCard from "../RecipeCard";

const RECIPES = [
  {
    id: 1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
    time: "30 Minutos",
    category: "Lanche",
    featured: true,
  },
  {
    id: 2,
    title: "Salmão Assado ao Limão com Molho de Gengibre",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    time: "30 Minutos",
    category: "Frutos do Mar",
  },
  {
    id: 3,
    title: "Panqueca de Aveia com Morango e Calda de Mel",
    image: "https://images.unsplash.com/photo-1509460913899-35fd2b1df236?q=80&w=1200&auto=format&fit=crop",
    time: "30 Minutos",
    category: "Doce",
  },
  {
    id: 4,
    title: "Salada Mista com Maionese, Fresca e Saudável",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    time: "30 Minutos",
    category: "Saudável",
  },
  {
    id: 5,
    title: "Almôndegas de Frango com Cream Cheese",
    image: "https://images.unsplash.com/photo-1604908554007-08969a2c4970?q=80&w=1200&auto=format&fit=crop",
    time: "30 Minutos",
    category: "Carne",
  },
  {
    id: 6,
    title: "Wrap de Frango com Legumes e Molho Caesar",
    image: "https://images.unsplash.com/photo-1601050690597-8c8a9249f8e8?q=80&w=1200&auto=format&fit=crop",
    time: "25 Minutos",
    category: "Lanche",
  },
  {
    id: 7,
    title: "Risoto de Cogumelos com Queijo Parmesão",
    image: "https://images.unsplash.com/photo-1601050690597-8c8a9249f8e8?q=80&w=1200&auto=format&fit=crop",
    time: "40 Minutos",
    category: "Vegetariano",
  },
  {
    id: 8,
    title: "Smoothie de Frutas Vermelhas com Aveia",
    image: "https://images.unsplash.com/photo-1601050690597-8c8a9249f8e8?q=80&w=1200&auto=format&fit=crop",
    time: "10 Minutos",
    category: "Bebida",
  },
  {
    id: 9,
    title: "Pizza Margherita Artesanal",
    image: "https://images.unsplash.com/photo-1601924928376-3f6a3b57e8a8?q=80&w=1200&auto=format&fit=crop",
    time: "35 Minutos",
    category: "Italiana",
  },
];

export default function RecipesSection() {
  return (
    <Section>
      <Header>
        <Title>Receitas simples e deliciosas</Title>
        <Subtitle>Prepare pratos incríveis em poucos passos.</Subtitle>

        <CtaRow>
          <CtaButton type="button">SUGESTÕES COM IA?</CtaButton>
        </CtaRow>
      </Header>

      <CardsGrid>
        {RECIPES.map((r) => (
          <RecipeCard
            key={r.id}
            title={r.title}
            image={r.image}
            time={r.time}
            category={r.category}
            featured={r.featured}
          />
        ))}
      </CardsGrid>
    </Section>
  );
}
