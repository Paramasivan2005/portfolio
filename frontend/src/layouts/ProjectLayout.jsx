import React from "react";
import ProjectNavbar from "../components/ProjectNavbar";
import { Outlet } from "react-router-dom";
import ProjectFooter from "../components/ProjectFooter";
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
      <ProjectFooter />
    </motion.div>
  );
};

export default ProjectLayout;
