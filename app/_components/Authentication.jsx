"use client"
import React from 'react' // Removed unnecessary Children import
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";

function Authentication({ children }) { // Fixed prop name to lowercase 'children'
  const provider = new GoogleAuthProvider();

  const onSignInClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div onClick={onSignInClick}>{children}</div> // Fixed click handler and children reference
  );
}

export default Authentication; // Fixed export statement