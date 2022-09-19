// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSvl4343qHE9ZAmwoSjmr_qDyYxdbzTUk",
  authDomain: "react-chat-f8cd7.firebaseapp.com",
  projectId: "react-chat-f8cd7",
  storageBucket: "react-chat-f8cd7.appspot.com",
  messagingSenderId: "581105373249",
  appId: "1:581105373249:web:276ef5401c1e2da17e36c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
