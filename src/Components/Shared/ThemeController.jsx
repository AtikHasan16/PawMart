import React, { useEffect, useState } from "react";
import { CgMoon, CgSun } from "react-icons/cg";

export const ThemeController = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <label>
      <label className="toggle text-secondary">
        <input
          onChange={(e) => handleTheme(e.target.checked)}
          type="checkbox"
          className="theme-controller"
          defaultChecked={localStorage.getItem("theme") === "dark"}
        />
        <CgSun className="text-primary"></CgSun>
        <CgMoon className="text-primary"></CgMoon>
      </label>
    </label>
  );
};
