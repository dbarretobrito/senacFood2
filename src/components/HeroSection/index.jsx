import React from "react";
import {
  HeroWrapper,
  SplitCard,
  LeftPane,
  RightPane,
  TagPill,
  TagIcon,
  TagText,
  Title,
  Description,
  ChipRow,
  Chip,
  FooterRow,
  Author,
  AuthorAvatar,
  AuthorInfo,
  CtaButton,
  CtaIcon,
} from "./styles";

import heroImage from "../../assets/mask-group.png";
import authorImg from "../../assets/ellipse-2.png";
import tagIcon from "../../assets/image-14.png";
import playIcon from "../../assets/vector-7.svg";

export default function HeroSection() {
  return (
    <HeroWrapper>
      <SplitCard>
        <LeftPane>
          <TagPill>
            <TagIcon src={tagIcon} alt="Tag" />
            <TagText>Receitas Quentes</TagText>
          </TagPill>

          <Title>Asinhas de frango picantes</Title>

          <Description>
            Douradas por fora, macias por dentro e com um toque especial de
            pimenta para despertar o sabor.
          </Description>

          <ChipRow>
            <Chip>🍗 Frango</Chip>
            <Chip>⏱️ 30 min</Chip>
          </ChipRow>

          <FooterRow>
            <Author>
              <AuthorAvatar src={authorImg} alt="Autor" />
              <AuthorInfo>
                <strong>João da Silva</strong>
                <span>15 Setembro 2025</span>
              </AuthorInfo>
            </Author>

            <CtaButton>
              <CtaIcon src={playIcon} alt="Play" />
              Ver Receitas
            </CtaButton>
          </FooterRow>
        </LeftPane>

        <RightPane>
          <img src={heroImage} alt="Imagem da receita" />
        </RightPane>
      </SplitCard>
    </HeroWrapper>
  );
}
