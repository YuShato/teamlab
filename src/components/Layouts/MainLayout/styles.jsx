import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "nav head"
    "nav main"
    "nav main";
  grid-template-rows: 60px 1fr;
  grid-template-columns: minmax(60px, 250px) 1fr;
  width: 100vw;
  height: 100vh;
  margin: 0;

  @media (min-device-width: 768px) and (max-device-width: 1024px){
    grid-template-rows: 60px 1fr;
    grid-template-columns: minmax(60px, 200px) 1fr;
  }

  @media (min-device-width: 425px) and (max-device-width: 768px) {
    grid-template-areas:
      "head"
      "nav"
      "main";
    grid-template-rows: 60px min-content 1fr;
    grid-template-columns: 1fr;
    min-height: 100vh;
    height: auto;
  }

  @media (min-device-width: 320px) and (max-device-width: 425px)  {
    grid-template-areas:
      "head"
      "nav"
      "main";
    grid-template-rows: min-content min-content 1fr;
    grid-template-columns: 1fr;
    min-height: 100vh;
    height: auto;
  }
`;
