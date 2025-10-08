import React from "react";
import styled from "styled-components";

export default function Product({ title, price, imageSource }) {
  return (
    <ProductStyle className="produit">
      <div className="img-container">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="description">
          <div className="title">{title}</div>
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyle>
  );
}

const ProductStyle = styled.div`
  background: red;
  width: 240px;
  height: 330px;

  .img-container {
    border: 1px solid fuchsia;
    width: 100px;
    height: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .description {
    border: 1px solid fuchsia;
  }
`;
