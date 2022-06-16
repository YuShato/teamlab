import React from "react";
import { LinkItemWrapper } from "./styles";

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

export default LinkItem;
