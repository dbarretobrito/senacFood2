import React from "react";
import {
  Card,
  Cover,
  HeartButton,
  CardBody,
  CardTitle,
  MetaRow,
  MetaPill,
  PlaceholderEmoji,
} from "./styles";

// Mapeamento por palavras-chave (igual usamos nas categorias)
const emojiMap = {
  sobremesa: "🍰",
  doce: "🧁",
  bolo: "🎂",
  torta: "🍰",
  sorvete: "🍨",
  gelato: "🍨",
  picole: "🍦",

  carne: "🥩",
  frango: "🍗",
  bife: "🥩",
  porco: "🥓",

  sanduiche: "🥪",
  sanduíche: "🥪",
  lanche: "🍔",
  hamburguer: "🍔",
  hambúrguer: "🍔",

  salada: "🥗",
  folha: "🥗",
  verde: "🥗",

  vegano: "🥬",
  vegetariano: "🥬",
  veggie: "🥬",

  peixe: "🐟",
  salmao: "🐟",
  salmão: "🐟",
  atum: "🐟",
  "frutos do mar": "🦐",

  massa: "🍝",
  macarrao: "🍝",
  macarrão: "🍝",
  pasta: "🍝",
  espaguete: "🍝",

  sopa: "🍲",
  caldo: "🍲",

  suco: "🥤",
  bebida: "🥤",
  drink: "🥤",
  refrigerante: "🥤",
  cafe: "☕",
  café: "☕",

  oriental: "🍣",
  japones: "🍣",
  japonês: "🍣",
};

function getEmojiForCategory(category) {
  if (!category) return "🍽️";

  const normalized = category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (const keyword of Object.keys(emojiMap)) {
    if (normalized.includes(keyword)) {
      return emojiMap[keyword];
    }
  }

  return "🍽️";
}

// deixa "sorvete de chocolate" → "Sorvete De Chocolate"
function toTitleCase(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export default function RecipeCard({
  title,
  image,
  time,
  category,
  featured = false,
  onFavorite,
  isFavorite = false,
}) {
  const coverStyle = image ? { backgroundImage: `url(${image})` } : {};
  const placeholderEmoji = !image ? getEmojiForCategory(category) : null;

  const displayTitle = toTitleCase(title);
  const displayCategory = toTitleCase(category);

  return (
    <Card $featured={featured}>
      <Cover style={coverStyle}>
        {!image && (
          <PlaceholderEmoji aria-hidden="true">
            {placeholderEmoji}
          </PlaceholderEmoji>
        )}

        {onFavorite && (
          <HeartButton
            type="button"
            aria-label={
              isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
            }
            aria-pressed={isFavorite}
            onClick={onFavorite}
            title={
              isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
            }
            $active={isFavorite}
          >
            {isFavorite ? "♥" : "♡"}
          </HeartButton>
        )}
      </Cover>

      <CardBody $featured={featured}>
        <CardTitle>{displayTitle}</CardTitle>
        <MetaRow>
          {time && <MetaPill>⏱️ {time}</MetaPill>}
          {displayCategory && <MetaPill>🍽️ {displayCategory}</MetaPill>}
        </MetaRow>
      </CardBody>
    </Card>
  );
}
