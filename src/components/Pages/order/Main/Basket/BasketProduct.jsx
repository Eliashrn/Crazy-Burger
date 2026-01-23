import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { convertStringToBoolean } from "../../../../../utils/string.js";
import Sticker from "../../../../Reusable-ui/Sticker.jsx";
import { theme } from "../../../../../theme/index.js";
export default function BasketProduct({ basket }) {
  const {
    isModeAdmin,
    handleDeleteFromBasket,
    isProductSelected,
    setIsProductSelected,
    setCurrentTabSelected,
    setIsCollapsed,
    username,
  } = useContext(OrderContext);

  const handleOnDelete = (e, productId) => {
    e.stopPropagation();
    handleDeleteFromBasket(productId, username);
    setCurrentTabSelected("edit");
  };

  const handleClick = (idProductSelected) => {
    if (!isModeAdmin) return;

    setIsCollapsed(false);

    setCurrentTabSelected("edit");
    const productClickedOn = basket.find(
      (product) => product.id === idProductSelected,
    );
    setIsProductSelected(productClickedOn);
  };

  return (
    <BasketProductStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          {convertStringToBoolean(basketProduct.isPublicised) && (
            <Sticker className="badge-new" />
          )}
          <BasketCard
            {...basketProduct}
            isModeAdmin={isModeAdmin}
            onDelete={(e) => handleOnDelete(e, basketProduct.id)}
            onClick={() => handleClick(basketProduct.id)}
            isSelected={isProductSelected.id === basketProduct.id}
            overlapImageSource={convertStringToBoolean(
              basketProduct.isAvailable,
            )}
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
    position: relative;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }

    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
      font-family: ${theme.fonts.family.openSans};
    }
  }
`;
