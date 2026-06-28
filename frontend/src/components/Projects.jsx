import React from "react";
import ss from "../assets/ss.png";

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
    img: ss,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourname/url-shortner",
    live: "https://your-url-shortner.vercel.app",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 2,
    title: "Weather App",
    img: ss,
    desc: "Weather app using OpenWeather API.",
    tech: ["React", "Tailwind", "API"],
    github: "https://github.com/yourname/weather",
    live: "https://weather.vercel.app",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio",
    img: ss,
    desc: "My personal portfolio website.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourname/portfolio",
    live: "https://portfolio.vercel.app",
    readmore: "https://dashboard.vercel.app",
  },
  {
    id: 4,
    title: "Admin Dashboard",
    img: ss,
    desc: "Dashboard with charts and analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourname/dashboard",
    live: "https://dashboard.vercel.app",
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
};

const Projects = () => {
  return (
    <div id="projects" className="my-16 scroll-mt-24">
      {/* Heading */}

      <div className="text-center mb-12">
        <p className="inline px-5 py-1 rounded-full bg-slate-200 uppercase text-purple-700 text-xl">
          . My Work .
        </p>

        <h1 className="text-6xl mt-5 bg-linear-to-r from-black via-purple-600 to-purple-900 bg-clip-text text-transparent cinzel">
          Projects
        </h1>

        <p className="text-slate-600 mt-2">
          Here are some of the projects I've worked on.
          <br />
          Each project represents a challenge I solved with code and creativity.
        </p>
      </div>

      {/* Slider */}

      <div className="relative w-[90%] mx-auto">
        <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-4">
          <FaArrowLeft />
        </button>

        <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-4">
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
              <div className="bg-neutral-200 rounded-xl border p-4 h-130 hover:shadow-2xl transition-all duration-500">
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
                      className="bg-white p-4 rounded-full hover:scale-110 transition"
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

                <h2 className="text-center font-bold text-2xl mt-5">
                  {project.title}
                </h2>

                <p className="text-center mt-3 text-gray-700">{project.desc}</p>

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
                  <a href={project.readmore} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl transition duration-300">
                    Read More..
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
