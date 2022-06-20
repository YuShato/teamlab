import React, { useState } from "react";
import {
  FormWrapper,
  LoginTitle,
  FormInput,
  Form,
} from "../../pages/Login/styles";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import FormBtn from "../../UI-library/forms/FormBtn";
import FormMessage from "../../UI-library/forms/FormMessage";
import { FormButton, LoginName } from "../../UI-library/forms/FormBtn/styles";
import { FormMessageWrapper } from "../../UI-library/forms/FormMessage/styles";
import { Paths } from "../../consts/paths";
import { Link } from "react-router-dom";
import AnimatedBackground from "../../UI-library/background/AnimatedBackground";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirectShow, setIsRedirectShow] = useState(false);

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
      setIsRedirectShow(true);
      //   сделать проверку на существование емейла в системе
      // если емейл есть в системе, нарисовать оповещение, что письмо отправлено на почту
      // сделать кнопку ввести пароль с навигацией на страницу логина
      // включить таймер, через 30 секунд можно нажать еще раз кнопку с текстом "запросить повторно"
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

  return (
    <AnimatedBackground>
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
          <FormButton type="submit">
            {/* вот здесь сделать отрисовку, что после нажатия кнопка становится неактивной на 30сек, появляются часы. 
            Через 30 секунд появляется текст "Запросить повторно" */}
            {/* после нажатия на "Запросить пароль" появляется ссылка "Перейти на страницу авторизации" */}
            <LoginName>Запросить пароль</LoginName>
          </FormButton>

          <FormMessageWrapper>
            {isRedirectShow && (
              <Link to={Paths.login}>Перейти на страницу авторизации</Link>
            )}
          </FormMessageWrapper>
        </Form>
      </FormWrapper>
    </AnimatedBackground>
  );
};

export default ForgotPassword;
