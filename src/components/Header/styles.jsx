import styled from "styled-components";

export const HeaderWrapper = styled.header`
  grid-area: head;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 300px 250px 200px 100px;
  background-color: var(--white);
  padding-left: 20px;
  padding-right: 20px;
`;