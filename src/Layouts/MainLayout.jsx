import React from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <div className="main-layout min-h-screen bg-accent">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
        <Toaster></Toaster>
      </div>
    </>
  );
};

export default MainLayout;
