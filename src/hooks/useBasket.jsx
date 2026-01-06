import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = JSON.parse(JSON.stringify(basket));

    const isProductAlreadyInBasket = basketCopy.find(
      (product) => product.id === productToAdd.id
    );

    if (!isProductAlreadyInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      setBasket(basketUpdated);
    }
  };
  return { basket, handleAddToBasket };
};
