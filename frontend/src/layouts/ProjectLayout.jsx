import React from "react";
import ProjectNavbar from "../components/ProjectNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const ProjectLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      <ProjectNavbar />
      <Outlet />
      <Footer />
    </motion.div>
  );
};

export default ProjectLayout;
