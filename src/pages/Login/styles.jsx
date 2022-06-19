import styled from "styled-components";

export const LoginPageWrapper = styled.div`
  width: 100%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;

  background: -webkit-linear-gradient(left, #0db7bf 0%, #4facfe 100%);
  background: -o-linear-gradient(left, #0db7bf 0%, #4facfe 100%);
  background: linear-gradient(to right, #0db7bf 0%, #4facfe 100%);
  position: relative;
  height: 100vh;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198' style='&%2310;'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3E%3Cstop stop-color='%2357BBC1' stop-opacity='.25' offset='0%25'/%3E%3Cstop stop-color='%23015871' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='rgba(255,255,255,0.2)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z' transform='matrix(-1 0 0 1 1600 0)' style='&%2310; /* fill: rgba(255,255,255,0.2); */&%2310;'/%3E%3C/svg%3E")
      repeat-x center bottom;
    height: 140px;
    background-size: auto 100px;
    background-position: bottom;
    animation: wave 20s linear infinite;
    bottom: 0;
    top: inherit;
  }

  &:after {
    animation-duration: 20s;
  }

  @keyframes wave {
    from {
      background-position-x: 0px;
    }

    to {
      background-position-x: -1600px;
    }
  }
`;

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
  font-weight: 600;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  &::placeholder {
    letter-spacing: 1px;
  }

  &:focus {
    background: rgba(54, 140, 204, 0.11);
    color: #212121;
  }
`;

export const Form = styled.form`
  width: 100%;
`;
