import { createContext } from "react";

const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  menu: [],
  handleAdfdProduct: () => {},
});

export default OrderContext;
