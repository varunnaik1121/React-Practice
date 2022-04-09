import { getFirestore } from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANWOyIJqx_wfM5XuLu7D8Ukg9-5e03w-c",
  authDomain: "fb-datapush.firebaseapp.com",
  projectId: "fb-datapush",
  storageBucket: "fb-datapush.appspot.com",
  messagingSenderId: "442630413859",
  appId: "1:442630413859:web:5bb19c27aa966ea8bf5b96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider).then((data) => {
    console.log("login successfully");
  });
};

export const signOutFromGoogle = () => {
  return signOut(auth);
};

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
  }, []);
  return user;
};
