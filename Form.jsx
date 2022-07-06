import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <form className="form">
      <h1>Regístrate Cosito</h1> <br />
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button type="submit" placeholder="Register" />
    </form>
  );
}

export default Form;
