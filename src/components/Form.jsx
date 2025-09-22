import { useState } from "react";

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
