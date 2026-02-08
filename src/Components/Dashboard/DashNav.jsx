import React, { use } from "react";
import { Link } from "react-router";
import Logo from "../Shared/Logo";
import AuthContext from "../../Context/AuthContext";
import { ThemeController } from "../Shared/ThemeController";

const DashNav = () => {
  const { currentUser } = use(AuthContext);

  return (
    <nav className="bg-primary border-b ml-13 border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo - Links to Home */}
       
          <Logo />
       

        {/* User Avatar */}
        <div className="flex items-center gap-4">
          <ThemeController />
          {currentUser && (
            <div className="dropdown dropdown-end text-secondary">
              <div tabIndex={0} role="button" className="avatar">
                <div className="ring-primary ring-offset-secondary w-12 rounded-full ring-2 ring-offset-2">
                  <img
                    alt="User Avatar"
                    src={currentUser.photoURL}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu dropdown-content bg-primary rounded-box mt-3 p-2 shadow-lg border border-gray-700 min-w-48"
              >
                <li className="menu-title text-secondary opacity-60">
                  User Profile
                </li>
                <li className="px-4 py-2">
                  <p className="font-semibold text-secondary">
                    {currentUser.displayName}
                  </p>
                  <p className="text-sm opacity-70">{currentUser.email}</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
