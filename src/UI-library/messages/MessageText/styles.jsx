import styled from "styled-components";

export const MessageTextWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 8px;
`;

export const MessageInfo = styled.p`
  display: flex;
  align-items: center;
  max-width: 400px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: var(--white);
  text-align: left;
`;
