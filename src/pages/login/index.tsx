import React from "react";
import Button from "../../components/Button";

const Login: React.FC = () => {
  return (
    <>
      <Button onClick={() => console.log("Hello World!")} text="Click me!" />
    </>
  );
};

export default Login;
