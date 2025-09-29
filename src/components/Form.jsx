import { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export function Form() {
  const [inputAss, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenue ${inputAss}`);
    setInputValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous</h2>
      <div className="input-container">
        <BsPersonCircle className="icon" />
        <input
          type="text"
          value={inputAss}
          onChange={handleChange}
          placeholder="Entrez votre prénom..."
          required
        />
      </div>
      <button>Accéder à votre espace</button>
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

  .input-container {
    background: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
    }
  }
`;
