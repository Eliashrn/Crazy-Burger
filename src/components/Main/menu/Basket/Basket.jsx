import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Header from "./Header";
import Total from "./Total";
import { formatPrice } from "../../../../utils/maths";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import OrderContext from "../../../../context/OrderContext";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  return (
    <BasketStyled>
      <Header>
        <Total amoundTopay={formatPrice(0)} />
      </Header>
      {/* <div className="body">body</div> */}
      <EmptyBasket basket={basket} />
      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`;
