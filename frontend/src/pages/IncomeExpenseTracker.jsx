import {
  FaWallet,
  FaGithub,
  FaExternalLinkAlt,
  FaPlusCircle,
  FaLightbulb,
  FaCode,
  FaArrowLeft,
  FaTrash,
  FaEdit,
  FaHistory,
  FaDatabase,
  FaChartPie,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { SiHtml5, SiTailwindcss, SiJavascript } from "react-icons/si";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const features = [
  [
    "CRUD Operations",
    "Create, update, and delete income and expense records easily.",
    <FaEdit />,
  ],

  [
    "Local Storage",
    "All transactions are stored locally, so data remains available after refreshing the browser.",
    <FaDatabase />,
  ],

  [
    "Expense History",
    "Displays complete transaction history on the right side for quick tracking.",
    <FaHistory />,
  ],

  [
    "Balance Calculation",
    "Automatically calculates total balance, income, and expenses.",
    <FaChartPie />,
  ],

  [
    "Delete Transactions",
    "Remove unwanted income or expense records instantly.",
    <FaTrash />,
  ],

  [
    "Responsive UI",
    "Clean and responsive interface built using Tailwind CSS.",
    <SiTailwindcss />,
  ],
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
            Income <span className="text-cyan-400">Expense Tracker</span>
          </h1>

          <p className="mt-6 text-slate-500 dark:text-slate-300 leading-8">
            A responsive Income Expense Tracker developed using HTML, Tailwind
            CSS and JavaScript. The application allows users to manage their
            income and expense records with complete CRUD functionality while
            storing all transactions in Local Storage. Users can add, edit,
            delete and monitor their financial records, while the Expense
            History panel on the right side provides a clear overview of every
            transaction.
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
          The Income Expense Tracker is a frontend web application developed to
          help users manage their daily finances efficiently. Users can add both
          income and expense transactions, edit existing records, delete
          unwanted entries and instantly view updated totals. All transaction
          data is stored using the browser's Local Storage, ensuring information
          remains available even after refreshing the page. The application also
          includes a dedicated Expense History section displayed on the right
          side, allowing users to review all previous transactions in an
          organized manner. This project helped strengthen my understanding of
          CRUD operations, DOM manipulation, Local Storage, JavaScript event
          handling and responsive UI development using Tailwind CSS.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Technology Stack</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            [<SiHtml5 />, "HTML5"],
            [<SiTailwindcss />, "Tailwind CSS"],
            [<SiJavascript />, "JavaScript"],
            [<FaDatabase />, "Local Storage"],
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
            <li>Implementing complete CRUD operations using JavaScript.</li>

            <li>Synchronizing transaction data with Local Storage.</li>

            <li>Updating balance, income and expense values dynamically.</li>

            <li>
              Displaying expense history immediately after every CRUD action.
            </li>

            <li>
              Keeping the UI responsive while handling multiple transactions.
            </li>
          </ul>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <FaLightbulb />
            What I Learned
          </h2>
          <p className="mt-6 text-slate-300 leading-8">
            This project improved my understanding of JavaScript fundamentals by
            building complete CRUD functionality without using any frontend
            framework. I gained practical experience working with Local Storage,
            DOM manipulation, event handling, dynamic UI updates and responsive
            layouts using Tailwind CSS. It also enhanced my problem-solving
            skills by managing application state and keeping transaction history
            synchronized with user actions.
          </p>
          <h3 className="font-bold mt-8 flex gap-2 items-center">
            <FaCode />
            Future Improvements
          </h3>
          <ul className="mt-4 list-disc pl-5 text-slate-300">
            <li>User Authentication</li>
            <li>Monthly Expense Reports</li>
            <li>Expense Categories</li>
            <li>Charts & Analytics Dashboard</li>
            <li>Export to PDF / Excel</li>
            <li>Cloud Database Integration</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
