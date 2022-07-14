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
  grid-template-rows: 100px 1fr;
  width:  ${(props) => (props.isShowNav ? "250px" : "80px")};
  background-color: var(--white);
  box-shadow: 6px 2px 15px 5px rgba(91,172,255,0.38);
  animation-name: ${(props) => (props.isShowNav ? "slide-in-left" : "slide-in-right")};
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;

  @keyframes slide-in-left {
  0%{
    transform: translateX(-60px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0%{
    transform: translateX(60px);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}
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

