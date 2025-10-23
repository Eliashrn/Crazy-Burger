import React, { useContext, useState } from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { MdPhotoCamera } from "react-icons/md";
import { LuEuro } from "react-icons/lu";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";

export default function AddProduct() {
  //State
  const { handleAddProduct } = useContext(OrderContext);
  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  //Comportements

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageSourceChange = (e) => {
    setImageSource(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(newProduct);
  };

  const newProduct = {
    id: Date.now(),
    imageSource: imageSource,
    title: title,
    price: price,
  };

  // const newProduct = {
  //   id: 8,
  //   imageSource: "/image/fries3.png",
  //   title: "New York Fries",
  //   price: 3.1678,
  //   quantity: 0,
  //   isAvailable: true,
  //   isAdvertised: false,
  // };

  //Render

  return (
    <FormStyled onSubmit={handleSubmit}>
      <div className="image-preview">image preview</div>
      <div className="input-fields">
        <input
          value={title ? title : ""}
          type="text"
          placeholder="Product Name"
          onChange={handleTitleChange}
        />
        <input
          value={imageSource ? imageSource : ""}
          type="text"
          placeholder="Aucune image"
          onChange={handleImageSourceChange}
        />
        <input
          value={price ? price : ""}
          type="number"
          placeholder="Product Price"
          onChange={handlePriceChange}
        />
      </div>
      <div className="submit-button">
        <button>Submit</button>
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

  .image-preview {
    grid-area: 1 / 1 / 4 / 2;
    background: blue;
  }

  .input-fields {
    background: green;
    grid-area: 1 / 2 / -2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit-button {
    grid-area: 4 / -2 / -1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: orange;
  }
`;
