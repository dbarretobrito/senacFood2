import React from "react";
import { Nav, Logo, NavLinks, NavItem } from "./styles";

export default function Navbar() {
  return (
    <Nav>
      <Logo>Senac Food</Logo>
      <NavLinks>
        <NavItem>Receitas</NavItem>
        <NavItem>Favoritos</NavItem>
        <NavItem>Contato</NavItem>
      </NavLinks>
    </Nav>
  );
}
