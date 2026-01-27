import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
/**
 * Met à jour le menu
 */
export const syncMenu = async (userId, menuUpdate) => {
  const safeMenu = Array.isArray(menuUpdate) ? menuUpdate : [];

  const ref = doc(db, "users", userId);

  await setDoc(
    ref,
    {
      menu: safeMenu,
    },
    { merge: true },
  );
};

export const getMenu = async (idUser) => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu;
  }
};
