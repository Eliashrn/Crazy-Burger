import React from "react";

export default function EmptyMenuAdmin({ restMenu }) {
  return (
    <div>
      <span>Pas de produits disponibles</span>
      <button onClick={restMenu}>Réinitialiser le menu</button>
    </div>
  );
}
