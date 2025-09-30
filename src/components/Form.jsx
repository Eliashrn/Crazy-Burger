import { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";
import Input from "./Pages/Input";

export function Form() {
  const [inputAss, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous</h2>
      <Input
        value={inputAss}
        onChange={handleChange}
        placeholder="Entrez votre prénom..."
        Icon={<BsPersonCircle className="icon" />}
        required
      />
      <button className="button-container">
        <span>Accéder à votre espace</span>
        <IoChevronForwardSharp className="icon" />
      </button>
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
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
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



  .button-container {
    background: #f56a2c;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #f56a2c;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    padding: 18px 24px;
    cursor: pointer;
    font-size: 15px;


    span {      color: white;
      font-weight: bold;
      margin-right: 8px;
    }   
    .icon {
      font-size: 20px;  
  }
`;
