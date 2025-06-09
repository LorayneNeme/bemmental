
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUxU_N2E_Wkup9RvvGGG6bC9wa__J43xI",
  authDomain: "mental-f13a0.firebaseapp.com",
  projectId: "mental-f13a0",
  storageBucket: "mental-f13a0.firebasestorage.app",
  messagingSenderId: "731184309532",
  appId: "1:731184309532:web:d1af333bd84cb37ce586d9",
  measurementId: "G-01514S4WKP"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);