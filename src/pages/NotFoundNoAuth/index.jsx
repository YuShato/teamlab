import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../consts/paths";
import {
  MainBox,
  NotFoundContainer,
  Error,
  Error2,
  Message,
  Question,
} from "../NotFoundAuth/styles";
import { BsQuestion } from "react-icons/bs";

const NotFoundNoAuth = () => {
  return (
    <NotFoundContainer>
      <MainBox>
        <Error>4</Error>
        <Question>
          <BsQuestion />
        </Question>
        <Error2>4</Error2>
        <Message>
          Страница не существует.
          <p>
            Вернуться на <Link to={Paths.main}>главную</Link> страницую
          </p>
        </Message>
      </MainBox>
    </NotFoundContainer>
  );
};

export default NotFoundNoAuth;
