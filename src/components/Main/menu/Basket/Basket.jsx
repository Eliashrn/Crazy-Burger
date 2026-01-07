import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Header from "./Header";
import Total from "./Total";
import { formatPrice } from "../../../../utils/maths";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import OrderContext from "../../../../context/OrderContext";
import BasketProduct from "./BasketProduct";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  const isBasketEmpty = basket.length === 0;

  const amoundTopay = basket.reduce((total, basketProduct) => {
    if (isNaN(basketProduct.price)) return total;

    return (total += basketProduct.price * basketProduct.quantity);
  }, 0);

  return (
    <BasketStyled>
      <Header>
        <Total amoundTopay={formatPrice(amoundTopay)} />
      </Header>
      {isBasketEmpty ? <EmptyBasket /> : <BasketProduct basket={basket} />}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .header {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
