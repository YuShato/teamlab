import React from "react";
import { NavWrapper, MenuContainer } from "./styles";
import { MenuLinks } from "../../../consts/menuLinks";
import Logo from "../../header/Logo";
import LinkItem from "../LinkItem";

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

export default Navigation;
