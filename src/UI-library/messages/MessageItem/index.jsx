import React from "react";
import { MessageWrapper, MessageCloseBtnWrapper } from "./styles";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import CloseBtn from "../../buttons/CloseBtn";
import MessageText from "../MessageText";

const MessageItem = ({ message }) => {
  return (
    <MessageWrapper
      className={`${
        message.status === "warning"
          ? "message-btn"
          : `message-btn message-btn--${message.status}`
      }`}
    >
      <div>
        <AiOutlineExclamationCircle />
      </div>
      <MessageText message={message} />
      <MessageCloseBtnWrapper>
        <CloseBtn />
      </MessageCloseBtnWrapper>
    </MessageWrapper>
  );
};

export default MessageItem;
