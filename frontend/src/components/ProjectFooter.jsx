import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      className="pt-10 border-t border-slate-200 bg-amber-50 dark:bg-slate-950 dark:border-slate-800 transition-colors duration-300"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold cinzel bg-linear-to-r from-black to-purple-700 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
              Paramasivan A
            </h2>

            <p className="mt-3 max-w-md text-slate-600 dark:text-slate-400 leading-7">
              Passionate Full Stack Developer building scalable, responsive, and
              user-centric web applications with clean code, modern
              technologies, and intuitive user experiences.
            </p>
          </div>

          {/* Right */}

          <div className="flex gap-5">
            <motion.a
              href="https://github.com/Paramasivan2005"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.15,
                y: -5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="dark:border-gray-600 dark:text-white w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300"
            >
              <FaGithub size={22} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/paramasivan-a-0736332bb/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.15,
                y: -5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="dark:border-gray-600 dark:text-white w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300"
            >
              <FaLinkedin size={22} />
            </motion.a>

            <motion.a
              href="mailto:paramasivan.codes@gmail.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.15,
                y: -5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="dark:border-gray-600 dark:text-white w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300"
            >
              <HiOutlineMail size={22} />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/shivaa_uniq/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.15,
                y: -5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="dark:border-gray-600 dark:text-white w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition duration-300"
            >
              <FaInstagram size={22} />
            </motion.a>
          </div>
        </div>

        {/* Bottom */}

        <div className="dark:border-gray-700 border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm dark:text-gray-400">
            © {new Date().getFullYear()} Paramasivan. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm dark:text-gray-400">
            Designed & Developed with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
