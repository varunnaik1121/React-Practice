// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuzevGRRRkroGbpVbtxTkVUH1EyKzNqiY",
  authDomain: "linkedin-clone-ac516.firebaseapp.com",
  projectId: "linkedin-clone-ac516",
  storageBucket: "linkedin-clone-ac516.appspot.com",
  messagingSenderId: "882491464781",
  appId: "1:882491464781:web:273c04d1e62ac798359004",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const useAuth = () => {
  const [currUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currUser;
};

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const signOutFromGoogle = () => {
  return signOut(auth);
};
