import React from "react";
import { Paths } from "../../../consts/paths";
import { FormMessageWrapper } from "./styles";
import { Link } from "react-router-dom";

const FormMessage = () => {
  return (
    <FormMessageWrapper>
      Забыли пароль? <Link to={Paths.forgotPassword}>Восстановить пароль</Link>
    </FormMessageWrapper>
  );
};

export default FormMessage;
