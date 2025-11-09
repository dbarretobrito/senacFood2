// src/components/Navbar/styles.js
import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  z-index: 10;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Logo = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 1.9rem;
  color: #000;
  user-select: none;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const NavItem = styled.li`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary || "#ff6b6b"};
  }
`;
