import { getLocalStorage } from "../../../utils/window";
import { getMenu } from "../../../api/product";

const intialiseMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const intialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username); // localStorage est synchrone, pas besoin de "await".
  if (basketReceived) setBasket(basketReceived);
};

export const initialiseUserSession = async (username, setMenu, setBasket) => {
  await intialiseMenu(username, setMenu);
  intialiseBasket(username, setBasket);
};
