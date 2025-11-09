import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import RecipesSection from "../../components/RecipesSection"; // <— import novo
import { HomeContainer, Spacer } from "./styles";

export default function HomePage() {
  return (
    <HomeContainer>
      <Navbar />
      <Spacer /> {/* evita sobrepor a navbar fixa */}
      <HeroSection />
      <RecipesSection /> {/* <— render novo */}
    </HomeContainer>
  );
}
