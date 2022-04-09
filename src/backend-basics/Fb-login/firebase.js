// Import the functions you need from the SDKs you need
import { current } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCYlGbIJJiW56aOSjhAjJrVkVumkL53fc",
  authDomain: "fir-auth-3ef9a.firebaseapp.com",
  projectId: "fir-auth-3ef9a",
  storageBucket: "fir-auth-3ef9a.appspot.com",
  messagingSenderId: "602351683410",
  appId: "1:602351683410:web:9c9fb210f0fe9595005c8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const useAuth = () => {
  const [currrentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currrentUser;
};

export const upload = async (file, currentUser) => {
  const fileRef = ref(storage, currentUser.uid + ".png");
  const snapshot = await uploadBytes(fileRef, file);
  let photoURL = await getDownloadURL(fileRef);
  updateProfile(currentUser, { photoURL });
};
