import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Form() {
  const [inputAss, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Bienvenue ${inputAss}`);
    setInputValue("");
    navigate(`order/${inputAss}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        value={inputAss}
        onChange={handleChange}
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
