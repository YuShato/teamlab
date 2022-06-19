import React from "react";
import { FormButton, LoginName } from "./styles";

const FormBtn = () => {
  return (
    <FormButton className="loginButton" type="submit">
      <LoginName>Войти</LoginName>
    </FormButton>
  );
};

export default FormBtn;
