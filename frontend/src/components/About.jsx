import React from "react";
import profile from "../assets/profile.jpeg";
import { CiUser } from "react-icons/ci";

const About = () => {
  const educationData = [
    {
      year: "2023 - 2027",
      degree: "B.E. Computer Science and Engineering",
      institution: "PSN College Of Engineering and Technology, Tirunelveli",
      score: "CGPA: 6.1 / 10",
    },
    {
      year: "2021 - 2023",
      degree: "Higher Secondary (12th)",
      institution: "TNDTA RMP PCN Hr.Sec School, Sathankulam",
      score: "Percentage: 74%",
    },
  ];
  return (
    <div id="about" className=" md:p-10 w-full max-h-screen flex flex-col md:flex md:flex-row">
      <div className="flex flex-col gap-10 px-10 md:flex md:flex-row">
        {/* left side and top side */}
        <div className="md:w-[45%] lg:w-[25%] h-fit relative bg-green-300">
          <img src={profile} alt="profile" className="shadow-lg rounded-lg" />
          <div className="backdrop-blur-xl rounded-lg px-1 md:px-5 py-3 flex flex-col absolute -bottom-8 left-5 md:left-0 lg:left-3">
            <p className="text-white font-bold md:text-sm text-xs">
              Final year CSE Student
            </p>
            <p className="text-purple-600 font-bold capitalize md:text-sm text-xs">
              open to internship opportunities
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="md:w-[75%] py-5">
          <h1 className="flex gap-2 items-center poppins font-medium uppercase text-purple-600">
            <CiUser className="text-normal font-bold text-purple-600 my-auto" />
            About me
          </h1>
          <h1 className="poppins font-semibold text-3xl md:text-4xl py-2">
            Get to know me
          </h1>
          <p className="inter text-slate-800">
            I’m a final-year Computer Science and Engineering student passionate
            about building clean, responsive web applications and solving
            real-world problems through code. I’ve solved 15+ LeetCode problems
            and 30+ HackerRank challenges, and I’m currently strengthening my
            skills in Data Structures and Algorithms while exploring React and
            backend development. I enjoy turning ideas into practical projects
            and I’m actively looking for opportunities to grow as a developer
            and contribute to real-world applications.
          </p>
          <div className="pt-5 flex items-center gap-3 mb-8 text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.174c-.053-.462.037-.929.27-1.311L11.237 2.33a2 2 0 0 1 3.526 0l6.706 6.533a2 2 0 0 1 .27 1.311l-1.68 14.604a2 2 0 0 1-1.982 1.772H5.944a2 2 0 0 1-1.982-1.772l-1.701-14.604Z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v9" />
            </svg>
            <h2 className="text-xl font-bold tracking-wide uppercase">
              My Education
            </h2>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative border-l border-slate-200 ml-20 md:ml-32  pl-10 md:pl-12 space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-13.25 top-1.5 bg-indigo-600 rounded-full w-3 h-3 border-4 border-white ring-4 ring-indigo-100 transition-all group-hover:scale-110" />

                {/* Year Label (Positioned absolutely to the left of the timeline line) */}
                <div className="absolute -left-44 top-0.5 w-28 text-right text-indigo-400 font-semibold text-sm">
                  {item.year}
                </div>

                {/* Content Card */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-indigo-500">
                    {item.institution}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">
                    {item.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default About;
