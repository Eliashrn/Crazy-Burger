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

  idProductSelected: {},
  setIdProductSelected: () => {},
});

export default OrderContext;
