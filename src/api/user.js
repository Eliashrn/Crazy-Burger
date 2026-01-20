import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);
  const docSnapShot = await getDoc(docRef);
  if (docSnapShot.exists()) {
    const userReceived = docSnapShot.data();
    return userReceived;
  }
};

export const createUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.SMALL,
  };
  await setDoc(docRef, newDoc);

  return newDoc;
};

export const isExistingUser = async (username) => {
  const existingUser = await getUser(username);

  if (!existingUser) {
    return await createUser(username);
  }
  return existingUser;
};
