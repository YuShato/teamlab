import styled from "styled-components";

export const UserWrapper = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
  column-gap: 10px;
  flex-wrap: wrap;
  max-width: 200px;
  justify-content: flex-end;
  position: relative;

  img {
    background-color: gray;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  a {
    text-decoration: none;
    display: flex;
    max-width: 150px;
    flex-wrap: wrap;

    &:hover {
      text-decoration: underline;
      color: var(--accent_blue);
    }
  }
`;

export const UserEmail = styled.span`
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: var(--gray);
`;

export const UserName = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #192a3e;
`;
