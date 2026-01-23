import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "/firebase-config";

/**
 * Récupère un utilisateur
 */
export const getUser = async (userId) => {
  try {
    const ref = doc(db, "users", userId);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      return snap.data();
    }

    return null;
  } catch (error) {
    console.error("getUser error:", error);
    throw error;
  }
};

/**
 * Crée un utilisateur
 */
export const createUser = async (userId, menu) => {
  try {
    const ref = doc(db, "users", userId);

    const safeMenu = Array.isArray(menu) ? menu : [];

    const newUser = {
      username: userId,
      menu: safeMenu, // ✅ JAMAIS undefined
    };

    await setDoc(ref, newUser);
    return newUser;
  } catch (error) {
    console.error("createUser error:", error);
    throw error;
  }
};

/**
 * Vérifie si l'utilisateur existe, sinon le crée
 */

export const isExistingUser = async (userId, defaultMenu = []) => {
  const user = await getUser(userId);

  if (!user) {
    return await createUser(userId, defaultMenu);
  }

  return user;
};
