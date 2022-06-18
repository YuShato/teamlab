import React from "react";
import { mockCities } from "../../../consts/mockCities";
import DropDownList from "../DropDownList";
import Search from "../Search";
import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <DropDownList citiesListArray={mockCities} />
      <Search />
    </HeaderWrapper>
  );
};

export default Header;
