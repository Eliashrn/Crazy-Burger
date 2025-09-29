import { useState } from "react";
import styled from "styled-components";

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
      <br />
      <h2>Connectez vous</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={inputAss}
        onChange={handleChange}
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accéder à votre espace</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
