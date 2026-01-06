import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = JSON.parse(JSON.stringify(basket));

    const productFoundInBasket = basketCopy.find(
      (product) => product.id === productToAdd.id
    );

    if (!productFoundInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      setBasket(basketUpdated);
      return;
    }
    const indexOfBasketProducToIncrement = basket.findIndex(
      (basketproduct) => basketproduct.id === productToAdd.id
    );
    basketCopy[indexOfBasketProducToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  return { basket, handleAddToBasket };
};
