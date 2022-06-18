import React from "react";
import {
  LoginPageWrapper,
  FormWrapper,
  LoginTitle,
  FormInput,
  FormButton,
  LoginName,
  FormMessage,
  Form
} from "./styles";

const LoginForm = () => {
  return (
    <LoginPageWrapper action="#!">
      <FormWrapper>
        <Form>
          <LoginTitle>Вход</LoginTitle>
          <FormInput type="email" placeholder="Логин" reqiured="true" />
          <FormInput type="password" placeholder="Пароль" reqiured="true" />
          <FormButton
            className="loginButton"
            type="button"
            onClick={() => {
              console.log("Войти");
            }}
          >
            <LoginName>Войти</LoginName>
          </FormButton>
          <FormMessage>
            Забыли пароль? <a href="#">Восстановить пароль</a>
          </FormMessage>
        </Form>
      </FormWrapper>
    </LoginPageWrapper>
  );
};

export default LoginForm;
