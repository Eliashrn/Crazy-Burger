import React, { useContext, useState } from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { LuEuro } from "react-icons/lu";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import Input from "../../../Reusable-ui/Input";
import Button from "../../../Reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextConfig } from "./getInputTextConfig";

export const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: "",
};

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
    handleAddProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    succesSubmit();
  };

  const succesSubmit = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 2000);
  };

  const newProductToAdd = {
    id: crypto.randomUUID(),
    ...newProduct,
  };

  //Render

  const inputTexts = getInputTextConfig(newProduct, handleChange);

  return (
    <FormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <Input key={input.id} {...input} version="minimalist" />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un noueau produit"}
          version="success"
        />{" "}
        {successSubmit && <SubmitMessage />}
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    position: relative;
    align-items: center;
  }
`;
