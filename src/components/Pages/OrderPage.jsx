import styled from "styled-components";
import Navbar from "./Navbar";
import { theme } from "../../theme";
import Main from "../Main/Main";
import { useState } from "react";
import OrderContext from "../../context/OrderContext";
import { fakeMenu } from "../../fakeData/fakeMenu";

const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.SMALL);

  // comportements

  const restMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  const handleAddProduct = (newProduct) => {
    //1. Copie du tableau menu
    const menuCopy = [...menu];
    //2. Manipuler la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];
    //3. Mettre à jour le state avec la copie modifiée
    setMenu(menuUpdated);
  };

  const onDelete = (idDelete) => {
    const menuCpy = [...menu];

    const menuUpdated = menuCpy.filter((product) => product.id !== idDelete);
    // Mettre à jour le state
    setMenu(menuUpdated);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAddProduct,
    onDelete,
    restMenu,
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
