import React from "react";
import { CgFacebook, CgYoutube } from "react-icons/cg";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "../../assets/cat.png";
import Container from "../Container";
const Footer = () => {
  return (
    <div className="">
      <Container>
        <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10 rounded-t-2xl sand">
          <aside>
            <figure className="w-20">
              <img src={logo} alt="" />
            </figure>
            <h1 className="bg-linear-90 from-[#FEEBD5] to-[#fdd6aa] text-transparent bg-clip-text text-4xl font-bold">
              PawMart
            </h1>
            <p className="text-lg">
              PawMart connects local pet owners and buyers fo adoption and pet
              care products
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <FaXTwitter size={30} />
              </a>
              <a>
                <FaYoutube size={30}></FaYoutube>
              </a>
              <a>
                <CgFacebook size={30}></CgFacebook>
              </a>
            </div>
          </nav>
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Terms</a>
          </nav>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
