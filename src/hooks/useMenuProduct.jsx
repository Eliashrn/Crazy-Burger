import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";

export const useMenuProduct = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const handleAddProduct = (newProduct) => {
    //1. Copie du tableau menu
    const menuCopy = JSON.parse(JSON.stringify(menu));
    //2. Manipuler la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];
    //3. Mettre à jour le state avec la copie modifiée
    setMenu(menuUpdated);
  };

  const handleDelete = (idDelete) => {
    const menuCpy = JSON.parse(JSON.stringify(menu));

    const menuUpdated = menuCpy.filter((product) => product.id !== idDelete);
    setMenu(menuUpdated);
  };

  const handleEdith = (productBeingEdited) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));

    const indexOfProduct = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    menuCopy[indexOfProduct] = productBeingEdited;

    setMenu(menuCopy);
  };

  const restMenu = () => {
    setMenu(fakeMenu.LARGE);
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
