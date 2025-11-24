import { createContext } from "react";

const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],

  handleAddProduct: () => {},
  handleDelete: () => {},

  restMenu: () => {},

  newProduct: {},
  setNewProduct: () => {},

  isProductSelected: {},
  setIsProductSelected: () => {},

  handleEdith: () => {},

  titleEdithBox: {},

  basket: [],

  handleAddToBasket: () => {},
});

export default OrderContext;
