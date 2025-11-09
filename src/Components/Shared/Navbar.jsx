import React, { use, useEffect, useState } from "react";
import Container from "../Container";
import { CgMenuGridR, CgMoon, CgSun } from "react-icons/cg";
import { Link, NavLink } from "react-router";
// import logo from "../../assets/LOGO.png";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
const Navbar = () => {
  const { currentUser, logOutUser, loading, setLoading } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const links = (
    <>
      <li>
        <NavLink to={"/"} className="text-secondary  text-lg ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/pets"} className="text-secondary  text-lg ">
          Pets & Supplies
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

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="">
      <Container>
        <div className="navbar bg-primary shadow-sm outfit sm:rounded-b-2xl md:px-5">
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
                className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link
              to={"/"}
              className="flex items-center font-bold text-secondary   text-2xl "
            >
              <h1 className="bg-linear-90 from-[#FEEBD5] to-[#fdd6aa] text-transparent bg-clip-text">
                PawMart
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
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
                  className="menu menu-lg dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <p className="justify-between">
                      Theme
                      <label>
                        <label className="toggle text-secondary">
                          <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            className="theme-controller"
                            defaultChecked={
                              localStorage.getItem("theme") === "dark"
                            }
                          />
                          <CgSun className="text-primary"></CgSun>
                          <CgMoon className="text-primary"></CgMoon>
                        </label>
                      </label>
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
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
