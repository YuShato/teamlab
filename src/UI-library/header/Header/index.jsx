import React from "react";
import { mockCities } from "../../../consts/mockCities";
import LogOut from "../../buttons/LogOut";
import DropDownList from "../DropDownList";
import Search from "../Search";
import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <DropDownList citiesListArray={mockCities} />
      <Search />
      <LogOut />
    </HeaderWrapper>
  );
};

export default Header;
