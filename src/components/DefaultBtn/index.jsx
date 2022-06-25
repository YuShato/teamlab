import React from "react";
import { DefaultBtnWrap } from "./styles";

const DefaultBtn = ({ data }) => {
    return (
        <DefaultBtnWrap
            className={`${data.color === "default"
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

export default DefaultBtn;