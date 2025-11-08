import React, { use } from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const {currentUser} = use()
  if (currentUser) {
    return children;
  }

  return <Navigate to={"/"}></Navigate>;
};

export default PrivateRoute;
