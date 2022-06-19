import styled from "styled-components";

export const LogoutBtnWrapper = styled.button`
  background: transparent;
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  svg {
    width: 20px;
    height: 20px;

    & path {
      stroke: var(--accent_blue);
    }
  }

  &:hover {
    svg {
      fill: var(--dark_blue);
    }
  }
`;
