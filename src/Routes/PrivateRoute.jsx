import React, { use } from "react";
import { Navigate } from "react-router";
import AuthContext from "../Context/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = use(AuthContext);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to={"/"}></Navigate>;
};

export default PrivateRoute;
