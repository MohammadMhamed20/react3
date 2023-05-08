import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAmJc8olVP_xLYKXe4wBHIAkr8koeSyJ60",
  authDomain: "c222-5870d.firebaseapp.com",
  projectId: "c222-5870d",
  storageBucket: "c222-5870d.appspot.com",
  messagingSenderId: "691572424984",
  appId: "1:691572424984:web:dcf3a50736e66992cd5e6d",
  measurementId: "G-R2P5DR331E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
