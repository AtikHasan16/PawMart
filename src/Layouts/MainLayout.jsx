import React from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <>
      <div className="main-layout min-h-screen bg-accent">
        <header className="fixed top-0 left-0 w-full z-50 ">
          <Navbar></Navbar>
        </header>
        <main className="pt-24 min-h-screen">
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
