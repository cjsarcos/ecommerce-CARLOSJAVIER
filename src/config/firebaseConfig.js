import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJY1rWUxWkL1geq3eIlMJcAhNgRjWpLlM",
  authDomain: "proyectosarcos-18208.firebaseapp.com",
  projectId: "proyectosarcos-18208",
  storageBucket: "proyectosarcos-18208.firebasestorage.app",
  messagingSenderId: "399314496753",
  appId: "1:399314496753:web:5cad5521495ef36e87cd50",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
