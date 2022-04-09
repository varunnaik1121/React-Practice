// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqw_JmjI4OxEVJvgMDKKrnv30VfMrDZ2k",
  authDomain: "photo-gallery-4a09c.firebaseapp.com",
  projectId: "photo-gallery-4a09c",
  storageBucket: "photo-gallery-4a09c.appspot.com",
  messagingSenderId: "732341244634",
  appId: "1:732341244634:web:c19f68692e302cdaa70be3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export default getFirestore(app);

 

