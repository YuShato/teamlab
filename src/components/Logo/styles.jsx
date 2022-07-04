import styled from "styled-components";

export const LogoContainer = styled.div`
  grid-area: logo;
  .this {
    width: 80px;
    height: 80px;
    cursor: pointer;
    position: relative;
    margin: 25px auto;
  }
  .this .sq {
    width: 30px;
    height: 30px;
    background: #94c5ee;
    position: absolute;
    left: 25px;
    top: 25px;
  }
  .this .s1 {
    display: inline-block;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 0 solid transparent;
    border-bottom: 25px solid #94c5ee;
    position: absolute;
    left: 25px;
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    top: 0;
  }
  .this .s2 {
    display: inline-block;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 25px solid #94c5ee;
    border-bottom: 0 solid transparent;
    position: absolute;
    bottom: 0;
    -webkit-transform: translateY(5px);
    -moz-transform: translateY(5px);
    -ms-transform: translateY(5px);
    -o-transform: translateY(5px);
    transform: translateY(10px);
    -webkit-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    -o-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
    left: 25px;
  }
  .this .s3 {
    display: inline-block;
    border-left: 0 solid transparent;
    border-right: 25px solid #94c5ee;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    position: absolute;
    left: 0;
    top: 25px;
    -webkit-transform: translateX(-5px);
    -moz-transform: translateX(-5px);
    -ms-transform: translateX(-5px);
    -o-transform: translateX(-5px);
    transform: translateX(-5px);
    -webkit-transform-origin: 100% 50%;
    -moz-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    -o-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }
  .this .s4 {
    display: inline-block;
    border-left: 25px solid #94c5ee;
    border-right: 0 solid transparent;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    position: absolute;
    right: 0;
    top: 25px;
    -webkit-transform: translateX(5px);
    -moz-transform: translateX(5px);
    -ms-transform: translateX(5px);
    -o-transform: translateX(5px);
    transform: translateX(5px);
    -webkit-transform-origin: 0 50%;
    -moz-transform-origin: 0 50%;
    -ms-transform-origin: 0 50%;
    -o-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }
  .this .text {
    font-family: Helvetica, sans-serif;
    position: absolute;
    left: 53%;
    color: #54b3d6;
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 3px;
    bottom: 10px;
    opacity: 0;
    font-weight: 100;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transition: all 100ms linear;
    -moz-transition: all 100ms linear;
    transition: all 100ms linear;
  }
  .this .perspective {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    perspective: 150px;
    position: absolute;
    left: 50%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }
  .this:hover .perspective {
    -webkit-transform: rotateX(60deg) rotate(45deg);
    -moz-transform: rotateX(60deg) rotate(45deg);
    -ms-transform: rotateX(60deg) rotate(45deg);
    -o-transform: rotateX(60deg) rotate(45deg);
    transform: rotateX(60deg) rotate(45deg);
  }
  .this:hover .perspective .s1 {
    -webkit-transform: translateX(0) rotateX(-126.87deg);
    -moz-transform: translateX(0) rotateX(-126.87deg);
    -ms-transform: translateX(0) rotateX(-126.87deg);
    -o-transform: translateX(0) rotateX(-126.87deg);
    transform: translateX(0) rotateX(-126.87deg);
  }
  .this:hover .perspective .s2 {
    -webkit-transform: translateX(0) rotateX(126.87deg);
    -moz-transform: translateX(0) rotateX(126.87deg);
    -ms-transform: translateX(0) rotateX(126.87deg);
    -o-transform: translateX(0) rotateX(126.87deg);
    transform: translateX(0) rotateX(126.87deg);
  }
  .this:hover .perspective .s3 {
    -webkit-transform: translateX(0) rotateY(126.87deg);
    -moz-transform: translateX(0) rotateY(126.87deg);
    -ms-transform: translateX(0) rotateY(126.87deg);
    -o-transform: translateX(0) rotateY(126.87deg);
    transform: translateX(0) rotateY(126.87deg);
  }
  .this:hover .perspective .s4 {
    -webkit-transform: translateX(0) rotateY(-126.87deg);
    -moz-transform: translateX(0) rotateY(-126.87deg);
    -ms-transform: translateX(0) rotateY(-126.87deg);
    -o-transform: translateX(0) rotateY(-126.87deg);
    transform: translateX(0) rotateY(-126.87deg);
    border-left: 25px solid #7ba5c7;
  }
  .this:hover .text {
    opacity: 1;
    -webkit-transition: all 500ms linear 500ms;
    -moz-transition: all 500ms linear 500ms;
    transition: all 500ms linear 500ms;
  }
`;