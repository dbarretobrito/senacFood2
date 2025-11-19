// src/components/CategoriesSection/index.jsx
import React from "react";
import {
  Section,
  HeadRow,
  Title,
  Grid,
  Card,
  IconWrap,
  Emoji,
  Label,
} from "./styles";

// mapeia nome de categoria -> emoji + tom visual usando PALAVRAS-CHAVE
const emojiToneMap = {
  sobremesa: { emoji: "🍰", tone: "yellow" },
  doce: { emoji: "🧁", tone: "yellow" },
  bolo: { emoji: "🎂", tone: "yellow" },
  torta: { emoji: "🍰", tone: "yellow" },
  sorvete: { emoji: "🍨", tone: "yellow" },
  gelato: { emoji: "🍨", tone: "yellow" },
  picole: { emoji: "🍦", tone: "yellow" },

  carne: { emoji: "🥩", tone: "red" },
  frango: { emoji: "🍗", tone: "red" },
  bife: { emoji: "🥩", tone: "red" },
  porco: { emoji: "🥓", tone: "red" },

  sanduiche: { emoji: "🥪", tone: "neutral" },
  sanduíche: { emoji: "🥪", tone: "neutral" },
  lanche: { emoji: "🍔", tone: "neutral" },
  hamburguer: { emoji: "🍔", tone: "neutral" },
  hambúrguer: { emoji: "🍔", tone: "neutral" },

  salada: { emoji: "🥗", tone: "greenSoft" },
  folha: { emoji: "🥗", tone: "greenSoft" },
  verde: { emoji: "🥗", tone: "greenSoft" },

  vegano: { emoji: "🥬", tone: "green" },
  vegetariano: { emoji: "🥬", tone: "green" },
  veggie: { emoji: "🥬", tone: "green" },

  peixe: { emoji: "🐟", tone: "greenSoft" },
  salmao: { emoji: "🐟", tone: "greenSoft" },
  salmão: { emoji: "🐟", tone: "greenSoft" },
  atum: { emoji: "🐟", tone: "greenSoft" },
  "frutos do mar": { emoji: "🦐", tone: "greenSoft" },

  massa: { emoji: "🍝", tone: "neutral" },
  macarrao: { emoji: "🍝", tone: "neutral" },
  macarrão: { emoji: "🍝", tone: "neutral" },
  pasta: { emoji: "🍝", tone: "neutral" },
  espaguete: { emoji: "🍝", tone: "neutral" },

  sopa: { emoji: "🍲", tone: "neutral" },
  caldo: { emoji: "🍲", tone: "neutral" },

  suco: { emoji: "🥤", tone: "neutral" },
  bebida: { emoji: "🥤", tone: "neutral" },
  drink: { emoji: "🥤", tone: "neutral" },
  refrigerante: { emoji: "🥤", tone: "neutral" },
  cafe: { emoji: "☕", tone: "neutral" },
  café: { emoji: "☕", tone: "neutral" },

  oriental: { emoji: "🍣", tone: "greenSoft" },
  japones: { emoji: "🍣", tone: "greenSoft" },
  japonês: { emoji: "🍣", tone: "greenSoft" },
};

const defaultVisual = { emoji: "🍽️", tone: "neutral" };

function getVisualForCategory(name) {
  if (!name) return defaultVisual;

  const normalized = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (const keyword of Object.keys(emojiToneMap)) {
    if (normalized.includes(keyword)) {
      return emojiToneMap[keyword];
    }
  }

  return defaultVisual;
}

export default function CategoriesSection({
  categories = [],
  selectedCategoryId,
  onSelectCategory,
}) {
  if (!categories || categories.length === 0) return null;

  return (
    <Section aria-labelledby="categories-title">
      <HeadRow>
        <Title id="categories-title">Categorias das suas receitas</Title>
      </HeadRow>

      <Grid>
        {categories.map((cat) => {
          const visual = getVisualForCategory(cat.nome);
          const isSelected = selectedCategoryId === cat.id;

          return (
            <Card
              key={cat.id}
              $tone={visual.tone}
              $selected={isSelected}
              onClick={() =>
                onSelectCategory &&
                onSelectCategory(isSelected ? null : cat.id)
              }
            >
              <IconWrap>
                <Emoji aria-hidden="true">{visual.emoji}</Emoji>
              </IconWrap>
              <Label>{cat.nome}</Label>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
}
