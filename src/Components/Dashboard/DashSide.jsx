import React from "react";
import { NavLink } from "react-router";
import {
  FaPlusCircle,
  FaBoxes,
  FaShoppingBag,
  FaUserCircle,
} from "react-icons/fa";

const DashSide = () => {
  const navItems = [
    {
      to: "/dashboard/add-products",
      icon: FaPlusCircle,
      label: "Add Listings",
    },
    { to: "/dashboard/my-products", icon: FaBoxes, label: "My Listings" },
    { to: "/dashboard/my-orders", icon: FaShoppingBag, label: "My Orders" },
    { to: "/dashboard/my-profile", icon: FaUserCircle, label: "My Profile" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen p-2 bg-primary border-r border-gray-700 flex flex-col items-center justify-center py-6 gap-6 z-10">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="flex items-center justify-center p-3 rounded-2xl text-secondary hover:bg-secondary/10 transition-colors"
          title={item.label}
        >
          <item.icon size={25} />
        </NavLink>
      ))}
    </aside>
  );
};

export default DashSide;
