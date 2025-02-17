// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBlIC_FIREBASE_API_KEY,
  authDomain: "ai--shorts-gen.firebaseapp.com",
  projectId: "ai--shorts-gen",
  storageBucket: "ai--shorts-gen.firebasestorage.app",
  messagingSenderId: "871921109462",
  appId: "1:871921109462:web:30a7433fbddac4a501bc77",
  measurementId: "G-313RY8NSXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);