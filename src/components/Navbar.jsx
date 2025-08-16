import React, { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import Profile from "./Profile";


const Navbar = () => {
  const { session, signOut, signUp } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [openNavMenu, setOpenNavMenu] = useState(true);

  const navMenu = [
    { name: "Home", path: "/" },
    { name: "Clothes", path: "/clothes" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const navigate = useNavigate();

  return (
    <div className="relative font-Neuton">
      <nav className="flex md:justify-around justify-between items-center bg-white-800 text-black py-4 mx-6">
        <div className="flex items-center gap-3 justify-center">
          <IoMenu
            className=" text-black text-2xl md:hidden"
            onClick={() => setOpenNavMenu(false)}
          />
          <span className="text-3xl font-bold">
            Car <span className="text-amber-500">Sales</span>
          </span>
        </div>
        {/* desktop Navigation */}
        <ul className="md:flex hidden">
          {navMenu.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className="mx-9 cursor-pointer hover:text-gray-300"
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 relative">
          <FaCartShopping />
          {session ? (
            <button className="rounded-full w-7 relative">
              <img
                src={session?.user?.user_metadata?.avatar_url}
                alt=""
                className="rounded-full"
                onClick={() => setOpenProfile(false)}
              />
            </button>
          ) : (
            <div>
              <button
                className="bg-amber-600 text-white px-3 rounded-md"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        className={`bg-white justify-center border-2 absolute top-0 left-0 z-50 w-[40%] p-3 md:hidden transform transition-transform duration-300 ease-in-out ${
          !openNavMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <IoIosCloseCircle
            className="text-2xl text-red-700"
            onClick={() => setOpenNavMenu(true)}
          />
        </div>
        <div className="flex flex-col items-center text-2xl">
          {navMenu.map((menu, index) => (
            <p key={index} onClick={() => setOpenNavMenu(true)}>
              <Link to={menu.path}>{menu.name}</Link>
            </p>
          ))}
        </div>
      </div>
      {/* profile page */}
      <div className={`absolute left-[35%] top-[0%] z-50 md:left-[75%] bg-gray-200 rounded-md px-4 py-2  transform transition-transform duration-300 ease-in-out ${
          openProfile ? "translate-y-[50%]" : "-translate-y-full"
        }`}>
          <div className="flex justify-end">
          <IoIosCloseCircle
            className="text-2xl text-red-700"
            onClick={() => setOpenProfile(true)}
          />
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
