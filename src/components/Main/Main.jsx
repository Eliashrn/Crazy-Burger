import styled from "styled-components";
import { theme } from "../../theme";
import Menu from "./menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../context/OrderContext";
import Basket from "./menu/Basket/Basket";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);
  return (
    <MainStyled className="main">
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  height: calc(95vh - 10vh);
  display: grid;
  grid-template-columns: 25% 1fr;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`;
