import React, { use } from "react";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import {
  FaUser,
  FaEnvelope,
  FaClock,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const MyProfile = () => {
  const { currentUser, logOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Successfully logged out");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  // Format date helper
  const formatDate = (timestamp) => {
    if (!timestamp) return "Not available";
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-2 md:py-10 px-2 md:px-4">
      <div className="bg-primary rounded-3xl shadow-lg border border-gray-700 overflow-hidden">
        {/* Profile Header with Avatar */}
        <div className="bg-linear-to-r from-secondary/20 to-secondary/5 p-8 text-center">
          <div className="avatar mb-4">
            <div className="w-32 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img
                src={currentUser?.photoURL}
                alt="Profile"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-secondary">
            {currentUser?.displayName || "User"}
          </h3>
        </div>

        {/* Profile Details */}
        <div className="p-8 space-y-6">
          {/* Display Name */}
          <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-2xl">
            <div className="p-3 bg-secondary/20 rounded-xl">
              <FaUser size={20} className="text-secondary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-secondary opacity-60 mb-1">
                Display Name
              </p>
              <p className="text-lg font-semibold text-secondary">
                {currentUser?.displayName || "Not set"}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-2xl">
            <div className="p-3 bg-secondary/20 rounded-xl">
              <FaEnvelope size={20} className="text-secondary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-secondary opacity-60 mb-1">
                Email Address
              </p>
              <p className="text-lg font-semibold text-secondary">
                {currentUser?.email || "Not available"}
              </p>
            </div>
          </div>

          {/* Account Created */}
          <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-2xl">
            <div className="p-3 bg-secondary/20 rounded-xl">
              <FaClock size={20} className="text-secondary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-secondary opacity-60 mb-1">
                Account Created
              </p>
              <p className="text-lg font-semibold text-secondary">
                {formatDate(currentUser?.metadata?.creationTime)}
              </p>
            </div>
          </div>

          {/* Last Login */}
          <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-2xl">
            <div className="p-3 bg-secondary/20 rounded-xl">
              <FaSignInAlt size={20} className="text-secondary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-secondary opacity-60 mb-1">
                Last Login
              </p>
              <p className="text-lg font-semibold text-secondary">
                {formatDate(currentUser?.metadata?.lastSignInTime)}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <div className="pt-6 border-t border-gray-700">
            <button
              onClick={handleLogout}
              className="btn w-full flex items-center justify-center gap-3 text-lg font-bold"
            >
              <FaSignOutAlt size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
