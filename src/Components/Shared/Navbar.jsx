import React, { use } from "react";
import Container from "../Container";
import { CgMenuGridR } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { ThemeController } from "./ThemeController";
import Logo from "./Logo";
import {
  FaHome,
  FaPaw,
  FaTachometerAlt,
  FaInfoCircle,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";
import Swiper from "swiper";
import Swal from "sweetalert2";

const Navbar = () => {
  const { currentUser, logOutUser, loading } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="text-secondary text-lg flex items-center gap-2"
        >
          <FaHome size={18} />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pets-supply"}
          className="text-secondary text-lg flex items-center gap-2"
        >
          <FaPaw size={18} />
          <span>Pets & Supplies</span>
        </NavLink>
      </li>
      {!currentUser ? (
        ""
      ) : (
        <>
          <li>
            <NavLink
              to={"/dashboard"}
              className="text-secondary text-lg flex items-center gap-2"
            >
              <FaTachometerAlt size={18} />
              <span>Dashboard</span>
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to={"/about-us"}
          className="text-secondary text-lg flex items-center gap-2"
        >
          <FaInfoCircle size={18} />
          <span>About Us</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className="text-secondary text-lg flex items-center gap-2"
        >
          <FaEnvelope size={18} />
          <span>Contact Us</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/support"}
          className="text-secondary text-lg flex items-center gap-2"
        >
          <FaQuestionCircle size={18} />
          <span>Support</span>
        </NavLink>
      </li>
    </>
  );
  const skeletons = Array(6)
    .fill(0)
    .map((_, i) => (
      <li key={i}>
        <div className="skeleton h-7 w-24 bg-secondary/20 "></div>
      </li>
    ));
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      logOutUser()
        .then(() => {
          toast.success("Successfully signout");
        })
        .catch((err) => {
          toast.error(err.code);
        });

      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
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
                  className=" text-amber-100 mr-2 xl:hidden"
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
              <div>
                <Logo></Logo>
              </div>
            </div>
            <div className="navbar-center hidden xl:flex">
              <ul className="menu menu-horizontal gap-2">
                {loading ? skeletons : links}
              </ul>
            </div>
            {loading ? (
              <div className="navbar-end gap-2 flex items-center">
                <div className="skeleton h-10 w-24 bg-secondary/20 rounded-full"></div>
                <div className="skeleton h-12 w-12 bg-secondary/20 rounded-full"></div>
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
                            src={currentUser?.photoURL}
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex="-1"
                        className="menu menu-lg dropdown-content bg-primary rounded-box  mt-3  p-2 shadow"
                      >
                        <p>User Profile: </p>
                        <Link to={"/dashboard/my-profile"}>
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
                        </Link>
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
