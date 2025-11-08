import React, { use } from "react";
import Container from "../Container";
import { CgMenuGridR } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import logo from "../../assets/LOGO.png";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
const Navbar = () => {
  const { currentUser, logOutUser } = use(AuthContext);
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
  return (
    <div className="">
      <Container>
        <div className="navbar bg-primary shadow-sm outfit sm:rounded-2xl md:px-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
              className="flex items-center font-bold text-secondary   text-2xl"
            >
              <figure className="w-12">
                <img src={logo} />
              </figure>
              PawMart
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          {currentUser ? (
            <div className="navbar-end">
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
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
