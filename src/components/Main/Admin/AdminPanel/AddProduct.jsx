import React, { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { useSuccesSubmit } from "../../../../hooks/useSuccesSubmit";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import Form from "./Form";
import SubmitMessage from "./SubmitMessage";
import Button from "../../../Reusable-ui/Button";

export default function AddProduct() {
  //State
  const { handleAddProduct, newProduct, setNewProduct, username } =
    useContext(OrderContext);
  const { successSubmit, succesSubmit } = useSuccesSubmit();

  //Comportements

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    succesSubmit();
    const newProductToAdd = {
      id: crypto.randomUUID(),
      ...newProduct,
    };
    handleAddProduct(newProductToAdd, username);
    setNewProduct(EMPTY_PRODUCT);
  };

  //Render

  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      successSubmit={successSubmit}
      button={
        <>
          <Button
            className="submit-button"
            label={"Ajouter un noueau produit"}
            version="success"
          />{" "}
          {successSubmit && <SubmitMessage />}
        </>
      }
    />
  );
}
