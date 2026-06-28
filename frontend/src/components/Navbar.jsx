import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { BiSolidNavigation } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
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
  const shortcut = {
    link: "cursor-pointer text-black dark:text-white hover:text-pink-600 transition-colors duration-300",
  };

  return (
    <div className=" backdrop-blur-md transition-colors duration-300 sticky top-0 left-0 right-0 z-50 flex justify-around  py-4  bg-amber-100/30 dark:bg-gray-900">
      {/* Title */}
      <div className="my-auto">
        <a
          href="#home"
          className="title dark:text-white font-normal tracking-wider md:text-xl"
        >
          <span className="text-2xl md:text-4xl ">P</span>aramasivan{" "}
          <span className="text-pink-600 text-2xl md:text-4xl">.</span>
        </a>
      </div>
      {/* navbar for mobile responsive */}
      {isOpen && (
        <div
          id="menu"
          className={`fixed top-0 right-0 h-screen w-full flex flex-col items-center justify-center
bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg transition-transform duration-700
${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="navbar dark:text-white w-full h-screen flex flex-col justify-center items-center gap-8 my-auto bg-transparent px-5 py-2 rounded-2xl">
            <a
              onClick={() => {
                setActive("home");
                setIsopen(false);
              }}
              href="#home"
              className={active === "home" ? "text-pink-600 font-semibold" : ""}
            >
              Home
            </a>
            <a
              onClick={() => {
                setActive("about");
                setIsopen(false);
              }}
              href="#about"
              className={
                active === "about" ? "text-pink-600 font-semibold" : ""
              }
            >
              About me
            </a>
            <a
              onClick={() => {
                setActive("skills");
                setIsopen(false);
              }}
              href="#skills"
              className={
                active === "skills" ? "text-pink-600 font-semibold" : ""
              }
            >
              Skills
            </a>
            <a
              onClick={() => {
                setActive("projects");
                setIsopen(false);
              }}
              href="#projects"
              className={
                active === "projects" ? "text-pink-600 font-semibold" : ""
              }
            >
              Projects
            </a>
            <a
              onClick={() => {
                setActive("contact");
                setIsopen(false);
              }}
              href="#contact"
              className={
                active === "contact" ? "text-pink-600 font-semibold" : ""
              }
            >
              Contact
            </a>
          </ul>
        </div>
      )}
      {/* navbar for desktop version */}
      <div className="hidden md:block my-auto">
        <ul className=" flex gap-7 navbar my-auto bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 dark:text-white px-5 py-2 rounded-2xl">
          <a href="#home" className={shortcut.link}>
            Home
          </a>
          <a href="#about" className={shortcut.link}>
            About me
          </a>
          <a href="#skills" className={shortcut.link}>
            Skills
          </a>
          <a href="#projects" className={shortcut.link}>
            Projects
          </a>
          <a href="#contact" className={shortcut.link}>
            Contact
          </a>
        </ul>
      </div>
      <div className="my-auto">
        <div className="navbar flex gap-5">
          <button onClick={toggleTheme}>
            {darkMode ? (
              <MdOutlineLightMode className="text-2xl text-yellow-400 cursor-pointer" />
            ) : (
              <MdOutlineDarkMode className="text-2xl text-black dark:text-white cursor-pointer" />
            )}
          </button>
          <button
            className="dark:text-white md:hidden my-auto z-50"
            onClick={() => setIsopen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="dark:text-white dark:hover:text-black dark:hover:bg-white   flex border rounded-full px-7 py-1.5 gap-2 hover:text-white hover:bg-black duration-500"
            >
              Contact <BiSolidNavigation className="my-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
