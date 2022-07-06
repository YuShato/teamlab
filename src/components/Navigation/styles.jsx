import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
  grid-area: nav;
  grid-template-areas:
    "logo"
    "menu";
  grid-template-rows: 80px 1fr;
  width: 250px;
  background-color: var(--white);
  box-shadow: 6px 2px 15px 5px rgba(91,172,255,0.38);
`;

export const MenuContainer = styled.div`

  grid-area: menu;
  display: grid;
  gap: 8px;
  text-align: left;
  justify-content: center;
  justify-items: flex-start;
  align-items: center;
  align-content: start;
`;