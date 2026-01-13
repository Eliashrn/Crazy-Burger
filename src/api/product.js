import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenus = (userId, menuUpdate) => {
  const cachette = doc(db, "users", userId);
  const nouriture = {
    username: userId,
    menu: menuUpdate,
  };
  setDoc(cachette, nouriture);
};
