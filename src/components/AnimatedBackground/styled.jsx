import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  width: 100%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(#6bbcee, #354654);
  animation: fadeIn 1 1s ease-out;
  & .light {
    position: absolute;
    width: 0px;
    opacity: 0.75;
    background-color: white;
    box-shadow: #e9f1f1 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
  &.x1 {
    animation: floatUp 4s infinite linear;
    transform: scale(1);
  }
  &.x2 {
    animation: floatUp 7s infinite linear;
    transform: scale(1.6);
    left: 15%;
  }
  &.x3 {
    animation: floatUp 2.5s infinite linear;
    transform: scale(0.5);
    left: -15%;
  }
  &.x4 {
    animation: floatUp 4.5s infinite linear;
    transform: scale(1.2);
    left: -34%;
  }
  & .x5 {
    animation: floatUp 8s infinite linear;
    transform: scale(2.2);
    left: -57%;
  }
  & .x6 {
    animation: floatUp 3s infinite linear;
    transform: scale(0.8);
    left: -81%;
  }
  .x7 {
    animation: floatUp 5.3s infinite linear;
    transform: scale(3.2);
    left: 37%;
  }
  .x8 {
    animation: floatUp 4.7s infinite linear;
    transform: scale(1.7);
    left: 62%;
  }
  .x9 {
    animation: floatUp 4.1s infinite linear;
    transform: scale(0.9);
    left: 85%;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes floatUp {
    0% {
      top: 100vh;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 0vh;
      opacity: 0.8;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: -100vh;
      opacity: 0;
    }
  }
`;