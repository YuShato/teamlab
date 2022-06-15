import React from "react";
import styled from "styled-components";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import CloseBtn from "../../buttons/CloseBtn";
import MessageText from "./MessageText";

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

const MessageWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 48px 1fr 40px;
  grid-column-gap: 8px;
  max-width: 700px;
  
  border-radius: 8px;

  &.message-btn {
    background-color: var(--status_warning_1);
  }

  & svg {
    color: var(--white);
    width: 20px;
    height: 20px;
  }
`;

const MessageCloseBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid var(--white);
  height: 100%;
`;

export default MessageItem;
