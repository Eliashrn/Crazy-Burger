import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menuUpdate) => {
  const cachette = doc(db, "users", userId);

  const nouriture = {
    username: userId,
    menu: menuUpdate,
  };
  setDoc(cachette, nouriture);
};

export const getMenu = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const docSnapShot = await getDoc(docRef);

  if (docSnapShot.exists()) {
    const { menu } = docSnapShot.data();
    return menu;
  }
};
