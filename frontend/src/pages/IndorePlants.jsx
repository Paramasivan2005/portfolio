import {
  FaLeaf,
  FaGithub,
  FaExternalLinkAlt,
  FaMobileAlt,
  FaLightbulb,
  FaCode,
  FaArrowLeft,
  FaPalette,
  FaShoppingCart,
  FaMagic,
  FaLaptopCode,
} from "react-icons/fa";

import { SiHtml5, SiTailwindcss, SiJavascript } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";
import { motion } from "framer-motion";
import indore from "../assets/indore-ss.png"

const features = [
  [
    "Modern Landing Page",
    "Designed a clean and visually appealing landing page for an indoor plant store.",
    <FaLeaf />,
  ],

  [
    "Smooth Animations",
    "Implemented engaging animations and transitions to create an interactive user experience.",
    <FaMagic />,
  ],

  [
    "Product Showcase",
    "Beautifully presented different indoor plants with pricing and call-to-action sections.",
    <FaShoppingCart />,
  ],

  [
    "Responsive Design",
    "Fully responsive layout optimized for desktop, tablet and mobile devices.",
    <FaMobileAlt />,
  ],

  [
    "Modern UI Components",
    "Built reusable sections including Hero, Features, Products, Testimonials and Footer.",
    <FaPalette />,
  ],

  [
    "Performance Optimized",
    "Created lightweight and fast-loading pages using HTML, Tailwind CSS and JavaScript.",
    <FaLaptopCode />,
  ],
];

export default function SmartTaskManager() {
  const navigate = useNavigate();
  const loading = useLoading();

  useEffect(() => {
    loading.current.complete();
  }, []);
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-slate-950 text-slate-800 dark:text-white">
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <button
            onClick={() => navigate("/")}
            className="flex gap-2 text-cyan-400"
          >
            <FaArrowLeft />
            Back
          </button>
          <span className="inline-block mt-6 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
            Frontend UI Project
          </span>

          <h1 className="text-6xl font-black mt-6">
            Indoor <span className="text-cyan-400">Plants Landing Page</span>
          </h1>

          <p className="mt-6 text-slate-500 dark:text-slate-300 leading-8">
            A modern and responsive Indoor Plants Landing Page built using HTML,
            Tailwind CSS and JavaScript. The website is designed as an online
            plant store where users can explore a variety of indoor plants
            through an elegant, visually appealing interface. The project
            focuses on delivering smooth animations, responsive layouts and an
            engaging shopping experience while showcasing frontend design and UI
            development skills.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="px-5 py-3 bg-cyan-500 rounded-xl flex gap-2 items-center"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
            <a
              href="#"
              className="px-5 py-3 border rounded-xl flex gap-2 items-center"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          src={indore}
          className="rounded-3xl border border-slate-700"
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
        <p className="leading-8 text-slate-600 dark:text-slate-300">
          The Indoor Plants Landing Page is a modern frontend UI project
          developed to simulate an online plant shopping website. The
          application includes a visually attractive Hero section, featured
          plant collections, product cards, customer testimonials, promotional
          banners and a responsive navigation bar. Smooth scrolling animations
          and interactive hover effects were implemented throughout the website
          to improve user engagement. Tailwind CSS was used to build a
          responsive layout while JavaScript handled interactive behaviors and
          animations. Although this project focuses only on frontend UI, it
          closely resembles a real-world e-commerce landing page and helped
          improve my skills in responsive web design, animation, layout
          composition and user experience design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Technology Stack</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            [<SiHtml5 />, "HTML5"],
            [<SiTailwindcss />, "Tailwind CSS"],
            [<SiJavascript />, "JavaScript"],
            [<FaMagic />, "CSS & JavaScript Animations"],
          ].map(([i, t], k) => (
            <div key={k} className="p-6 rounded-2xl bg-slate-900 text-white">
              <div className="text-4xl text-cyan-400">{i}</div>
              <h3 className="mt-4 font-bold">{t}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(([t, d, i], k) => (
            <div
              key={k}
              className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-700"
            >
              <div className="text-4xl text-cyan-400">{i}</div>
              <h3 className="text-xl font-bold mt-4">{t}</h3>
              <p className="text-slate-300 mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white">Challenges Faced</h2>
          <ul className="mt-6 space-y-3 list-disc pl-5 text-slate-300">
            <li>
              Creating smooth animations without affecting website performance.
            </li>

            <li>
              Designing a modern and visually balanced landing page layout.
            </li>

            <li>
              Making every section fully responsive across different screen
              sizes.
            </li>

            <li>
              Maintaining consistent spacing, typography and color combinations.
            </li>

            <li>
              Building reusable UI sections while keeping the design clean and
              scalable.
            </li>
          </ul>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
            <FaLightbulb />
            What I Learned
          </h2>
          <p className="mt-6 text-slate-300 leading-8">
            This project enhanced my frontend development skills by giving me
            practical experience in designing responsive user interfaces using
            HTML, Tailwind CSS and JavaScript. I learned how to create smooth
            animations, interactive hover effects and modern layouts that
            improve user engagement. The project also strengthened my
            understanding of responsive design principles, UI composition,
            visual hierarchy and writing clean, maintainable frontend code.
          </p>
          <h3 className="font-bold mt-8 flex gap-2 items-center text-white">
            <FaCode />
            Future Improvements
          </h3>
          <ul className="mt-4 list-disc pl-5 text-slate-300">
            <li>User Authentication</li>

            <li>Shopping Cart Functionality</li>

            <li>Wishlist Feature</li>

            <li>Product Search & Filters</li>

            <li>Online Payment Integration</li>

            <li>Backend & Database Integration</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
