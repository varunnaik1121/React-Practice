// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import React from "react";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARnjNFomqlfGa0ydI2M9LfQqX3_3xxrSE",
  authDomain: "fb-demo-storage.firebaseapp.com",
  projectId: "fb-demo-storage",
  storageBucket: "fb-demo-storage.appspot.com",
  messagingSenderId: "528376844218",
  appId: "1:528376844218:web:87fdd7f389237cdec59783",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const uploadImage = async (file) => {
  const collectionRef = collection(db, "profiles");
  const storageRef = ref(storage, `profiles/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      console.log("file uploaded");
    },
    (err) => {
      console.log(err);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadedUrl) => {
        let payload = {
          name: "varun",
          photoURL: downloadedUrl,
        };
        await addDoc(collectionRef, payload);
      });
    }
  );
};
