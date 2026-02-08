import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
