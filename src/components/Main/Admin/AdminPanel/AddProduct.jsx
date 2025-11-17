import React, { useContext, useState } from "react";

import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";

import { EMPTY_PRODUCT } from "../../../../enums/product";
import Form from "./Form";

export default function AddProduct() {
  //State
  const { handleAddProduct, newProduct, setNewProduct } =
    useContext(OrderContext);

  const [successSubmit, setSuccessSubmit] = useState(false);

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
    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
  };

  const succesSubmit = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 2000);
  };

  //Render

  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      successSubmit={successSubmit}
    />
  );
}
