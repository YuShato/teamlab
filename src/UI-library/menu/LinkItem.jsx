import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkItem = ({ linkInfo }) => {
  return (
    <LinkItemWrapper
      to={linkInfo.path}
      aria-label={linkInfo.name}
      className={linkInfo.isActive ? "active" : ""}
    >
      {linkInfo.icon}
      {linkInfo.name}
    </LinkItemWrapper>
  );
};

const LinkItemWrapper = styled(Link)`
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
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

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
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
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
    width: 150px;
  }

  &.active svg {
    fill: #54b3d6;
  }
`;

export default LinkItem;
