import React from "react";
import { motion } from "framer-motion";
import {
  FaQrcode,
  FaGithub,
  FaExternalLinkAlt,
  FaDownload,
  FaLightbulb,
  FaCode,
  FaArrowLeft,
  FaCloud,
  FaPalette,
} from "react-icons/fa";

import { SiReact, SiTailwindcss, SiJavascript } from "react-icons/si";

import { useLoading } from "../context/LoadingContext"
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import qr from "../assets/qr-ss.png"

const features = [
  [
    "QR Code Generation",
    "Generate QR codes instantly from text, URLs, emails and phone numbers.",
    <FaQrcode />,
  ],

  [
    "QR Code API",
    "Integrated QR Code API to dynamically generate QR images.",
    <FaCloud />,
  ],

  [
    "Custom Size",
    "Users can choose different QR sizes before generating.",
    <FaPalette />,
  ],

  [
    "Instant Preview",
    "Displays the generated QR code immediately without page refresh.",
    <FaQrcode />,
  ],

  [
    "Download QR",
    "Users can download the generated QR Code image.",
    <FaDownload />,
  ],

  [
    "Responsive Design",
    "Optimized for desktop, tablet and mobile devices.",
    <SiReact />,
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
            React Project
          </span>
          <h1 className="text-6xl font-black mt-6">
            QR <span className="text-cyan-400">Code Generator</span>
          </h1>
          <p className="mt-6 text-slate-500 dark:text-slate-300 leading-8">
            A modern QR Code Generator built using React, Tailwind CSS and
            JavaScript. The application allows users to generate QR codes
            instantly by entering any text or URL. It integrates a QR Code API
            and also provides customizable QR sizes before generating the final
            image.
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
          src={qr}
          className="rounded-3xl border border-slate-700"
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
        <p className="leading-8 text-slate-600 dark:text-slate-300">
          The QR Code Generator is a React-based web application developed to
          simplify QR code creation. Users can enter any text, website URL,
          email address or phone number and instantly generate a QR code using
          an external QR Code API. The application also allows users to
          customize the QR code size before generation, providing greater
          flexibility for different use cases. React Hooks were used to manage
          user input, API requests and dynamic rendering while Tailwind CSS was
          used to build a modern, responsive user interface. This project helped
          me improve my understanding of API integration, React state
          management, component-based architecture and responsive UI
          development.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Technology Stack</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            [<SiReact />, "React"],
            [<SiTailwindcss />, "Tailwind CSS"],
            [<SiJavascript />, "JavaScript"],
            [<FaCloud />, "QR Code API"],
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
            <li>Handling empty input validation.</li>
            <li>Updating QR code dynamically after every user input.</li>
            <li>Managing API responses correctly.</li>
            <li>Allowing users to generate QR codes in multiple sizes.</li>
          </ul>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold flex items-center gap-2 text-white">
            <FaLightbulb />
            What I Learned
          </h2>
          <p className="mt-6 text-slate-300 leading-8">
            This project strengthened my understanding of React fundamentals,
            API integration, state management using useState, conditional
            rendering, reusable components and responsive UI development with
            Tailwind CSS. I also gained practical experience in working with
            third-party APIs and handling dynamic user input efficiently.
          </p>
          <h3 className="font-bold mt-8 flex gap-2 items-center text-white">
            <FaCode />
            Future Improvements
          </h3>
          <ul className="mt-4 list-disc pl-5 text-slate-300">
            <li>Custom QR Colors</li>
            <li>Logo Inside QR</li>
            <li>PNG & SVG Download</li>
            <li>QR History</li>
            <li>Dark / Light Theme</li>
            <li>Camera QR Scanner</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
