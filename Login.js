import React from "react";
import Input from "./Input";
import Button from "./Button";

function Login() {
  return (
    <form className="form">
      <h1>Bienvenido Cosito</h1> <br />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" placeholder="Login" />
    </form>
  );
}

export default Login;
