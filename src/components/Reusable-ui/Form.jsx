import { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router";
import { theme } from "../../theme";

export function Form() {
  const [inputAss, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${inputAss}`);
    setInputValue("");
  };

  return (
    <StyledForm action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez vous</h2>
      </div>
      <div>
        <Input
          value={inputAss}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={"Entrez votre prénom..."}
          Icon={<BsPersonCircle />}
          className="input-login"
        />

        <Button
          Icon={<IoChevronForwardSharp />}
          label={"Accéder à votre espace"}
        />
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    font-family: "Amatic SC", cursive;

    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }

  h2 {
    font-family: "Amatic SC", cursive;

    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }

  .input-login {
    margin: 18px 0;
  }
`;
