import React from "react";
import styled from "styled-components";
import MessageBtn from "./MessageBtn";

const MessageText = ({ message }) => {
  return (
    <MessageTextWrapper>
      <MessageInfo>{message.text}</MessageInfo>
      <MessageBtn text={message.action} />
    </MessageTextWrapper>
  );
};

const MessageTextWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding: 8px;
`;

const MessageInfo = styled.p`
  display: flex;
  align-items: center;
  max-width: 400px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  font-feature-settings: "pnum" on, "lnum" on;
  color: var(--white);
  text-align: left;
`;

export default MessageText;
