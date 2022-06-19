import styled from "styled-components";

export const NotFoundContainer = styled.main`
  background-color: #95c2de;
`;

export const MainBox = styled.div`
  margin: auto;
  height: 100vh;
  width: 600px;
  position: relative;
  color: var(--white);
  font-size: 180px;
`;

export const Error = styled.div`
  position: absolute;
  left: 20%;
  top: 8%;
`;

export const Error2 = styled.div`
  position: absolute;
  left: 68%;
  top: 8%;
`;

export const Message = styled.div`
  color: var(--dark_blue);
  text-align: center;
  font-size: 24px;
  position: absolute;
  left: 16%;
  top: 45%;
  width: 75%;

  a {
    text-decoration: none;
    color: var(--white);
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Question = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 15px solid white;
  position: absolute;
  top: 12%;
  left: 38%;

  svg {
    position: absolute;
    width: 160px;
    height: 160px;
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
