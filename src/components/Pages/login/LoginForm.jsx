import { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";
import Input from "../../Reusable-ui/Input";
import Button from "../../Reusable-ui/Button";
import { useNavigate } from "react-router";
import { theme } from "../../../theme";
import { isExistingUser } from "../../../api/user";
import Welcome from "./Welcome";
export function LoginForm() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userRecived = await isExistingUser(userName);
    setUserName("");
    navigate(`/order/${userRecived.username}`);
  };

  return (
    <StyledForm action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div>
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder={"Entrez votre prénom..."}
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
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
