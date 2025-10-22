import styled from "styled-components";
import Navbar from "./Navbar";
import { theme } from "../../theme";
import Main from "../Main/Main";
import { useState } from "react";
import OrderContext from "../../context/OrderContext";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  // comportements

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
};

const OrderPageStyled = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    border-radius: ${theme.borderRadius.extraRound};
    height: 95vh;
    width: 1400px;
  }
`;

export default OrderPage;
