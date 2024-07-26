import React from "react";

import { Error } from "../ErrorMessage";
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {

  return (
    <div className="login-screen">
      <h2>BlogNest</h2>
      <h6>BlogNest facilita la gestión y el intercambio de ideas y experiencias en línea.</h6>
      <LoginForm />
      <Error />
    </div>
  );
}
