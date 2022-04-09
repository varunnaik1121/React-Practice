
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqw_JmjI4OxEVJvgMDKKrnv30VfMrDZ2k",
  authDomain: "photo-gallery-4a09c.firebaseapp.com",
  projectId: "photo-gallery-4a09c",
  storageBucket: "photo-gallery-4a09c.appspot.com",
  messagingSenderId: "732341244634",
  appId: "1:732341244634:web:c19f68692e302cdaa70be3"
};
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const storage = getStorage(app)

export {db,storage}
