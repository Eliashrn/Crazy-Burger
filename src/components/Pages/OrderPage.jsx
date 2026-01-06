import styled from "styled-components";
import Navbar from "./Navbar";
import { theme } from "../../theme";
import Main from "../Main/Main";
import { useRef, useState } from "react";
import OrderContext from "../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../enums/product";
import { useMenuProduct } from "../../hooks/useMenuProduct";
import { useBasket } from "../../hooks/useBasket";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isProductSelected, setIsProductSelected] = useState(EMPTY_PRODUCT);
  const titleEdithBox = useRef();
  const { basket, setBasket, handleAddToBasket } = useBasket();
  const {
    menu,

    handleAddProduct,
    handleDelete,
    handleEdith,
    restMenu,
  } = useMenuProduct();

  // comportements

  const orderContextValue = {
    newProduct,
    setNewProduct,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAddProduct,
    handleDelete,
    isProductSelected,
    setIsProductSelected,
    restMenu,
    handleEdith,
    titleEdithBox,
    basket,
    setBasket,
    handleAddToBasket,
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
    height: 933px;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;
