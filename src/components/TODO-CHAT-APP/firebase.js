// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkjQ4ZKXVCUVWooHVEvuoU1V2cjfU8kwc",
  authDomain: "todo-chat-app-d29bb.firebaseapp.com",
  projectId: "todo-chat-app-d29bb",
  storageBucket: "todo-chat-app-d29bb.appspot.com",
  messagingSenderId: "351305812035",
  appId: "1:351305812035:web:7cae8d8f8238c08839acf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()