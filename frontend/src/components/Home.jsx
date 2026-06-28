import React from "react";
import profile from "../assets/profile.jpeg";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

const Home = () => {
  return (
    <div id="home" className="py-10 scroll-mt-24">
      {/* its contain img and one paragraph */}
      <div className="w-32 mx-auto">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full rounded-xl  object-fill"
        />
      </div>
      <div className="flex flex-col px-5 md:w-7/10 mx-auto py-3 text-center">
        <p className="mx-auto text-lg md:text-xl paragraph">Hi! I'm Paramasivan 👋</p>
        <h1 className="mx-auto paragraph text-2xl md:text-4xl capitalize pt-1">
          <center> Full Stack Web Developer</center>
          Building modern and scalable web applications.
        </h1>
        <p className="mx-auto pt-1 text-slate-600">
          <center className="">
            I'm a final-year Computer Science student passionate about building
            responsive, user-friendly, and secure web applications. I enjoy
            working with React, Node.js, Express, PostgreSQL, and continuously
            learning new technologies to solve real-world problems.
          </center>
        </p>
      </div>
      {/* buttons */}
      <div className="flex flex-col md:flex md:flex-row gap-5 items-center justify-center pt-3">
        <a href="#contact" className="poppins capitalize flex items-center gap-3 px-5 py-2 rounded-3xl outline cursor-pointer hover:bg-black hover:text-white duration-500">connect with me<FaArrowRight /></a>
        <button className="poppins capitalize flex items-center gap-3 px-5 py-2 rounded-3xl text-white bg-black cursor-pointer hover:scale-105 duration-300">my resume <IoMdDownload /></button>
      </div>
    </div>
  );
};

export default Home;
