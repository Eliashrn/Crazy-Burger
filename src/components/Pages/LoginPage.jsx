import React from "react";
import { Form } from "../Form";
import styled from "styled-components";
import Logo from "../Reusable-ui/Logo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <Form />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background-color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
