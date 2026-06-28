import React from "react";
import { FaCode } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { GiServerRack } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import express from "../assets/express.png";
import jwt from "../assets/jwt.png";
import redis from "../assets/redis.png";
import restapi from "../assets/restapi.png";
import socket from "../assets/Socket.io.png";
import postgres from "../assets/postgresql.png";
import mysql from "../assets/MySQL.png";
import neon from "../assets/neon.webp";
import supabase from "../assets/supabase.png";
import python from "../assets/Python.png";
import netlify from "../assets/netlify.png";
import vercel from "../assets/Vercel.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import render from "../assets/render.png";
import postman from "../assets/postman.webp";

const Skills = () => {
  return (
    <div id="skills" className="scroll-mt-20">
      <div className="text-center my-10">
        <FaCode className="mx-auto text-indigo-600 text-4xl" />
        <h1 className="text-4xl cinzel font-bold">
          My <span className="text-indigo-600">Skills</span>
        </h1>
        <p className="inter text-slate-700">
          Technologies I use to build modern, responsive and scalable <br /> web
          applications..
        </p>
        <hr className="w-20 mx-auto mt-3 text-indigo-700" />
      </div>

      <div>
        {/* frontend section*/}
        <div className="flex flex-col gap-2 items-center my-10">
          <h1 className="flex items-center gap-2 text-2xl poppins font-semibold">
            <RiComputerLine className="text-3xl text-blue-500" /> Frontend
          </h1>

          <div className="w-9/10  border-blue-500 border-2 rounded-xl flex flex-wrap gap-4 px-5 py-10 justify-around">
            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img src={html} alt="HTML" className="w-20 h-20 object-contain" />
              <p className="py-1  text-sm font-medium">HTML</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img src={css} alt="HTML" className="w-20 h-20 object-contain" />
              <p className="py-1  text-sm font-semibold">CSS</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={tailwind}
                alt="tailwind"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1 text-sm font-semibold">Tailwind CSS</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img src={js} alt="js" className="w-20 h-20 object-contain" />
              <p className="py-1 text-sm font-semibold">Javascript</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={react}
                alt="react"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1 text-sm font-semibold">React</p>
            </div>
          </div>
        </div>

        {/* backend section */}

        <div className="flex flex-col gap-2 items-center my-10">
          <h1 className="flex items-center gap-2 text-2xl poppins font-semibold">
            <GiServerRack className="text-3xl text-green-500" /> Backend
          </h1>

          <div className="w-9/10  border-green-500 border-2 rounded-xl flex flex-wrap gap-4 px-5 py-10 justify-around">
            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={node}
                alt="node js"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1  text-sm font-medium">Node js</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={express}
                alt="HTML"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1  text-sm font-semibold">Express js</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img src={jwt} alt="jwt" className="w-20 h-20 object-contain" />
              <p className="py-1 text-sm font-semibold">JWT</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={redis}
                alt="redis"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1 text-sm font-semibold">Redis</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={restapi}
                alt="restapi"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1 text-sm font-semibold">Rest API</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={socket}
                alt="socket io"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1 text-sm font-semibold">Socket io</p>
            </div>
          </div>
        </div>
        {/* combined div */}
        <div className="flex flex-col lg:flex-row gap-8 w-9/10 mx-auto my-10">
          {/* Database Section */}
          <div className="flex-1 flex flex-col items-center gap-3">
            <h1 className="flex items-center gap-2 text-2xl poppins font-semibold">
              <FaDatabase className="text-3xl text-purple-500" />
              Database
            </h1>

            <div className="w-full border-2 border-purple-500 rounded-xl flex flex-wrap justify-center gap-6 p-8">
              <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:shadow-xl hover:scale-105 duration-300 rounded-2xl p-4 flex flex-col items-center justify-between">
                <img
                  src={postgres}
                  alt="postgresql"
                  className="w-20 h-20 object-contain"
                />
                <p className="text-sm font-medium">PostgreSQL</p>
              </div>

              <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:shadow-xl hover:scale-105 duration-300 rounded-2xl p-4 flex flex-col items-center justify-between">
                <img
                  src={mysql}
                  alt="mysql"
                  className="w-20 h-20 object-contain"
                />
                <p className="text-sm font-medium">MySQL</p>
              </div>
            </div>
          </div>

          {/* Programming Language Section */}
          <div className="lg:w-[320px] flex flex-col items-center gap-3">
            <h1 className="flex items-center gap-2 text-xl text-center poppins font-semibold">
              <FaCode className="text-3xl text-yellow-500" />
              Programming Language
            </h1>

            <div className="w-full border-2 border-yellow-500 rounded-xl flex justify-center p-8">
              <div className="w-32 h-32 bg-white shadow-2xl hover:shadow-xl hover:drop-shadow-2xl hover:scale-105 duration-300 rounded-2xl p-4 flex flex-col items-center justify-between">
                <img
                  src={python}
                  alt="python"
                  className="w-20 h-20 object-contain"
                />
                <p className="text-sm font-medium text-center">
                  Python(Basics)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* deployment section */}

        <div className="flex flex-col gap-2 items-center my-10">
          <h1 className="flex items-center gap-2 text-2xl poppins font-semibold">
            <AiOutlineDeploymentUnit className="text-3xl text-indigo-500" />{" "}
            Deployment
          </h1>

          <div className="w-9/10  border-indigo-500 border-2 rounded-xl flex flex-wrap gap-4 px-5 py-10 justify-around">
            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={netlify}
                alt="netlify"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1  text-sm font-medium">Netlify</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={vercel}
                alt="vercel"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1  text-sm font-semibold">Vercel</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={render}
                alt="render"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1  text-sm font-semibold">Render</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img src={neon} alt="neon" className="w-20 h-20 object-contain" />
              <p className="py-1 text-sm font-semibold">Neon</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={supabase}
                alt="supabase"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1 text-sm font-semibold">Supabase</p>
            </div>
          </div>
        </div>

        {/* tools section */}

        <div className="flex flex-col gap-2 items-center my-10">
          <h1 className="flex items-center gap-2 text-2xl poppins font-semibold">
            <FaTools className="text-3xl text-pink-400" /> Tools
          </h1>

          <div className="w-9/10  border-pink-400 border-2 rounded-xl flex flex-wrap gap-4 px-5 py-10 justify-around">
            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img src={git} alt="git" className="w-20 h-20 object-contain" />
              <p className="py-1  text-sm font-medium">Git</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={github}
                alt="github"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1  text-sm font-medium">GitHub</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={vscode}
                alt="vscode"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1  text-sm font-medium">Vs Code</p>
            </div>

            <div className="w-32 h-32 bg-white shadow-2xl hover:drop-shadow-2xl hover:scale-105 duration-300  rounded-2xl p-4 flex flex-col items-center justify-between">
              <img
                src={postman}
                alt="postman"
                className="w-20 h-20 object-contain"
              />
              <p className="py-1  text-sm font-medium">Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
