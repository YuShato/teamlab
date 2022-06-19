import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { LogoutBtnWrapper } from "./styles";

const LogOut = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate("/login");
  };

  return (
    <LogoutBtnWrapper onClick={onLogOut}>
      <GrLogout />
    </LogoutBtnWrapper>
  );
};

export default LogOut;
