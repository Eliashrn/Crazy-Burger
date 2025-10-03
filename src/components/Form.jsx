import { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";
import Input from "./Reusable-ui/Input";
import Button from "./Reusable-ui/Button";
import { Link, useNavigate } from "react-router";
import { theme } from "../theme";

export function Form() {
  const [inputAss, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${inputAss}`);
    setInputValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous</h2>
      <Input
        value={inputAss}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Entrez votre prénom..."
        Icon={<BsPersonCircle className="icon" />}
      />

      <Link to={`/order/${inputAss}`}>
        <Button
          Icon={<IoChevronForwardSharp className="icon-button" />}
          label={"Accéder à votre espace"}
        />
      </Link>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background: none;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: ${theme.radius};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 40px;
  }
  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10 px;
    color: white;
    font-size: 36px;
  }

  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: white;
  }
`;
