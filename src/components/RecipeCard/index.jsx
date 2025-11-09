import React from "react";
import {
  Card,
  Cover,
  HeartButton,
  CardBody,
  CardTitle,
  MetaRow,
  MetaPill,
} from "./styles";

export default function RecipeCard({
  title,
  image,
  time,
  category,
  featured = false,
  onFavorite,
}) {
  return (
    <Card $featured={featured}>
      <Cover style={{ backgroundImage: `url(${image})` }}>
        <HeartButton
          type="button"
          aria-label="favoritar"
          onClick={onFavorite}
          title="Favoritar"
        >
          ♡
        </HeartButton>
      </Cover>

      <CardBody $featured={featured}>
        <CardTitle>{title}</CardTitle>
        <MetaRow>
          <MetaPill>⏱️ {time}</MetaPill>
          <MetaPill>🍽️ {category}</MetaPill>
        </MetaRow>
      </CardBody>
    </Card>
  );
}
