import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZO55mM796nADvTpwfVuNRluqp1ojFd9w",
  authDomain: "financify-2cda0.firebaseapp.com",
  projectId: "financify-2cda0",
  storageBucket: "financify-2cda0.firebasestorage.app",
  messagingSenderId: "440041061299",
  appId: "1:440041061299:web:837555b1f7223ad0abe9c6",
  measurementId: "G-5KFZNDG6ZY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
