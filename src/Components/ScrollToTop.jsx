import React, { useEffect } from "react";

const ScrollToTop = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);

  return null;
};

export default ScrollToTop;
