// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5GSIbNlM7yXKGI7rlg33A-U9f60Hk9zo",
  authDomain: "fb-snapshot-50099.firebaseapp.com",
  projectId: "fb-snapshot-50099",
  storageBucket: "fb-snapshot-50099.appspot.com",
  messagingSenderId: "710159311786",
  appId: "1:710159311786:web:a723e06b8b86f775ec01d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
