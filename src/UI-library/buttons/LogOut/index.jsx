import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
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
    <LogoutBtnWrapper onClick={onLogOut}>
      <GrLogout />
    </LogoutBtnWrapper>
  );
};

export default LogOut;
