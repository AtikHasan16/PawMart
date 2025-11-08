import React from "react";
import AuthContext from "./AuthContext";

import { auth } from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  // Function email login
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Function for google login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = { loginWithEmail, loginWithGoogle };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
