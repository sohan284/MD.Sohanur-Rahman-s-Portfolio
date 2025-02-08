import React from "react";
import { motion } from "framer-motion";
import useProject from "../Shared/Hooks/useProject";
import ProjectOne from "./ProjectOne";

const Projects = () => {
  const [project] = useProject();

  return (
    <div className="container min-h-screen mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-accent text-xl mb-3">My Recent Work</h2>
        <h1 className="text-4xl font-bold text-white mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my latest projects showcasing my expertise in web development.
          Each project demonstrates my commitment to creating innovative
          solutions with clean code and exceptional user experiences.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {project.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectOne project={p} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
