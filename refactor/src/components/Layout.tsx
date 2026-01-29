import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: 100 }, // Start hidden and slightly below
    visible: { opacity: 1, x: 0 }, // Fully visible at original position
    slideOut: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-container">
        <Header />
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="slideOut"
            variants={variants}
            transition={{ duration: 1 }}
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              // justifyContent: "center",
              maxWidth: "960px",
              gap: "2rem",
              flexGrow: 1,
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
