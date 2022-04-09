// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

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
