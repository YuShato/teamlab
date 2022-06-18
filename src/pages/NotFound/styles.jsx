import styled from "styled-components";

export const NotFoundContainer = styled.main`
  background-color: #95c2de;
`;

export const MainBox = styled.div`
  background-color: #95c2de;
  margin: auto;
  height: 100vh;
  width: 600px;
  position: relative;
`;

export const Error = styled.div`
  color: #ffffff;
  font-size: 11rem;
  position: absolute;
  left: 20%;
  top: 8%;
`;

export const Error2 = styled.div`
  color: #ffffff;
  font-size: 11rem;
  position: absolute;
  left: 68%;
  top: 8%;
`;

export const Message = styled.div`
  text-align: center;
  font-size: 1.6rem;
  position: absolute;
  left: 16%;
  top: 45%;
  width: 75%;

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Question = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  border: 15px solid white;
  position: absolute;
  top: 12%;
  left: 38%;

  svg {
    width: 140px;
    height: 140px;
    fill: white;
    animation-name: rotate-center;
    animation-duration: 3.2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: forwards;
    @keyframes rotate-center {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
