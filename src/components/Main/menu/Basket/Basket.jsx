import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Header from "./Header";

export default function Basket() {
  return (
    <BasketStyled>
      <Header>head</Header>
      <div className="body">body</div>
      <Header>footer</Header>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};

  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }

  .footer {
    height: 70px;
    background: ${theme.colors.background_dark};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
  }
`;
