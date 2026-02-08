import React from "react";
import { Outlet } from "react-router";
import DashNav from "../Components/Dashboard/DashNav";
import DashSide from "../Components/Dashboard/DashSide";

const DashLayout = () => {
  return (
    <div className="min-h-screen sand">
      {/* Fixed Sidebar */}
      <DashSide />

      {/* Main Content Area */}
      <div className="ml-20">
        {/* Top Navigation */}
        <DashNav />

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashLayout;
