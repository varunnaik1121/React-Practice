import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHSaorYltN6jGZRrgIloftjbg6E5cY6s4",
  authDomain: "chat-app-43198.firebaseapp.com",
  projectId: "chat-app-43198",
  storageBucket: "chat-app-43198.appspot.com",
  messagingSenderId: "827797447136",
  appId: "1:827797447136:web:ce4e5f9c56478d10b38b85",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();
export const storage = getStorage();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
};

//stoarge functions starts here...

export const upload = async (file, currentUser, fileType) => {
  const fileRef = ref(storage, currentUser.uid + fileType);
  await uploadBytes(fileRef, file);
};
