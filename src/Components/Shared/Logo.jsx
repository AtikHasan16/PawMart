import React from "react";
import logo from "../../assets/LOGO.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center font-bold text-secondary   text-2xl "
    >
      <h1 className="bg-linear-90 from-[#FEEBD5] to-[#fdd6aa] text-transparent bg-clip-text flex items-center">
        <figure className="hidden md:block w-13">
          <img src={logo} alt="" />
        </figure>{" "}
        PawMart
      </h1>
    </Link>
  );
};

export default Logo;
