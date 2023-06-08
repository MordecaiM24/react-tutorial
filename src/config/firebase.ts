// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfvtAf1634Be1TCwR6fPge_DlYsblrHcs",
  authDomain: "react-course-2d8f1.firebaseapp.com",
  projectId: "react-course-2d8f1",
  storageBucket: "react-course-2d8f1.appspot.com",
  messagingSenderId: "192195327666",
  appId: "1:192195327666:web:14080fc642741790dc7bab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
