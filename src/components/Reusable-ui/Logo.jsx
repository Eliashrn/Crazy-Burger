import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h2>Crazee</h2>
      <img src="./image/F03 logo-orange.png" alt="Logo Crazy Burger" />
      <h2>Burger</h2>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  color: #ffa01b;
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h2 {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursiveF03;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;
