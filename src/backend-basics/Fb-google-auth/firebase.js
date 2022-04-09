// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { get } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCizyTgUROMV3mGPfzFFy61V0YZbDPJO7o",
  authDomain: "fir-auth-d518b.firebaseapp.com",
  projectId: "fir-auth-d518b",
  storageBucket: "fir-auth-d518b.appspot.com",
  messagingSenderId: "313128141518",
  appId: "1:313128141518:web:a7bd55238715b71fd2c69f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email;
      console.log(email);
    })
    .catch((err) => console.log(err));
};

export const signOutFromGoogle = () => {
  signOut(auth)
    .then(() => {
      console.log("sign out succesfuly");
    })
    .catch(() => {
      console.log("error");
    });
};
