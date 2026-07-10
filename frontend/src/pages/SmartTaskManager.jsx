import React from "react";
import { motion } from "framer-motion";
import {
  FaTasks,
  FaUserShield,
  FaSearch,
  FaSortAmountDown,
  FaChartPie,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
  FaLightbulb,
  FaCode,
  FaArrowLeft,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiHtml5 } from "react-icons/si";
import { useLoading } from "../context/LoadingContext"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  ["Authentication", "Signup/Login using LocalStorage", <FaUserShield />],
  ["CRUD", "Create, Edit, Delete & Update tasks", <FaTasks />],
  ["Search", "Instant keyword filtering", <FaSearch />],
  ["Sorting", "Priority & Status sorting", <FaSortAmountDown />],
  ["Analytics", "Task statistics dashboard", <FaChartPie />],
  ["Storage", "Persistent LocalStorage", <FaDatabase />],
];

export default function SmartTaskManager() {
  const navigate = useNavigate();
  const loading = useLoading();

  useEffect(() => {
    loading.current.complete();
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white">
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
            JavaScript Project
          </span>
          <h1 className="text-6xl font-black mt-6">
            Smart <span className="text-cyan-400">Task Manager</span>
          </h1>
          <p className="mt-6 text-slate-500 dark:text-slate-300 leading-8">
            A productivity application built using HTML, Tailwind CSS and
            Vanilla JavaScript. Features include LocalStorage authentication,
            CRUD operations, search, sorting, analytics and responsive
            dashboard.
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
          src="/projects/taskmanager.png"
          className="rounded-3xl border border-slate-700"
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
        <p className="leading-8 text-slate-600 dark:text-slate-300">
          This project was developed completely without React to strengthen my
          JavaScript fundamentals. Users can register, login, manage tasks,
          search, sort and view analytics. All user and task data are stored
          using LocalStorage, making the application work without any backend.
          Building this project improved my understanding of DOM manipulation,
          event handling, array methods, modular JavaScript and responsive UI
          design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Technology Stack</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            [<SiHtml5 />, "HTML5"],
            [<SiTailwindcss />, "Tailwind CSS"],
            [<SiJavascript />, "JavaScript"],
            [<FaDatabase />, "LocalStorage"],
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
          <h2 className="text-3xl font-bold">Challenges Faced</h2>
          <ul className="mt-6 space-y-3 list-disc pl-5 text-slate-300">
            <li>Managing user sessions using LocalStorage.</li>
            <li>Updating UI after CRUD without page reload.</li>
            <li>Combining search and sorting efficiently.</li>
            <li>Keeping analytics synchronized with task updates.</li>
          </ul>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FaLightbulb />
            What I Learned
          </h2>
          <p className="mt-6 text-slate-300 leading-8">
            Improved JavaScript fundamentals, DOM manipulation, LocalStorage,
            authentication flow, CRUD operations, array methods, responsive UI,
            modular coding practices and debugging skills.
          </p>
          <h3 className="font-bold mt-8 flex gap-2 items-center">
            <FaCode />
            Future Improvements
          </h3>
          <ul className="mt-4 list-disc pl-5 text-slate-300">
            <li>JWT Authentication</li>
            <li>Node.js & Express Backend</li>
            <li>MongoDB Database</li>
            <li>Cloud Sync</li>
            <li>Drag & Drop Tasks</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
