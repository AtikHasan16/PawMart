import React from "react";
import { Outlet } from "react-router";
import DashNav from "../Components/Dashboard/DashNav";
import DashSide from "../Components/Dashboard/DashSide";

const DashLayout = () => {
  return (
    <div className="min-h-screen sand  bg-accent">
      {/* Fixed Sidebar */}
      <DashSide />

      {/* Main Content Area */}
      <div className="">
        {/* Top Navigation */}
        <DashNav />

        {/* Page Content */}
        <main className="pl-16 md:pl-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashLayout;
