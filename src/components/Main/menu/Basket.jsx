import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">head</div>
      <div className="body">body</div>
      <div className="footer">footer</div>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};

  .head {
    height: 70px;
    background: ${theme.colors.background_dark};
  }

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
