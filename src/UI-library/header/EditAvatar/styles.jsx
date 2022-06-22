import styled from "styled-components";

export const EditAvatarWrapper = styled.div`
  & > button {
    position: absolute;
    width: 20px;
    height: 20px;
    font-size: 16px;
    color: var(--gray);
    border-radius: 50%;
    border: none;
    background-color: var(--white);
    left: 24px;

    & svg {
      fill: var(--gray);
    }

    &:hover {
      color: var(--green);
    }
  }
`;
