import { createContext } from "react";

const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  menu: [],
  setMenu: () => {},
  handleAdfdProduct: () => {},
});

export default OrderContext;
