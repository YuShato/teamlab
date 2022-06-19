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
} from "./styles";
import { BsQuestion } from "react-icons/bs";
import Navigation from "../../UI-library/menu/Navigation";
import Header from "../../UI-library/header/Header";
import { Container } from "../../components/App/styles";

const NotFoundAuth = () => {
  return (
    <Container>
      <Navigation />
      <Header />
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
    </Container>
  );
};

export default NotFoundAuth;
