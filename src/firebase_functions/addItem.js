import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addItem = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "items"), {
      name: data.name,
      imgUrl: data.imgUrl,
      category: data.category,
      price: data.price,
      inventory: data.inventory,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
