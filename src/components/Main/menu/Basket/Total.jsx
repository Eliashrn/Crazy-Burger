import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Header from "./Header";

export default function Total({ amoundTopay }) {
  return (
    <Header>
      <TotalStyled>
        <span className="total">Total</span>
        <span className="amound">{amoundTopay}</span>
      </TotalStyled>
    </Header>
  );
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};

  letter-spacing: 2px;
`;
