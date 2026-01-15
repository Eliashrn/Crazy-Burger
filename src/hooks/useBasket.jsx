import { useState } from "react";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (productToAdd, username) => {
    const basketCopy = JSON.parse(JSON.stringify(basket));

    const productFoundInBasket = basketCopy.find(
      (product) => product.id === productToAdd.id
    );

    if (!productFoundInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      setBasket(basketUpdated);
      setLocalStorage(username, basketUpdated);
      return;
    }
    const indexOfBasketProducToIncrement = basket.findIndex(
      (basketproduct) => basketproduct.id === productToAdd.id
    );
    basketCopy[indexOfBasketProducToIncrement].quantity += 1;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  const handleDeleteFromBasket = (productIdToDelete, username) => {
    const basketCopy = JSON.parse(JSON.stringify(basket));
    const basketUpdated = basketCopy.filter(
      (product) => product.id !== productIdToDelete
    );

    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  const handleEdithBasket = (productBeingEdited, username) => {
    const basketCopy = JSON.parse(JSON.stringify(basket));

    const indexOfProduct = basketCopy.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    basketCopy[indexOfProduct] = productBeingEdited;

    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteFromBasket,
    handleEdithBasket,
  };
};
