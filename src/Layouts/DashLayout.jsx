import React from "react";
import { Outlet } from "react-router";
import DashNav from "../Components/Dashboard/DashNav";
import DashSide from "../Components/Dashboard/DashSide";

const DashLayout = () => {
  return (
    <>
      <div className="bg-accent min-h-screen">
        <DashNav></DashNav>
        <aside>
          <DashSide></DashSide>
        </aside>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};

export default DashLayout;
