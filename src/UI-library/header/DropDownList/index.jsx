import React, { useState } from "react";
import { DropDown } from "./styles";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const DropDownList = ({ citiesListArray }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Выберите город");

  return (
    <DropDown className="dropdown">
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className="dropdown-btn"
      >
        {selected}
        {isActive ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </div>
      <div
        className="dropdown-content"
        style={{ display: isActive ? "block" : "none" }}
      >
        {citiesListArray.map((city, index) => {
          return (
            <div
              key={index}
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
              }}
              className="item"
            >
              {city}
            </div>
          );
        })}
      </div>
    </DropDown>
  );
};

export default DropDownList;
