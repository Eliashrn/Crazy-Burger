import { createContext } from "react";

const OrderContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},

  isCollapsed: false,
  setCollapsed: () => {},

  isAddSelective: false,
  setisAddSelective: () => {},

  isEditSelected: false,
  setisEditSelected: () => {},
});

export default OrderContext;
