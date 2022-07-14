import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkItemWrapper = styled(Link)`
  background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #0f233e 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: flex;
  gap: 20px;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  & svg {
    width: 20px;
    height: 20px;
    color: var(--icon_gray);
  }
  &.active {
    font-weight: 700;
  }
  &:before,
  &.active:before {
    content: "";
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
  }
  &:active {
    background-image: linear-gradient(
      to right,
      #54b3d6,
      #c054d6 50%,
      #3e0f30 50%
    );
  }
  &:hover,
  &.active {
    background-position: 0;
    & svg {
      fill: #54b3d6;
    }
  }
  &:hover::before,
  &.active::before {
    width: ${(props) => (props.isTextShow ? "140px" : "20px")};
    
  }
  &.active svg {
    fill: #54b3d6;
  }
`;