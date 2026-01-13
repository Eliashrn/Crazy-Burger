import styled from "styled-components";
import Navbar from "./Navbar";
import { theme } from "../../theme";
import Main from "../Main/Main";
import { useRef, useState } from "react";
import OrderContext from "../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../enums/product";
import { useMenuProduct } from "../../hooks/useMenuProduct";
import { useBasket } from "../../hooks/useBasket";
import { useParams } from "react-router";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isProductSelected, setIsProductSelected] = useState(EMPTY_PRODUCT);
  const { username } = useParams();

  const titleEdithBox = useRef();
  const {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteFromBasket,
    handleEdithBasket,
  } = useBasket();

  const { menu, handleAddProduct, handleDelete, handleEdith, restMenu } =
    useMenuProduct();

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
    handleDeleteFromBasket,
    handleEdithBasket,
    username,
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
    height: 933px;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;
