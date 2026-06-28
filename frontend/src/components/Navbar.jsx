import React, { useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiSolidNavigation } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [active, setActive] = useState("home");
  
  const shortcut = {
    link: "hover:text-pink-600 cursor-pointer",
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 flex justify-around  py-4 my-auto bg-amber-100/30">
      {/* Title */}
      <div className="my-auto">
        <a href="#home" className="title font-normal tracking-wider md:text-xl">
          <span className="text-2xl md:text-4xl">P</span>aramasivan{" "}
          <span className="text-pink-600 text-2xl md:text-4xl">.</span>
        </a>
      </div>
      {/* navbar for mobile responsive */}
      {isOpen && (
        <div
          id="menu"
          className={`fixed top-0 right-0 h-screen w-full flex flex-col items-center justify-center  backdrop-blur-lg transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="navbar w-full h-screen flex flex-col justify-center items-center gap-8 my-auto bg-transparent px-5 py-2 rounded-2xl">
            <a onClick={()=> setActive("home")} href="#home" className={active === "home" ? "text-pink-600 font-semibold" : ""}>
              Home
            </a>
            <a onClick={()=> setActive("about")} href="#about" className={active === "about" ? "text-pink-600 font-semibold" : ""}>
              About me
            </a>
            <a onClick={()=> setActive("skills")} href="#skills" className={active === "skills" ? "text-pink-600 font-semibold" : ""}>
              Skills
            </a>
            <a onClick={()=> setActive("projects")} href="#projects" className={active === "projects" ? "text-pink-600 font-semibold" : ""}>
              Projects
            </a>
            <a onClick={()=> setActive("contact")} href="#contact" className={active === "contact" ? "text-pink-600 font-semibold" : ""}>
              Contact
            </a>
          </ul>
        </div>
      )}
      {/* navbar for desktop version */}
      <div className="hidden md:block my-auto">
        <ul className="flex gap-7 navbar my-auto bg-white px-5 py-2 rounded-2xl">
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
          <MdOutlineDarkMode className="my-auto text-xl hover:text-white hover:bg-black/50 cursor-pointer rounded-full duration-300" />
          <button
            className="md:hidden my-auto z-50"
            onClick={() => setIsopen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
          <div className="hidden lg:block">
            <a href="#contact" className="flex border rounded-full px-7 py-1.5 gap-2 hover:text-white hover:bg-black duration-500">
              Contact <BiSolidNavigation className="my-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
