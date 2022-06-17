import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 48px 1fr 40px;
  grid-column-gap: 8px;
  max-width: 700px;

  border-radius: 8px;

  &.message-btn {
    background-color: var(--status_warning_1);
  }

  & svg {
    color: var(--white);
    width: 20px;
    height: 20px;
  }
`;

export const MessageCloseBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid var(--white);
  height: 100%;
`;
