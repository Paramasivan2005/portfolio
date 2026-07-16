import React from "react";
import {
  FaUniversity,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaUsers,
  FaLaptopHouse,
  FaClipboardList,
  FaCalendarCheck,
  FaUserShield,
  FaBell,
  FaChartLine,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLightbulb,
  FaCheckCircle,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";

import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";
import { Link } from "react-router-dom";
import urlImg from "../assets/url-ss.png"; // Change your screenshot path

const SmartCampusProject = () => {
  const techStack = [
    {
      icon: <FaReact />,
      name: "React.js",
      color: "text-sky-500",
      description:
        "Developed an interactive single-page application using reusable React components and React Router.",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      color: "text-cyan-500",
      description:
        "Built a clean, responsive, and modern interface with utility-first styling.",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "text-green-600",
      description:
        "Handled backend logic, authentication, API development, and business operations.",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      color: "text-gray-700",
      description:
        "Created secure REST APIs for authentication, URL management, and user operations.",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      color: "text-blue-700",
      description:
        "Stored user accounts, shortened URLs, and application data with optimized relational database design.",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      color: "text-yellow-500",
      description:
        "Implemented application logic, form validation, asynchronous requests, and dynamic UI behavior.",
    },
    {
      icon: <FaGitAlt />,
      name: "Git & GitHub",
      color: "text-orange-600",
      description:
        "Managed version control and project collaboration through Git and GitHub.",
    },
  ];

  const features = [
    {
      icon: <FaClipboardList />,
      title: "URL Shortening",
      description:
        "Convert long URLs into short, unique, and shareable links using NanoID while ensuring fast redirection and reliable performance.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "QR Code Generation",
      description:
        "Automatically generate QR codes for every shortened URL, making link sharing easier across mobile devices and printed materials.",
    },
    {
      icon: <FaUserShield />,
      title: "JWT Authentication",
      description:
        "Implemented secure user authentication using JSON Web Tokens with protected routes and encrypted password storage.",
    },
    {
      icon: <FaBell />,
      title: "Profile Management",
      description:
        "Users can update their personal information, upload profile images using Cloudinary, and securely manage account settings.",
    },
    {
      icon: <FaChartLine />,
      title: "Password Recovery",
      description:
        "Integrated email-based password reset functionality, allowing users to securely recover access to their accounts.",
    },
    {
      icon: <FaDatabase />,
      title: "Dashboard & Link Management",
      description:
        "A centralized dashboard allows users to create, edit, delete, search, and manage all shortened URLs efficiently.",
    },
  ];

  const loading = useLoading();

  useEffect(() => {
    loading.current.complete();
  }, []);
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-slate-950 text-white">
      {/* ================= HERO SECTION ================= */}

      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background Blur */}
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}

            <div>
              <span className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full text-cyan-400 text-sm font-semibold mb-6">
                <FaUniversity />
                Full Stack Web Application
              </span>

              <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-600 dark:text-slate-300">
                Advanced URL
                <br />
                <span className="text-cyan-400">Shortener Platform</span>
              </h1>

              <p className="mt-8 text-slate-600 dark:text-slate-300 leading-8 text-lg">
                Advanced URL Shortener is a full-stack web application designed
                to simplify link management while providing a secure and
                user-friendly experience. Users can create short URLs, generate
                QR codes, manage their links through a personalized dashboard,
                and securely authenticate using JWT-based authentication. The
                application also includes profile management, password recovery,
                cloud image storage, and responsive design for seamless access
                across all devices.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-6 py-4 rounded-xl font-semibold transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-slate-300 text-slate-800 hover:border-cyan-500 hover:text-cyan-500 dark:border-white/20 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400 px-6 py-4 rounded-xl transition"
                >
                  <FaGithub />
                  Source Code
                </a>
              </div>

              {/* Stats */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                <div className="bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm dark:shadow-none transition">
                  <FaUsers className="text-3xl text-cyan-500 mb-3" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    100%
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Secure Authentication
                  </p>
                </div>

                <div className="bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm dark:shadow-none transition">
                  <FaLaptopHouse className="text-3xl text-cyan-500 mb-3" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    8+
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Core Features
                  </p>
                </div>

                <div className="bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm dark:shadow-none transition">
                  <FaUniversity className="text-3xl text-cyan-500 mb-3" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Full Stack
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    PERN Project
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl "></div>

              <div className="flex flex-col gap-10 relative rounded-3xl overflow-hidden border border-white/10 bg-white dark:bg-slate-900/5 backdrop-blur-xl shadow-2xl">
                <img
                  src={urlImg}
                  alt="Smart Campus"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
                {/* <img
                  src={urlImg}
                  alt="Smart Campus"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
                <img
                  src={urlImg}
                  alt="Smart Campus"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECT OVERVIEW ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold">
              Project Overview
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white">
              Building a Secure & Intelligent URL Management Platform
            </h2>

            <p className="max-w-4xl mx-auto mt-8 text-slate-600 dark:text-slate-300 leading-8 text-lg">
              The Advanced URL Shortener was developed to provide more than
              simple link shortening. The primary goal was to create a complete
              platform where users can securely manage, organize, and monitor
              their shortened URLs through an intuitive dashboard. The
              application enables users to register accounts, authenticate
              securely using JWT, shorten long URLs, generate QR codes,
              customize profile information, recover forgotten passwords, and
              manage all created links efficiently. During development, special
              attention was given to scalability, API security, responsive
              design, reusable React components, clean backend architecture, and
              seamless integration between frontend and backend services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-amber-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-semibold">
              Key Features
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-6">
              Powerful Features Built for
              <span className="text-cyan-600"> Modern Campuses</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-6 leading-8 text-lg">
              The Smart Campus Resource Management System was designed with
              scalability, efficiency, and user experience in mind. Every module
              focuses on simplifying campus operations while improving resource
              utilization and reducing manual administrative work.
            </p>
          </div>

          {/* Feature Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Icon */}

                <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY STACK ================= */}

      <section className="py-24 bg-amber-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 font-semibold">
              Technology Stack
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-6">
              Technologies Used
            </h2>

            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-8">
              The Smart Campus Resource Management System was developed using
              modern web technologies to deliver a secure, scalable, and
              responsive application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-7 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className={`text-5xl mb-5 ${tech.color}`}>{tech.icon}</div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {tech.name}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}

      <section className="py-24 bg-amber-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400 font-semibold">
              Challenges & Solutions
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 text-slate-900 dark:text-white">
              Challenges I Faced
            </h2>

            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-8">
              Every real-world project comes with challenges. Developing this
              application helped me improve my problem-solving abilities and
              understand practical software development workflows.
            </p>
          </div>

          <div className="space-y-8">
            {/* Challenge 1 */}
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm hover:shadow-xl dark:hover:shadow-red-500/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">
                Generating Unique Short URLs
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-8">
                Every generated short URL needed to be unique while maintaining
                high performance.
              </p>

              <div className="mt-5 p-5 rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                  ✔ Solution
                </h4>

                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  Integrated NanoID to generate collision-resistant unique
                  identifiers and verified uniqueness before saving them to the
                  database.
                </p>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm hover:shadow-xl dark:hover:shadow-red-500/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">
                Challenge 02 — Implementing Secure Authentication
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-8">
                Protecting user accounts and restricting access to private
                dashboards required a secure authentication system.
              </p>

              <div className="mt-5 p-5 rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                  ✔ Solution
                </h4>

                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  Implemented JWT authentication, password hashing with bcrypt,
                  protected middleware, and secure API authorization.
                </p>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm hover:shadow-xl dark:hover:shadow-red-500/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">
                Challenge 03 — Password Reset Workflow
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-8">
                Users needed a secure method to recover forgotten passwords
                without compromising account security.
              </p>

              <div className="mt-5 p-5 rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-400 mb-2">
                  ✔ Solution
                </h4>

                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  Built a secure email verification and password reset flow
                  using token-based authentication and expiration validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= END OF PART 3 ================= */}

      <section className="py-24 bg-amber-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}

          <div className="text-center mb-16">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 font-semibold border border-cyan-200 dark:border-cyan-500/20">
              Learning Experience
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              What I Learned
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-slate-600 dark:text-slate-400">
              Developing this project strengthened both my technical knowledge
              and problem-solving abilities. It provided valuable hands-on
              experience in building a complete full-stack application from
              planning to deployment.
            </p>
          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}

            <div className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400 transition-colors">
                <FaLightbulb className="text-3xl" />
              </div>

              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Technical Skills
              </h3>

              <ul className="space-y-5">
                {[
                  "Built scalable REST APIs using Express.js.",
                  "Implemented secure JWT authentication and authorization.",
                  "Integrated Cloudinary for image uploads.",
                  "Improved PostgreSQL database design and query optimization.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <FaCheckCircle className="mt-1 text-green-500 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400 leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}

            <div className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400 transition-colors">
                <FaRocket className="text-3xl" />
              </div>

              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Professional Growth
              </h3>

              <ul className="space-y-5">
                {[
                  "Learned how to structure production-ready full-stack applications.",
                  "Improved debugging skills while integrating frontend and backend.",
                  "Strengthened responsive UI development with Tailwind CSS.",
                  "Understood secure authentication and API best practices.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <FaCheckCircle className="mt-1 text-green-500 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400 leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartCampusProject;
