import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOxskYDZdDai-qcJBn_WJVov4_v7a5CfM",
  authDomain: "e-commerce-app-96a65.firebaseapp.com",
  projectId: "e-commerce-app-96a65",
  storageBucket: "e-commerce-app-96a65.firebasestorage.app",
  messagingSenderId: "557583365844",
  appId: "1:557583365844:web:2585b1a749ca83336bad41",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
console.log(1)
