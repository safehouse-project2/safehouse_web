// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7aj-WlIc_CVecLh5AC_q5y8tO5xhnKhs",
  authDomain: "auth-development-f5502.firebaseapp.com",
  projectId: "auth-development-f5502",
  storageBucket: "auth-development-f5502.appspot.com",
  messagingSenderId: "133599977737",
  appId: "1:133599977737:web:b6353fd1fe41f28b82f3d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
