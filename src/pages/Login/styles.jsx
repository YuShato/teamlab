import styled from "styled-components";

export const FormWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 400px;
  margin: 20px auto;
  padding: 50px 45px;
  text-align: center;
  box-shadow: 3px 4px 10px 0 rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

export const LoginTitle = styled.h2`
  font-size: 34px;
  text-transform: uppercase;
  margin-bottom: 26px;
  font-weight: 700;
  margin-top: 0;
  color: var(--dark_blue);
  letter-spacing: 2px;
`;

export const FormInput = styled.input`
  position: relative;
  font-family: inherit;
  letter-spacing: 1px;
  outline: 0;
  background: #f2f4f6;
  width: 100%;
  border: 0;
  margin: 0 0 18px;
  padding: 18px 20px;
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 18px;
  font-weight: 500;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  color: var(--dark_blue);
  &::placeholder {
    letter-spacing: 1px;
    color: var(--dark_blue);
  }
  &:focus {
    background: rgba(54, 140, 204, 0.11);
    color: #212121;
  }
`;

export const Form = styled.form`
  width: 100%;
`;