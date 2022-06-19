import styled from "styled-components";

export const ShowPasswordBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 50%;
  top: 53%;
  left: 80%;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--accent_blue);
  }

  &:hover {
    svg {
      fill: var(--dark_blue);
    }
  }
`;
