import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">{userIsRegistered ? <Login /> : <Form />}</div>
  );
}

export default App;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
