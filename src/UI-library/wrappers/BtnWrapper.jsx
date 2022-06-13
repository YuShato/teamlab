import React from "react";
import styled from "styled-components";
import DefaultBtn from "../buttons/DefaultBtn";

const BtnWrapper = ({ btnsArray }) => {
  return (
    <BtnList>
      {btnsArray.map((btnItem, index) => (
        <li>
          <DefaultBtn key={index} data={btnItem} />
        </li>
      ))}
    </BtnList>
  );
};

const BtnList = styled.ul`
  max-width: 700px;
  list-style: none;
  margin: 20px;
  display: flex;
  gap: 20px;
`;

export default BtnWrapper;
