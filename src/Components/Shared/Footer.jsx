import React from "react";
import { CgFacebook } from "react-icons/cg";
import {
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import logo from "../../assets/LOGO.png";
import Container from "../Container";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary sand pt-10 pb-4 border-t border-secondary/20 mt-10">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Brand & Description */}
          <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-2">
              <img src={logo} alt="PawMart Logo" className="w-12 h-12 mr-2" />
              <span className="text-3xl font-bold bg-linear-90 from-[#FEEBD5] to-[#fdd6aa] text-transparent bg-clip-text">
                PawMart
              </span>
            </Link>
            <p className="max-w-xs text-center md:text-left text-base mb-3">
              PawMart connects local pet owners and buyers for adoption, pet
              care, and premium pet products. Discover, connect, and care for
              your furry friends with ease.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-[#1DA1F2] transition-colors"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#1877F3] transition-colors"
              >
                <CgFacebook size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#FF0000] transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E4405F] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#0A66C2] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="link link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pets-supply" className="link link-hover">
                  Pets & Supplies
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="link link-hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="link link-hover">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* For Owners */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-semibold text-lg mb-2">For Owners</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/add-products" className="link link-hover">
                  Add Listing
                </Link>
              </li>
              <li>
                <Link to="/my-products" className="link link-hover">
                  My Listings
                </Link>
              </li>
              <li>
                <Link to="/my-orders" className="link link-hover">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="link link-hover">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Info & Policies */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="font-semibold text-lg mb-2">Info & Policies</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/terms" className="link link-hover">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="link link-hover">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="link link-hover">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="link link-hover">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary/20 mt-8 pt-4 text-center text-sm opacity-80">
          &copy; {new Date().getFullYear()} PawMart. All rights reserved. |
          Designed for pet lovers.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
