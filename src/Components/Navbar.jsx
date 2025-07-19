import React, { useState } from "react";
import logo from "../Images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Navbar */}
      <nav className="w-full flex items-center justify-between px-9 py-3 bg-white/60 bg-opacity-40  fixed top-0 left-0 z-50">
        <Link to="/">
          <img
            src={logo}
            alt="Yang's Place Logo"
            className="h-16 rounded-full"
          />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="text-black focus:outline-none "
        >
          {/* Hamburger Icon */}
          <GiHamburgerMenu className="w-12 h-12 hover:text-gray-400" />
        </button>

        {/* Fullscreen Overlay Menu */}
        <div
          className={`fixed inset-0 bg-[#000000] text-white transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white focus:outline-none"
          >
            <IoMdClose className="w-12 h-12 hover:text-gray-400" />
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-medium tracking-wide">
            <Link to="/">
              <img
                src={logo}
                alt="Yang's Place Logo"
                onClick={() => setIsOpen(false)}
                className="h-20 rounded-full mb-4 bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/100"
              />
            </Link>
            <Link
              to="/Home"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37]"
            >
              HOME
            </Link>
            {/* MENU with Right-Side Dropdown on Hover */}
            <div className="relative group flex flex-col items-center">
              <Link
              to="/Menu"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37]"
            >
              MENU
            </Link>

              {/* Dropdown Box */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-48 bg-[#1a1a1a] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <Link
                  to="/menu/starters"
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3 text-sm hover:text-[#D4AF37]"
                >
                  STARTERS
                </Link>
                <Link
                  to="/menu/mains"
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3 text-sm hover:text-[#D4AF37]"
                >
                  MAINS
                </Link>
                <Link
                  to="/menu/desserts"
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3 text-sm hover:text-[#D4AF37]"
                >
                  DESSERTS
                </Link>
              </div>
            </div>

            {/* <Link
              to="/Menu"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37]"
            >
              MENU
            </Link> */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37]"
            >
              FOOD
            </Link>
            <Link
              to="/About"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37]"
            >
              MAA..KI RASOI
            </Link>
            
            <Link
              to="/OrderOnline"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37]"
            >
              ORDER ONLINE
            </Link>
            <Link
              to="/Contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37]"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
