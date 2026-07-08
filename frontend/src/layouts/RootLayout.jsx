import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </motion.div>
  );
};

export default RootLayout;
