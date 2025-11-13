import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen content-center text-center sand">
      <title>Error</title>
      <div className=" text-gray-400">
        <h1 className="font-bold   text-9xl"> 404 </h1>
        <h2 className="font-semibold text-3xl">Page Not Found</h2>
        <Link to={"/"} className="font-bold border-2 btn mt-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
