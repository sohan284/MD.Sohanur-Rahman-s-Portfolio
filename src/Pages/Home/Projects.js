import React, { useState } from "react";
import { motion } from "framer-motion";
import useProject from "../Shared/Hooks/useProject";
import ProjectOne from "./ProjectOne";

const Projects = () => {
  const [project] = useProject();
  const [hoveredId, setHoveredId] = useState(null);
  console.log(project);

  // Subtle background color transition effect for the entire section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Enhanced animation for section title
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative container min-h-screen mx-auto py-24 px-4 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Background gradient elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <motion.div
        variants={titleVariants}
        className="text-center mb-20 relative z-10"
      >
        <motion.h2
          className="text-accent text-xl mb-3 font-medium inline-block"
          whileHover={{ scale: 1.05, color: "#38bdf8" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          My Recent Work
        </motion.h2>
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
          Featured Projects
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Explore my latest projects showcasing my expertise in web development.
          Each project demonstrates my commitment to creating innovative
          solutions with clean code and exceptional user experiences.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
        {project.map((p, index) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: index * 0.15,
                },
              },
            }}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300 },
            }}
            onHoverStart={() => setHoveredId(p.id)}
            onHoverEnd={() => setHoveredId(null)}
            className="relative"
          >
            <motion.div
              animate={{
                boxShadow:
                  hoveredId === p.id
                    ? "0 22px 40px rgba(0, 0, 0, 0.3)"
                    : "0 10px 30px rgba(0, 0, 0, 0.15)",
              }}
              className="rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <ProjectOne project={p} isHovered={hoveredId === p.id} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating decoration */}
      <div className="hidden lg:block">
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 rounded-full border-2 border-accent opacity-30"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 left-10 w-4 h-4 bg-accent rounded-full opacity-40"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Projects;
