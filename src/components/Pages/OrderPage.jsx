import styled from "styled-components";
import Navbar from "./Navbar";
import { theme } from "../../theme";
import Main from "../Main/Main";
import { useState } from "react";
import OrderContext from "../../context/OrderContext";
import { fakeMenu } from "../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../enums/product";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [idProductSelected, setIdProductSelected] = useState(EMPTY_PRODUCT);

  // comportements

  const handleAddProduct = (newProduct) => {
    //1. Copie du tableau menu
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //2. Manipuler la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];
    //3. Mettre à jour le state avec la copie modifiée
    setMenu(menuUpdated);
  };

  const handleDelete = (idDelete) => {
    const menuCpy = JSON.parse(JSON.stringify(menu));

    const menuUpdated = menuCpy.filter((product) => product.id !== idDelete);
    // Mettre à jour le state
    setMenu(menuUpdated);
  };

  const handleEdith = (productBeingEdited) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));

    const indexOfProduct = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    menuCopy[indexOfProduct] = productBeingEdited;

    setMenu(menuCopy);
  };

  const restMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

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
    idProductSelected,
    setIdProductSelected,
    restMenu,
    handleEdith,
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
