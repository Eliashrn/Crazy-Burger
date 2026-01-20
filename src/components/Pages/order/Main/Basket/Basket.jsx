import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Total from "./Total.jsx";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer.jsx";
import EmptyBasket from "./EmptyBasket.jsx";
import OrderContext from "../../../../../context/OrderContext.jsx";
import BasketProduct from "./BasketProduct.jsx";
import Loader from "../MainRightSide/menu/Loader.jsx";

export default function Basket() {
  const { basket, menu } = useContext(OrderContext);

  if (basket === null) return <Loader />;

  if (menu === undefined) return <Loader />;

  const isBasketEmpty = basket.length === 0;

  const amoundTopay = basket.reduce((total, basketProduct) => {
    if (isNaN(basketProduct.price)) return total;

    return (total += basketProduct.price * basketProduct.quantity);
  }, 0);

  return (
    <BasketStyled>
      <Total amoundTopay={formatPrice(amoundTopay)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProduct basket={basket} />}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  flex-direction: column;
  height: 85vh;
`;
