import React from "react";
import { UserWrapper, UserEmail, UserName } from "./styles";
import useAuth from "../../../hooks/useAuth";
import { Paths } from "../../../consts/paths";
import { Link } from "react-router-dom";
import DefaultAvatar from "../DefaultAvatar";

const User = () => {
  const auth = useAuth();
  return (
    <UserWrapper>
      {auth.isLoaded && auth.user && (
        <>
          {auth.user.photo ? (
            <img src={auth.user.photo} alt="аватар" width={46} height={46} />
          ) : (
            <DefaultAvatar />
          )}
          <Link to={Paths.profile}>
            
              <UserName>
                {auth.user.firstName} {auth.user.lastName}
              </UserName>
              <UserEmail>{auth.user.email}</UserEmail>
            
          </Link>
        </>
      )}
    </UserWrapper>
  );
};

export default User;
