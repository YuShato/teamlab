import React from "react";
import styled from "styled-components";
import { MenuLinks } from "../../consts/menuLinks";
import Logo from "../header/Logo";
import LinkItem from "./LinkItem";

const Navigation = () => {
  return (
    <NavWrapper>
      <Logo />
      <MenuContainer>
        {MenuLinks.map((link, index) => (
          <LinkItem key={index} linkInfo={link} />
        ))}
      </MenuContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  grid-area: nav;
  grid-template-areas:
    "logo"
    "menu";
  grid-template-rows: 80px 1fr;
  width: 250px;
  background-color: var(--white);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

const MenuContainer = styled.div`
  grid-area: menu;
  display: grid;
  gap: 8px;
  text-align: left;
  justify-content: center;
  justify-items: flex-start;
  align-items: center;
  align-content: start;
`;

export default Navigation;
