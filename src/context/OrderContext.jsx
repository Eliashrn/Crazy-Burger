import { createContext } from "react";

const OrderContext = createContext({
  username: "",
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

  productBasketSelected: {},

  handleAddToBasket: () => {},
  handleDeleteFromBasket: () => {},
  handleEdithBasket: () => {},
});

export default OrderContext;
