import React, { use } from "react";
import Container from "../Container";
import { CgMenuGridR, CgMoon, CgSun } from "react-icons/cg";
import { Link, NavLink } from "react-router";
// import logo from "../../assets/LOGO.png";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";
import logo from "../../assets/LOGO.png";
import { ThemeController } from "./ThemeController";
const Navbar = () => {
  const { currentUser, logOutUser, loading } = use(AuthContext);
  //console.log(loading);

  const links = (
    <>
      <li>
        <NavLink to={"/"} className="text-secondary  text-lg ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/pets-supply"} className="text-secondary  text-lg ">
          Pets & Supplies
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"} className="text-secondary  text-lg ">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className="text-secondary  text-lg ">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to={"/support"} className="text-secondary  text-lg ">
          Support
        </NavLink>
      </li>
      {!currentUser ? (
        ""
      ) : (
        <>
          <li>
            <NavLink to={"/add-products"} className="text-secondary  text-lg ">
              Add Listings
            </NavLink>
          </li>
          <li>
            <NavLink to={"/my-products"} className="text-secondary  text-lg ">
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink to={"/my-orders"} className="text-secondary  text-lg ">
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"} className="text-secondary  text-lg ">
              Dashboard
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Successfully signout");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="">
      <div className="bg-primary">
        <Container>
          <div className="navbar  border-secondary  outfit  md:px-6 py-4">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className=" text-amber-100 mr-2 lg:hidden"
                >
                  <CgMenuGridR size={24} />
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-primary rounded-box  mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
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
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            {loading ? (
              <div className="navbar-end text-amber-100">
                <ClockLoader color="#FDD6AA"></ClockLoader>
              </div>
            ) : (
              <div className="navbar-end">
                {currentUser ? (
                  <div className="navbar-end gap-2">
                    <button className="btn" onClick={handleLogout}>
                      Logout
                    </button>

                    <div className="dropdown dropdown-end text-secondary">
                      <div tabIndex={0} role="button" className="avatar">
                        <div className="ring-primary ring-offset-secondary w-12 rounded-full ring-3 ring-offset-2">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={currentUser.photoURL}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex="-1"
                        className="menu menu-lg dropdown-content bg-primary rounded-box  mt-3  p-2 shadow"
                      >
                        <p>User Profile: </p>
                        <li>
                          <p className="flex justify-center">
                            {" "}
                            {currentUser.displayName}
                          </p>
                          <p className="border-b-2 flex justify-center">
                            {" "}
                            {currentUser.email}
                          </p>
                        </li>
                        <li>
                          <p className=" flex justify-between">
                            Theme <ThemeController />
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="navbar-end gap-2">
                    <Link to={"/login"} className="btn ">
                      Login
                    </Link>
                    <Link to={"/register"} className="btn ">
                      Register
                    </Link>
                    <div>
                      <ThemeController />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
