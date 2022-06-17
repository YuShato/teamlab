import styled from "styled-components";
import { Link } from "react-router-dom";

export const MessageBtnWrapper = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  color: var(--white);
  background-color: #fe6b00;
  padding: 15px 30px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  border-radius: 6px;
  border-color: transparent;
  transition: 0.3s all;

  &:hover,
  &:focus {
    opacity: 0.7;
    box-shadow: -5px -5px 3px -5px rgba(34, 60, 80, 0.6) inset;
  }

  &:active {
    background-color: #fe8c00;
  }
`;
