import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold cinzel bg-linear-to-r from-black to-purple-700 bg-clip-text text-transparent">
              paramasivan a
            </h2>

            <p className="text-gray-500 mt-3 max-w-md">
              Passionate Full Stack Developer building scalable, responsive, and user-centric web applications with clean code, modern technologies, and intuitive user experiences.
            </p>

          </div>

          {/* Right */}

          <div className="flex gap-5">

            <a
              href="https://github.com/Paramasivan2005"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/paramasivan-a-0736332bb/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:paramasivan.codes@gmail.com"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300"
            >
              <HiOutlineMail size={22} />
            </a>

            <a
              href="https://www.instagram.com/shivaa_uniq/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300"
            >
              <FaInstagram size={22} />
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Paramasivan. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;