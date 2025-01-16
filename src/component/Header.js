// src/components/Header.js
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-3xl font-bold  bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          <a href="#hero" className="hover:text-blue-400 transition duration-300">
            Harshal Ladukar
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-2xl space-x-6">
          <li>
            <a href="#education" className="hover:text-blue-400  transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none"
        >
          <span className="hamburger-icon">
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-center space-y-4 py-4">
          <li>
            <a
              href="#about"
              className="block hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
