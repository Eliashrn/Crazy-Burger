import React from "react";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <>
      <h1>Bonjour</h1>

      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </>
  );
};

export default OrderPage;
