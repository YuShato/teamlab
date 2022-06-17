import React from "react";
import DefaultBtn from "../../buttons/DefaultBtn";
import { BtnList } from "./styles";

const BtnWrapper = ({ btnsArray }) => {
  return (
    <BtnList>
      {btnsArray.map((btnItem, index) => (
        <li key={index}>
          <DefaultBtn key={index} data={btnItem} />
        </li>
      ))}
    </BtnList>
  );
};

export default BtnWrapper;
