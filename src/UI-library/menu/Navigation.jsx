import React from "react";
import styled from "styled-components";
import { MenuLinks } from "../../consts/menuLinks";
import LinkItem from "./LinkItem";

const Navigation = () => {
  return (
    <NavWrapper>
      {MenuLinks.map((link, index) => (
        <LinkItem key={index} linkInfo={link} />
      ))}
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: grid;
  gap: 5px;
  max-width: 220px;
  text-align: left;
  justify-content: center;
`;

export default Navigation;
