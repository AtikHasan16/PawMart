import React from "react";
import { MoonLoader } from "react-spinners";
const LoadingSpinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <MoonLoader color="#829ab1"></MoonLoader>
    </div>
  );
};

export default LoadingSpinner;
