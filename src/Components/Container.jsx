import React from "react";

const Container = ({ children, className }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default Container;
