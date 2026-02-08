import React from "react";
import { NavLink } from "react-router";

const DashSide = () => {
  return (
    <div>
      <li>
        <NavLink
          to={"/dashboard/add-products"}
          className="text-secondary  text-lg "
        >
          Add Listings
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/my-products"}
          className="text-secondary  text-lg "
        >
          My Listings
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard/my-orders"}
          className="text-secondary  text-lg "
        >
          My Orders
        </NavLink>
      </li>
    </div>
  );
};

export default DashSide;
