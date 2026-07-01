import React from "react";
import { motion } from "framer-motion";
import urlimg from "../assets/url-ss.png"
import smartcampus from "../assets/campus-ss.png"
import portfolio from "../assets/portfolio-img.png"
import expense from "../assets/expense-ss.png"
import qr from "../assets/qr-ss.png"
import smarttask from "../assets/task-ss.png"
import indore from "../assets/indore-ss.png"



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "URL Shortner",
    img: urlimg,
    desc: "A URL shortening platform for creating and managing short, easy-to-share links.",
    tech: ["Frontend", "Backend"],
    github: "https://github.com/Paramasivan2005/url-shortner.git",
    live: "https://your-url-shortner.vercel.app",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 2,
    title: "Smart Campus Resource Management System",
    img: smartcampus,
    desc: "A web application that streamlines campus resource allocation and management.",
    tech: ["Frontend", "Backend"],
    github: "https://github.com/Paramasivan2005/smart-campus-management.git",
    live: "https://weather.vercel.app",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio",
    img: portfolio,
    desc: "My personal portfolio website.",
    tech: ["React", "Tailwind", "Express", "API"],
    github: "https://github.com/Paramasivan2005/portfolio.git",
    live: "https://paramasivan-portfolio-pi.vercel.app/",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 4,
    title: "Smart Task Manager",
    img: smarttask,
    desc: "A smart task manager that helps users create, organize, and track tasks efficiently.",
    tech: ["HTML", "JavaScript", "Tailwind"],
    github: "https://github.com/Paramasivan2005/smart-task-manager.git",
    live: "https://smart-task-manager-psi-seven.vercel.app/",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 5,
    title: "QR Code Generator",
    img: qr,
    desc: "A fast and user-friendly tool for generating QR codes from text and URLs.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/Paramasivan2005/QrCode-generator.git",
    live: "https://qr-code-generator-ashy-delta.vercel.app/",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 6,
    title: "Income Expense Tracker",
    img: expense,
    desc: "A personal finance application to track income, expenses, and spending habits.",
    tech: ["HTML", "Tailwind", "Javascript"],
    github: "https://github.com/Paramasivan2005/income-expense-tracker.git",
    live: "https://income-expense-tracker-bvoxbqmc2-paramasivans-projects.vercel.app/",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 7,
    title: "Indore Plants",
    img: indore,
    desc: "A modern web landing page for discovering and exploring beautiful indoor plants",
    tech: ["HTML", "Tailwind", "Javascript"],
    github: "https://github.com/Paramasivan2005/indore-plants.git",
    // live: "https://qr-code-generator-ashy-delta.vercel.app/",
    readmore: "https://dashboard.vercel.app",
  },
];

const techColors = {
  HTML: "bg-orange-600",
  CSS: "bg-blue-600",
  JavaScript: "bg-yellow-500",
  React: "bg-cyan-500",
  Tailwind: "bg-sky-500",
  API: "bg-purple-600",
  "Node.js": "bg-green-600",
  MongoDB: "bg-green-700",
  "Framer Motion": "bg-pink-600",
  Frontend: "bg-green-500",
  Backend: "bg-yellow-500",
  Express: "bg-blue-500",
};

const Projects = () => {
  return (
    <div id="projects" className="my-16 scroll-mt-24">
      {/* Heading */}

      <motion.div
  className="text-center mb-12"
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
        <p className="dark:bg-gray-800 dark:text-purple-400 inline px-5 py-1 rounded-full bg-slate-200 uppercase text-purple-700 text-xl">
          . My Work .
        </p>

        <h1 className="dark:from-white dark:via-purple-600 dark:to-purple-900 text-6xl mt-5 bg-linear-to-r from-black via-purple-600 to-purple-900 bg-clip-text text-transparent cinzel">
          Projects
        </h1>

        <p className="text-slate-600 mt-2 dark:text-gray-300">
          Here are some of the projects I've worked on.
          <br />
          Each project represents a challenge I solved with code and creativity.
        </p>
      </motion.div>

      {/* Slider */}

      <motion.div
  className="relative w-[90%] mx-auto"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
        <button className="dark:bg-gray-800 dark:text-white cursor-pointer prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-4">
          <FaArrowLeft />
        </button>

        <button className="dark:bg-gray-800 dark:text-white cursor-pointer next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-4">
          <FaArrowRight />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          centeredSlides={true}
          spaceBetween={25}
          slidesPerView={"auto"}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  whileHover={{
    y: -10,
    transition: {
      type: "spring",
      stiffness: 250,
    },
  }}
  className="dark:bg-gray-800 dark:border-gray-700 bg-neutral-200 rounded-xl border p-4 h-130 hover:shadow-2xl transition-all duration-500"
>
                {/* Image */}

                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="dark:bg-gray-800 bg-white p-4 rounded-full hover:scale-110 transition"
                    >
                      <FaGithub className="text-4xl text-black" />
                    </a>

                    <p className="text-white mt-3 font-semibold">
                      View Source Code
                    </p>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full flex items-center gap-2"
                    >
                      Live Demo
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                {/* Card Details */}

                <h2 className="text-center font-bold text-2xl mt-5 dark:text-white">
                  {project.title}
                </h2>

                <p className="text-center mt-3 text-gray-700 dark:text-gray-300">{project.desc}</p>

                <div className="flex justify-center flex-wrap gap-3 mt-6">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className={`${techColors[item] || "bg-gray-600"} text-white px-4 py-1 rounded-full`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <a href={project.readmore} className="dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition duration-300">
                    Read More..
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Projects;
