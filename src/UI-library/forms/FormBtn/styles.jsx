import styled from "styled-components";

export const FormButton = styled.button`
  letter-spacing: 1px;
  text-transform: uppercase;
  outline: 0;
  background: #368ccc;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  &:hover,
  &:active,
  &:focus {
    background: #369ccc;
  }
`;

export const LoginName = styled.span`
  -webkit-transition: 0.1s;
  -o-transition: 0.1s;
  transition: 0.1s;
`;
