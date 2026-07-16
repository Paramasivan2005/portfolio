import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const ProjectNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 flex justify-around py-4 backdrop-blur-md bg-amber-100/30 dark:bg-gray-900 transition-colors duration-300">

      {/* Logo */}
      <div className="my-auto">
        <Link
          to="/"
          className="title dark:text-white font-normal tracking-wider md:text-xl"
        >
          <span className="text-2xl md:text-4xl">P</span>
          aramasivan
          <span className="text-pink-600 text-2xl md:text-4xl">.</span>
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden md:block my-auto">
        <Link
          to="/"
          className="navber flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 px-6 py-2 rounded-2xl text-black dark:text-white hover:text-pink-600 transition"
        >
          <IoArrowBack />
          Back to Portfolio
        </Link>
      </div>

      {/* Right */}
      <div className="my-auto flex gap-5 items-center">

        {/* Theme */}
        <button onClick={toggleTheme}>
          {darkMode ? (
            <MdOutlineLightMode className="text-2xl text-yellow-400 cursor-pointer" />
          ) : (
            <MdOutlineDarkMode className="text-2xl text-black dark:text-white cursor-pointer" />
          )}
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden dark:text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 w-full h-screen flex items-center justify-center bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg"
        >
          <div className="flex flex-col gap-8 text-xl">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 dark:text-white hover:text-pink-600"
            >
              <IoArrowBack />
              Back to Portfolio
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectNavbar;