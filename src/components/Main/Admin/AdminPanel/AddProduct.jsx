import React, { useContext, useState } from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { LuEuro } from "react-icons/lu";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../theme";
import Input from "../../../Reusable-ui/Input";
import Button from "../../../Reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";

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

  return (
    <FormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        <Input
          name="title"
          value={newProduct.title ? newProduct.title : ""}
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
          Icon={<PiHamburgerFill />}
          version="extraStyleMinimalist"
        />
        <Input
          name="imageSource"
          value={newProduct.imageSource ? newProduct.imageSource : ""}
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
          Icon={<MdPhotoCamera />}
          version="extraStyleMinimalist"
        />
        <Input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="number"
          placeholder="Prix"
          onChange={handleChange}
          Icon={<LuEuro />}
          version="extraStyleMinimalist"
        />
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un noueau produit"}
          version="success"
        />
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
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;
