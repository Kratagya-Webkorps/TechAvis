import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log(isDropdownOpen)
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="contents w-full md:pt-5 md:pb-5 z-20">
      <div className="mx-auto flex justify-between items-center p-3">
        <div className="flex items-center gap-3 md:ml-32 ml-8">
          <img src={logo} alt="Techavis Logo" className="h-11" />
          <span className="text-Logo font-normal leading-6 tracking-[.15rem]">
            Tech<span className="text-black">avis</span>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleDropdown}
            aria-label="Open main menu"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isDropdownOpen && (
          <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center z-20 shadow-md md:hidden">
            <Link to="/" className="py-2 text-black font-medium text-base hover:text-blue-600" onClick={toggleDropdown}>Home</Link>
            <Link to="/about" className="py-2 text-black font-medium text-base hover:text-blue-600" onClick={toggleDropdown}>About</Link>
            <Link to="/services" className="py-2 text-black font-medium text-base hover:text-blue-600" onClick={toggleDropdown}>Services</Link>
            <Link to="/carrer" className="py-2 text-black font-medium text-base hover:text-blue-600" onClick={toggleDropdown}>Carrer</Link>
            <Link to="/contact" className="py-2 text-black font-medium text-base hover:text-blue-600" onClick={toggleDropdown}>Contact</Link>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="items-center hidden md:flex ">
          <div className="w-[50vw] flex justify-evenly ">
            <Link to="/" className="text-black font-medium text-base hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-black font-medium text-base hover:text-blue-600">About</Link>
            <Link to="/services" className="text-black font-medium text-base hover:text-blue-600">Services</Link>
            <Link to="/carrer" className="text-black font-medium text-base hover:text-blue-600">Carrer</Link>
            <Link to="/contact" className="text-black font-medium text-base hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
