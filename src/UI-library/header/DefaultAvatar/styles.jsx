import styled from "styled-components";

export const DefaultAvatarWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--accent_blue);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

  svg {
    fill: var(--accent_blue);
  }
`;
