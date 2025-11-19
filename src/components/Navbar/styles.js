import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.06);
  z-index: 50;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Logo = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 1.9rem;
  color: #000;
  user-select: none;
  margin: 0;
  cursor: pointer;
  transition: transform 0.12s ease, opacity 0.12s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
`;

// wrapper central para links
export const CenterNav = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1.4rem;
  }
`;

export const NavLinkItem = styled(NavLink)`
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  font-weight: 500;
  font-size: 0.98rem;
  text-decoration: none;
  color: #000;

  /* garante alinhamento vertical consistente com as="button" */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background: transparent;
  cursor: pointer;

  padding: 0.25rem 0;
  border-bottom: 2px solid transparent;
  line-height: 1;

  transition: color 0.15s ease, border-color 0.15s ease;

  &.active {
    color: ${({ theme }) => theme.colors?.primary || "#0ea5e9"};
    border-color: ${({ theme }) => theme.colors?.primary || "#0ea5e9"};
  }

  &:hover {
    color: ${({ theme }) => theme.colors?.primary || "#0ea5e9"};
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// --- botões circulares (lupa, perfil, IA) ---
export const IconButton = styled.button`
  border: 0;
  background: #0f172a; /* preto azulado */
  width: 38px;
  height: 38px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.3);
  transition: background 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;

  &:hover {
    background: #020617;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.4);
  }

  svg {
    display: block;
  }
`;

// --- menu de usuário (dropdown pequeno) ---
export const UserMenuWrapper = styled.div`
  position: relative;
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 115%;
  right: 0;
  width: 220px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  padding: 0.75rem 0;
  z-index: 60;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    right: 14px;
    width: 12px;
    height: 12px;
    background: #ffffff;
    transform: rotate(45deg);
    box-shadow: -1px -1px 2px rgba(15, 23, 42, 0.06);
  }
`;

export const UserMenuSectionTitle = styled.div`
  padding: 0 0.9rem 0.4rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #64748b;
`;

export const UserMenuItem = styled.button`
  width: 100%;
  padding: 0.55rem 0.9rem;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  color: #0f172a;

  &:hover {
    background: #f1f5f9;
  }
`;

export const UserMenuDivider = styled.hr`
  border: 0;
  border-top: 1px solid #e2e8f0;
  margin: 0.35rem 0;
`;
