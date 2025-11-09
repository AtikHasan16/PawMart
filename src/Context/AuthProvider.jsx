import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

import { auth } from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function email login
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Function for observation of current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Function for google login
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Function for sign out

  const logOutUser = () => {
    return signOut(auth);
  };
  const authInfo = {
    loginWithEmail,
    loginWithGoogle,
    currentUser,
    logOutUser,
    loading,
    setLoading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
