import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { syncMenu } from "../api/product";

export const useMenuProduct = () => {
  const [menu, setMenu] = useState();

  const handleAddProduct = (newProduct, userName) => {
    //1. Copie du tableau menu
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //2. Manipuler la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];
    //3. Mettre à jour le state avec la copie modifiée
    setMenu(menuUpdated);
    syncMenu(userName, menuUpdated);
  };

  const handleDelete = (idDelete, userName) => {
    const menuCpy = JSON.parse(JSON.stringify(menu));

    const menuUpdated = menuCpy.filter((product) => product.id !== idDelete);
    setMenu(menuUpdated);
    syncMenu(userName, menuUpdated);
  };

  const handleEdith = (productBeingEdited, userName) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));

    const indexOfProduct = menu.findIndex(
      (product) => product.id === productBeingEdited.id,
    );
    menuCopy[indexOfProduct] = productBeingEdited;

    setMenu(menuCopy);
    syncMenu(userName, menuCopy);
  };

  const restMenu = (userName) => {
    setMenu(fakeMenu.LARGE);
    syncMenu(userName, fakeMenu.LARGE);
  };

  return {
    menu,
    setMenu,
    handleAddProduct,
    handleDelete,
    handleEdith,
    restMenu,
  };
};
