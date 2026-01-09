import React, { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

export default function EditProduct() {
  const {
    isProductSelected,
    setIsProductSelected,
    handleEdith,
    titleEdithBox,
    handleEdithBasket,
  } = useContext(OrderContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingUpdate = { ...isProductSelected, [name]: value };

    setIsProductSelected(productBeingUpdate);
    handleEdith(productBeingUpdate);
    handleEdithBasket(productBeingUpdate);
  };

  return (
    <Form
      product={isProductSelected}
      onChange={handleChange}
      ref={titleEdithBox}
      button={<EditInfoMessage />}
    />
  );
}
