import React from "react";
import { Paths } from "../../../consts/paths";
import { MessageBtnWrapper } from "./styles";

const MessageBtn = ({ text }) => {
  return <MessageBtnWrapper to={Paths.abonement}>{text}</MessageBtnWrapper>;
};

export default MessageBtn;
