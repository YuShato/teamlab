import styled from "styled-components";

export const DefaultAvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--accent_blue);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    fill: var(--accent_blue);
  }
`;
