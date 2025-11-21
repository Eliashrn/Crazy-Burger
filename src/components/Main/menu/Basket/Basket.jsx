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

  return (
    <BasketStyled>
      <Header>
        <Total amoundTopay={formatPrice(0)} />
      </Header>
      {isBasketEmpty ? <EmptyBasket /> : <BasketProduct />}
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;
