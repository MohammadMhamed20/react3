import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getProduct = async (e, data) => {
  return getDocs(collection(db, "items")).then((querySnapshot) => {
    return querySnapshot.docs.find((doc) => doc.id === data.id);
  });
};

export const getByCategory = async (data) => {
  return getDocs(collection(db, "items")).then((querySnapshot) => {
    return querySnapshot.docs.filter(
      (doc) => doc.data().category === data.category
    );
  });
};

export const getAllProduct = async () => {
  try {
    return getDocs(collection(db, "items")).then((querySnapshot) => {
      return querySnapshot.docs;
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
