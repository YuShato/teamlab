import React from "react";
import { MessageTextWrapper, MessageInfo } from "./styles";
import MessageBtn from "../MessageBtn";

const MessageText = ({ message }) => {
  return (
    <MessageTextWrapper>
      <MessageInfo>{message.text}</MessageInfo>
      <MessageBtn text={message.action} />
    </MessageTextWrapper>
  );
};

export default MessageText;
