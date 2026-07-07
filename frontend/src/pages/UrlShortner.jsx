import {
  FaLink,
  FaQrcode,
  FaLock,
  FaUserCircle,
  FaKey,
  FaEnvelope,
  FaCloud,
  FaChartBar,
  FaBolt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiVite,
  SiAxios,
  SiJsonwebtokens,
  SiCloudinary,
} from "react-icons/si";

import { Link } from "react-router-dom";
import urlimg from "../assets/url-ss.png";

const features = [
  {
    icon: FaLink,
    title: "URL Shortening",
    desc: "Generate secure and unique short URLs using NanoID for easy sharing.",
  },
  {
    icon: FaQrcode,
    title: "QR Code Generator",
    desc: "Automatically generate QR Codes for every shortened URL.",
  },
  {
    icon: FaLock,
    title: "Authentication",
    desc: "JWT based authentication with protected routes and authorization.",
  },
  {
    icon: FaUserCircle,
    title: "Profile Management",
    desc: "Update profile information with cloud image uploads.",
  },
  {
    icon: FaKey,
    title: "Password Security",
    desc: "Passwords securely hashed using Bcrypt before storing.",
  },
  {
    icon: FaEnvelope,
    title: "Forgot Password",
    desc: "Password reset workflow through email verification.",
  },
  {
    icon: FaCloud,
    title: "Cloudinary Storage",
    desc: "Profile images stored securely using Cloudinary.",
  },
  {
    icon: FaChartBar,
    title: "Dashboard",
    desc: "Manage, organize and monitor shortened URLs efficiently.",
  },
  {
    icon: FaBolt,
    title: "Responsive UI",
    desc: "Fast, modern and mobile-friendly user interface.",
  },
];

const frontend = [
  { icon: FaReact, name: "React 19" },
  { icon: SiAxios, name: "Axios" },
  { icon: SiTailwindcss, name: "Tailwind CSS 4" },
  { icon: SiVite, name: "Vite" },
];

const backend = [
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: FaDatabase, name: "PostgreSQL" },
  { icon: SiJsonwebtokens, name: "JWT" },
  { icon: FaLock, name: "Bcrypt.js" },
  { icon: FaEnvelope, name: "Nodemailer" },
  { icon: FaLink, name: "NanoID" },
  { icon: SiCloudinary, name: "Cloudinary" },
  { icon: FaCloud, name: "Multer" },
  { icon: FaQrcode, name: "QRCode" },
];

const learnings = [
  "Building a complete authentication system",
  "REST API development with Express.js",
  "PostgreSQL database integration",
  "Cloud storage & file uploads",
  "Password reset workflow implementation",
  "Frontend & backend integration using Axios",
  "Deploying and managing a full-stack application",
];

export default function UrlShortenerDetails() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back Button */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition"
        >
          <FaArrowLeft />
          Back
        </Link>

        {/* Hero */}

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-10">

          <div>

            <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold">
              Full Stack Project
            </span>

            <h1 className="text-5xl font-bold mt-6 leading-tight">
              URL Shortener
            </h1>

            <p className="text-gray-600 mt-8 leading-8 text-lg">
              I built a complete Full-Stack URL Shortener application focused on
              both functionality and user experience. Rather than simply
              shortening links, the application provides a secure platform with
              authentication, profile management, password recovery, cloud image
              storage, QR code generation, and a personalized dashboard.
            </p>

            <p className="text-gray-600 mt-6 leading-8">
              This project allowed me to gain practical experience in designing
              REST APIs, integrating frontend and backend applications,
              managing databases, implementing secure authentication workflows,
              and deploying a production-ready web application.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaGithub />
                Source Code
              </a>

              <a
                href="#"
                className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

          <div>

            <img
              src={urlimg}
              alt=""
              className="rounded-3xl shadow-2xl border"
            />

          </div>

        </div>

        {/* Features */}

        <div className="mt-28">

          <h2 className="text-4xl font-bold text-center">
            ✨ Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border rounded-2xl p-7 hover:shadow-xl transition duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">

                    <Icon className="text-2xl text-purple-600" />

                  </div>

                  <h3 className="text-xl font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Tech Stack */}

        <div className="mt-28 grid lg:grid-cols-2 gap-10">

          <div>

            <h2 className="text-3xl font-bold mb-8">
              💻 Frontend
            </h2>

            <div className="space-y-4">

              {frontend.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 border rounded-xl p-4"
                  >
                    <Icon className="text-2xl text-purple-600" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}

            </div>

          </div>

          <div>

            <h2 className="text-3xl font-bold mb-8">
              ⚙ Backend
            </h2>

            <div className="space-y-4">

              {backend.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 border rounded-xl p-4"
                  >
                    <Icon className="text-2xl text-purple-600" />
                    <span>{tech.name}</span>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* Learnings */}

        <div className="mt-28">

          <h2 className="text-4xl font-bold text-center">
            📚 What I Learned
          </h2>

          <div className="max-w-3xl mx-auto mt-12 space-y-5">

            {learnings.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-4 border rounded-xl p-5"
              >

                <FaCheckCircle className="text-green-500 mt-1" />

                <p>{item}</p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}