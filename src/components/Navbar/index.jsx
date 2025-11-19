import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Nav,
  Logo,
  CenterNav,
  NavLinks,
  NavLinkItem,
  RightActions,
  IconButton,
  UserMenuWrapper,
  UserMenu,
  UserMenuItem,
  UserMenuSectionTitle,
  UserMenuDivider,
} from "./styles";
import AIInsightModal from "../AIInsightModal";

export default function Navbar() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const openAI = () => setIsAIOpen(true);
  const closeAI = () => setIsAIOpen(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    closeUserMenu();
  };

  // --- clique em "Receitas" na navbar ---
  const handleClickRecipes = () => {
    closeUserMenu();

    if (location.pathname === "/") {
      const target = document.getElementById("recipes-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/", { state: { scrollTo: "recipes-section" } });
    }
  };

  // --- clique na lupa: leva para a Home, scroll e foca na busca ---
  const handleSearchClick = () => {
    closeUserMenu();

    if (location.pathname === "/") {
      const target = document.getElementById("recipes-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      const input = document.getElementById("recipes-search-input");
      if (input) {
        input.focus();
      }
    } else {
      navigate("/", {
        state: {
          scrollTo: "recipes-section",
          focusSearch: true,
        },
      });
    }
  };

  // --- ações do menu de usuário ---
  const handleGoToFavorites = () => {
    navigate("/favoritos");
    closeUserMenu();
  };

  const handleGoToCreateRecipe = () => {
    navigate("/receitas/nova");
    closeUserMenu();
  };

  const handleGoToProfile = () => {
    navigate("/perfil");
    closeUserMenu();
  };

  const handleLogout = () => {
    localStorage.removeItem("senacfood_token");
    navigate("/login", { replace: true });
    closeUserMenu();
  };

  return (
    <>
      <Nav>
        {/* lado esquerdo - logo */}
        <Logo onClick={handleLogoClick} aria-label="Ir para a página inicial">
          Senac Food
        </Logo>

        {/* centro - navegação principal */}
        <CenterNav>
          <NavLinks>
            <li>
              <NavLinkItem
                as="button"
                type="button"
                onClick={handleClickRecipes}
              >
                Receitas
              </NavLinkItem>
            </li>
            <li>
              <NavLinkItem to="/favoritos">Favoritos</NavLinkItem>
            </li>
            <li>
              <NavLinkItem to="/contato">Contato</NavLinkItem>
            </li>
          </NavLinks>
        </CenterNav>

        {/* lado direito - ações (lupa + perfil + IA) */}
        <RightActions>
          {/* botão da lupa (atalho para a busca de receitas) */}
          <IconButton
            type="button"
            aria-label="Buscar receitas"
            title="Buscar receitas"
            onClick={handleSearchClick}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <line
                x1="15"
                y1="15"
                x2="19"
                y2="19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </IconButton>

          {/* wrapper do botão de usuário + menu */}
          <UserMenuWrapper>
            <IconButton
              type="button"
              aria-label="Abrir menu do usuário"
              title="Perfil"
              onClick={toggleUserMenu}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="9"
                  r="3.2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M6.5 19.5c1.4-2.7 3.1-4 5.5-4s4.1 1.3 5.5 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </IconButton>

            {isUserMenuOpen && (
              <UserMenu role="menu" aria-label="Menu do usuário">
                <UserMenuSectionTitle>Minha conta</UserMenuSectionTitle>

                <UserMenuItem onClick={handleGoToFavorites}>
                  <span>Receitas favoritas</span>
                </UserMenuItem>

                <UserMenuItem onClick={handleGoToCreateRecipe}>
                  <span>Criar receita</span>
                </UserMenuItem>

                <UserMenuItem onClick={handleGoToProfile}>
                  <span>Atualizar meus dados</span>
                </UserMenuItem>

                <UserMenuDivider />

                <UserMenuItem onClick={handleLogout}>
                  <span>Sair</span>
                </UserMenuItem>
              </UserMenu>
            )}
          </UserMenuWrapper>

          {/* botão que abre o modal de IA */}
          <IconButton
            type="button"
            onClick={openAI}
            aria-label="Abrir sugestões da IA"
            title="Sugestões com IA"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* ícone simples de “estrelinhas / IA” */}
              <path
                d="M7 4.5L7.8 6.7L10 7.5L7.8 8.3L7 10.5L6.2 8.3L4 7.5L6.2 6.7L7 4.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 10.5L15.6 12.1L17.2 12.7L15.6 13.3L15 14.9L14.4 13.3L12.8 12.7L14.4 12.1L15 10.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="18.5"
                cy="5.5"
                r="1.3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </IconButton>
        </RightActions>
      </Nav>

      {/* modal da IA (overlay fixo) */}
      <AIInsightModal isOpen={isAIOpen} onClose={closeAI} mode="perfil" />
    </>
  );
}
