import React from "react";
import {
  HeroWrapper,
  SplitCard,
  LeftPane,
  RightPane,
  Title,
  Description,
  ChipRow,
  Chip,
  FooterRow,
  CalloutTitle,
  CtaButton,
  CtaEmoji,
} from "./styles";

import heroImage from "../../assets/mask-group.png";

export default function HeroSection() {
  const handleSeeRecipes = () => {
    const section = document.getElementById("recipes-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroWrapper>
      <SplitCard>
        <LeftPane>
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
            

            <CtaButton type="button" onClick={handleSeeRecipes}>
              <CtaEmoji role="img" aria-hidden="true">
                🍽️
              </CtaEmoji>
              Ver receitas
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
