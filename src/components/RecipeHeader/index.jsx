import React from "react";
import {
  HeaderWrap,
  TopRow,
  TitleBlock,
  Title,
  MetaRow,
  Author,
  Avatar,
  AuthorInfo,
  AuthorName,
  AuthorDate,
  Divider,
  Chip,
  RightActions,
  IconButton,
  HeroFigure,
  HeroImg,
  PlayOverlay,
  Description,
} from "./styles";

/* Placeholders (troque quando quiser) */
const AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=faces&q=80";
const HERO =
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1600&q=80";

export default function RecipeHeader() {
  return (
    <HeaderWrap>
      <TopRow>
        <TitleBlock>
          <Title>Arroz Frito Japonês</Title>

          <MetaRow>
            <Author>
              <Avatar src={AVATAR} alt="Avatar do autor" />
              <AuthorInfo>
                <AuthorName>João da Silva</AuthorName>
                <AuthorDate>15 Setembro 2025</AuthorDate>
              </AuthorInfo>
            </Author>

            <Divider />

            <Chip title="Tempo total">⏱️ 15 min</Chip>
            <Divider />
            <Chip title="Culinária">🥢 Oriental</Chip>
          </MetaRow>
        </TitleBlock>

        <RightActions>
          <IconButton type="button" aria-label="Imprimir receita" title="Imprimir">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 9V3h12v6" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              <rect x="4" y="9" width="16" height="8" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M7 17h10v4H7z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="18" cy="13" r="1" />
            </svg>
          </IconButton>

          <IconButton type="button" aria-label="Compartilhar receita" title="Compartilhar">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 6a3 3 0 1 0-2.83-4 3 3 0 0 0 2.83 4Zm-8 8a3 3 0 1 0-2.83 4 3 3 0 0 0 2.83-4Zm8-4a3 3 0 1 0-2.83 4 3 3 0 0 0 2.83-4Z" fill="currentColor" opacity=".25"/>
              <path d="M14 6l-6 8m0 0 6-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </IconButton>
        </RightActions>
      </TopRow>

      <Description>
        Um clássico oriental: arroz frito japonês com ovos e legumes crocantes, finalizado com um molho especial.
      </Description>

      <HeroFigure>
        <HeroImg src={HERO} alt="Arroz frito japonês" loading="lazy" />
        <PlayOverlay aria-hidden="true">
          <svg width="44" height="44" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="white" opacity=".9"/>
            <path d="M10 8l6 4-6 4z" fill="black"/>
          </svg>
        </PlayOverlay>
      </HeroFigure>
    </HeaderWrap>
  );
}
