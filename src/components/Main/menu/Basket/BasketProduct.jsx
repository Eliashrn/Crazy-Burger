import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../context/OrderContext";

export default function BasketProduct({ basket }) {
  const { isModeAdmin, handleDeleteFromBasket } = useContext(OrderContext);

  const handleOnDelete = (e, productId) => {
    e.stopPropagation();
    handleDeleteFromBasket(productId);
  };

  return (
    <BasketProductStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            isModeAdmin={isModeAdmin}
            onDelete={(e) => handleOnDelete(e, basketProduct.id)}
          />
        </div>
      ))}
    </BasketProductStyled>
  );
}

const BasketProductStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .basket-card {
    margin: 10px;
    height: 85px;
    box-sizing: border-box;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
