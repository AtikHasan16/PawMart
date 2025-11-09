import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

import { auth } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Function for Register
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Function email login
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Update profile
  const updateCurrentUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
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
    registerWithEmail,
    loginWithEmail,
    loginWithGoogle,
    updateCurrentUser,
    currentUser,
    logOutUser,
    loading,
    setLoading,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
