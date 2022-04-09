// Import the functions you need from the SDKs you need

import {getFirestore} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeeE1RDmq-iz2zxOm_j4_IPsixqjqsylo",
  authDomain: "fb-todo-90866.firebaseapp.com",
  projectId: "fb-todo-90866",
  storageBucket: "fb-todo-90866.appspot.com",
  messagingSenderId: "966547760701",
  appId: "1:966547760701:web:76416ef1bb049ccd9fec54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore()