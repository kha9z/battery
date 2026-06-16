import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEMNjuG6mRcakKq2koX05pnVV5UusBN-U",
  authDomain: "batteriesni-8837c.firebaseapp.com",
  projectId: "batteriesni-8837c",
  storageBucket: "batteriesni-8837c.firebasestorage.app",
  messagingSenderId: "1089897240232",
  appId: "1:1089897240232:web:f908775dd22eb3e79d549d",
  measurementId: "G-58TYWV4CFW"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);