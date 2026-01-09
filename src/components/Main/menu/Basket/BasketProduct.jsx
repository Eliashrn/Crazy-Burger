import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../context/OrderContext";

export default function BasketProduct({ basket }) {
  const {
    isModeAdmin,
    handleDeleteFromBasket,
    isProductSelected,
    setIsProductSelected,
    setCurrentTabSelected,
    setIsCollapsed,
  } = useContext(OrderContext);

  const handleOnDelete = (e, productId) => {
    e.stopPropagation();
    handleDeleteFromBasket(productId);
    setCurrentTabSelected("edit");
  };

  const handleClick = (idProductSelected) => {
    if (!isModeAdmin) return;

    setIsCollapsed(false);

    setCurrentTabSelected("edit");
    const productClickedOn = basket.find(
      (product) => product.id === idProductSelected
    );
    setIsProductSelected(productClickedOn);
  };

  return (
    <BasketProductStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            isModeAdmin={isModeAdmin}
            onDelete={(e) => handleOnDelete(e, basketProduct.id)}
            onClick={() => handleClick(basketProduct.id)}
            isSelected={isProductSelected.id === basketProduct.id}
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
