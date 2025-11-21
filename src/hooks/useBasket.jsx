import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket] = useState(fakeBasket.LARGE_WEIRD);

  return { basket };
};
