import { createContext } from "react";

const OrderContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},
});

export default OrderContext;
