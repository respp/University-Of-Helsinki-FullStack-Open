import React from "react";

import { Error } from "../ErrorMessage";
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {

  return (
    <div className="log">  
    
      {/* flor*/}
    <div className="login-screen"> 

      {/*conjunto de textos*/}
      <div className="title-subtitle">
        <h2>BlogNest</h2>
        <h6>BlogNest facilita la gestión y el intercambio de ideas y experiencias en línea.</h6>
      </div>

      {/* formulario*/}
      <div className="form">
          <LoginForm />
      </div>

    </div>
    <Error />
    </div>

  );
}
