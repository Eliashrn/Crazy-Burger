import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basketbody() {
  return (
    <BasketbodyStyled>
      <span className="message">Votre commande est vide. </span>
    </BasketbodyStyled>
  );
}

const BasketbodyStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};

  .message {
    display: flex;
    flex: 1;
    height: calc(95vh - 10vh - 70px - 70px);
    align-items: center;
    text-align: center;
    justify-content: center;
    align-self: center;
    line-height: 2;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
