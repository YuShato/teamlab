import React, { useState } from "react";
import {
  LoginPageWrapper,
  FormWrapper,
  LoginTitle,
  FormInput,
  FormButton,
  LoginName,
  FormMessage,
  Form,
} from "./styles";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { ShowPasswordBtn } from "../../UI-library/buttons/ShowPassword/styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const auth = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const { data: loginData } = await api.auth.login(data);

      auth.setToken(loginData.token);
      auth.setUser(loginData.user);
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach((key) => {
          setError(key, {
            type: "manual",
            message: e.response.data.errors[key],
          });
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <LoginPageWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <LoginTitle>Вход</LoginTitle>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormInput
                {...field}
                error={Boolean(errors.email?.message)}
                type="email"
                label="Email"
                placeholder="Логин"
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormInput
                {...field}
                error={Boolean(errors.password?.message)}
                type={passwordShown ? "text" : "password"}
                placeholder="Пароль"
                helperText={errors.password?.message}
              />
            )}
          />
          <ShowPasswordBtn
            type="button"
            onClick={togglePassword}
            aria-label="показать пароль"
          >
            {passwordShown ? <FaEyeSlash /> : <FaEye />}
          </ShowPasswordBtn>
          <FormButton className="loginButton" type="submit">
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

export default LoginPage;
