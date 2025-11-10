import React, { useContext } from "react";
import HintMessage from "./HintMessage";
import OrderContext from "../../../../context/OrderContext";

export default function EditProduct() {
  const { idProductSelected } = useContext(OrderContext);

  return (
    <div>
      <HintMessage />
      <span>{idProductSelected && idProductSelected.title}</span>
    </div>
  );
}
