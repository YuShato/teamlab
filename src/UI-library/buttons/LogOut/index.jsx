import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { BiDoorOpen } from "react-icons/bi";
import { LogoutBtnWrapper } from "./styles";
import { Paths } from "../../../consts/paths";

const LogOut = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate(Paths.login);
  };

  return (
    <LogoutBtnWrapper onClick={onLogOut} title="Выйти">
      <BiDoorOpen/>
    </LogoutBtnWrapper>
  );
};

export default LogOut;
