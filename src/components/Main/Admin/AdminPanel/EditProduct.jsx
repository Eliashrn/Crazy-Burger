import React, { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import Input from "../../../Reusable-ui/Input";
import { getInputTextConfig } from "./getInputTextConfig";

export default function EditProduct() {
  const { isProductSelected, setIsProductSelected, handleEdith } =
    useContext(OrderContext);

  const inputTexts = getInputTextConfig(isProductSelected);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const productBeingUpdate = { ...isProductSelected, [name]: value };
    setIsProductSelected(productBeingUpdate);

    handleEdith(productBeingUpdate);
  };

  return (
    <EditProductStyled>
      <ImagePreview
        imageSource={isProductSelected.imageSource}
        title={isProductSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            version="minimalist"
          />
        ))}
      </div>
    </EditProductStyled>
  );
}

const EditProductStyled = styled.form`
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
