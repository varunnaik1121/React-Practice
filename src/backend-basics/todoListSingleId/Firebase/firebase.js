// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV0fYgkbMbe-uX2xKkYnJHI1NDu8bK1F0",
  authDomain: "chat-app-f6c32.firebaseapp.com",
  projectId: "chat-app-f6c32",
  storageBucket: "chat-app-f6c32.appspot.com",
  messagingSenderId: "112036050332",
  appId: "1:112036050332:web:e8c0abbbb20153f7628459",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((data) => {
      console.log("google auth success");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const useAuth = () => {
  const [currUser, setCurrUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(
      auth,
      (user) => {
        setCurrUser(user);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => unsub;
  }, []);
  return currUser;
};

export const useCollection = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "messages");
    const q = query(colRef, orderBy("createdAt"), limit(20));
    const arr = [];
    const unsub = onSnapshot(q, (snap) => {
      snap.docs.map((doc) => arr.push({ ...doc.data(), id: doc.id }));
      setMessages(arr);
    });
    return () => unsub;
  }, []);
  return messages;
};
