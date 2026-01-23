import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
/**
 * Met à jour le menu
 */
export const syncMenu = async (userId, menuUpdate) => {
  try {
    const ref = doc(db, "users", userId);

    await setDoc(
      ref,
      {
        menu: menuUpdate,
      },
      { merge: true }, // ⚠️ très important
    );
  } catch (error) {
    console.error("syncMenu error:", error);
    throw error;
  }
};

/**
 * Récupère le menu
 */
export const getMenu = async (userId) => {
  try {
    const ref = doc(db, "users", userId);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      return snap.data().menu;
    }

    return null;
  } catch (error) {
    console.error("getMenu error:", error);
    throw error;
  }
};
