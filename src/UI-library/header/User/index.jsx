import React, { useState } from "react";
import { UserWrapper, UserEmail, UserName } from "./styles";
import useAuth from "../../../hooks/useAuth";
import { Paths } from "../../../consts/paths";
import { Link } from "react-router-dom";
import DefaultAvatar from "../DefaultAvatar";
import EditAvatar from "../EditAvatar";
import styled from "styled-components";

const User = () => {
  const auth = useAuth();
  const [userAvatar, setUserAvatar] = useState(auth.user.photo);

  return (
    <UserWrapper>
      {auth.isLoaded && auth.user && (
        <>
          {userAvatar ? (
            <>
              <img className="user-avatar" src={userAvatar} alt="аватар" width={46} height={46} />
              <EditAvatar />
            </>
          ) : (
            <DefaultAvatar />
          )}

          <Link to={Paths.profile} title="Посмотреть профиль">
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
