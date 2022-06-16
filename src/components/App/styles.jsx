import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "nav head"
    "nav main"
    "nav main";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 250px 1fr;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export const Main = styled.main`
  grid-area: main;
  display: grid;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  background-color: #f5f6f8;
`;
