import React, { useState, useRef, useEffect } from "react";
import HamburgerMenu from "../assets/menu.svg";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
        setOpenCategory(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav ref={menuRef}>
        <div className="container flex justify-between min-w-full align-middle py-4 px-[10vw] text-white">
          <div className="flex items-center">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="mr-12 hover:cursor-pointer"
            >
              <img src={HamburgerMenu} alt="menu" />
            </button>

            <button
              className="xl:block hidden hover:cursor-pointer"
              onClick={() => setOpenCategory(!openCategory)}
            >
              Villa Category
              {openCategory ? (
                <FaCaretUp className="inline text-white ml-4" />
              ) : (
                <FaCaretDown className="inline text-white ml-4" />
              )}
            </button>
          </div>

          <ul className="xl:flex items-center hidden">
            <li className="mr-12">
              <a
                href="#"
                className="font-normal text-white hover:text-[#106A64]"
              >
                Contact Us
              </a>
            </li>
            <li>
              <button className="py-2 px-8 bg-[#106A64] hover:opacity-80 hover:cursor-pointer">
                Login
              </button>
            </li>
          </ul>
        </div>
        {openMenu && (
          <ul className="lg:mx-34 mx-23 space-y-2 text-gray-700 font-medium bg-white w-[10vw] rounded-md">
            <li>
              <a
                href="#about"
                className="block pt-2 px-2 rounded hover:bg-gray-100 text-xs"
              >
                About
              </a>
            </li>
            <hr className="m-0" />
            <li>
              <a
                href="#"
                className="block pt-2 px-2 rounded hover:bg-gray-100 text-xs"
              >
                Villa Categorys
              </a>
            </li>
            <hr className="m-0" />
            <li>
              <a
                href="#gallery"
                className="block px-2 py-2 rounded hover:bg-gray-100 text-xs"
              >
                Galery
              </a>
            </li>
          </ul>
        )}
        {openCategory && (
          <ul className="lg:mx-34 mx-34 space-y-2 text-gray-700 font-medium bg-white w-[10vw] rounded-md">
            <li>
              <a
                href="#about"
                className="block pt-2 px-2 rounded hover:bg-gray-100 text-xs"
              >
                4 Bedroom Villa
              </a>
            </li>
            <hr className="m-0" />
            <li>
              <a
                href="#"
                className="block pt-2 px-2 rounded hover:bg-gray-100 text-xs"
              >
                2 Bedroom Villa
              </a>
            </li>
            <hr className="m-0" />
            <li>
              <a
                href="#gallery"
                className="block px-2 py-2 rounded hover:bg-gray-100 text-xs"
              >
                Joglo House
              </a>
            </li>
            <hr className="m-0" />
            <li>
              <a
                href="#gallery"
                className="block px-2 py-2 rounded hover:bg-gray-100 text-xs"
              >
                Kudus House
              </a>
            </li>
            <hr className="m-0" />
            <li>
              <a
                href="#gallery"
                className="block px-2 py-2 rounded hover:bg-gray-100 text-xs"
              >
                Bamboo House
              </a>
            </li>
            <hr className="m-0" />
            <li>
              <a
                href="#gallery"
                className="block px-2 py-2 rounded hover:bg-gray-100 text-xs"
              >
                Bamboo Studio
              </a>
            </li>
            <hr className="m-0" />
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
