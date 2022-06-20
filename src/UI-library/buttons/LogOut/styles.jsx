import styled from "styled-components";

export const LogoutBtnWrapper = styled.button`
  background: transparent;
  outline: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  svg {
    width: 24px;
    height: 24px;
    fill: var(--icon_gray);
  }

  &:hover {
    svg {
      fill: var(--accent_blue);
    }
  }
`;
