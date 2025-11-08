import React, { use } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router";

const GuestRouter = ({ children }) => {
  const { currentUser } = use(AuthContext);
  if (!currentUser) {
    return children;
  }

  return <Navigate to={"/"}></Navigate>;
};
export default GuestRouter;
