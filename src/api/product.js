import { doc, setDoc } from "firebase/firestore";
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
