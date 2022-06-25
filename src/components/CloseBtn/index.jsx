import React from "react";
import { CloseBtnWrapper } from "./styles";

const CloseBtn = () => {
    return (
        <CloseBtnWrapper onClick={() => console.log("закрыть")}>
            <div className="close-container">
                <div className="leftright"></div>
                <div className="rightleft"></div>
            </div>
        </CloseBtnWrapper>
    );
};

export default CloseBtn;