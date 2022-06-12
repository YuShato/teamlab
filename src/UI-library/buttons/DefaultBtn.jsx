import React from "react";
import styled from "styled-components";

const DefaultBtn = ({ data }) => {
  return (
    <DefaultBtnWrap
      className={`${
        data.color === "default"
          ? "default-btn"
          : `default-btn default-btn--${data.color}`
      }`}
      aria-label={data.text}
      onClick={data.onClick}
    >
      {data.icon}
      {data.text}
    </DefaultBtnWrap>
  );
};

const DefaultBtnWrap = styled.button`
  display: flex;
  gap: 10px;
  min-width: 120px;
  max-width: 160px;
  min-height: 40px;
  padding: 8px;
  color: var(--white);
  font-size: 13px;
  line-height: 20px;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow_btn);
  transition: 0.3s all;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

export default DefaultBtn;
