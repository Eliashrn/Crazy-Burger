import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.MEDIUM);

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

  const handleDeleteFromBasket = (productIdToDelete) => {
    const basketCopy = JSON.parse(JSON.stringify(basket));
    const basketUpdated = basketCopy.filter(
      (product) => product.id !== productIdToDelete
    );

    setBasket(basketUpdated);
  };

  const handleEdithBasket = (productBeingEdited) => {
    const basketCopy = JSON.parse(JSON.stringify(basket));

    const indexOfProduct = basketCopy.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    basketCopy[indexOfProduct] = productBeingEdited;

    setBasket(basketCopy);
  };

  return {
    basket,
    handleAddToBasket,
    handleDeleteFromBasket,
    handleEdithBasket,
  };
};
