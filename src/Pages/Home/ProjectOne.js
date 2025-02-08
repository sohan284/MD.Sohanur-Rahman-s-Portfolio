import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectOne = ({ project }) => {
  const { name, img, type, id } = project;
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="project-card"
    >
      <div className="relative group overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="relative h-64 overflow-hidden">
          <motion.img
            initial={{ scale: 1.2 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
            src={img[0]}
            alt={name}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
            <p className="text-accent mb-4">{type}</p>

            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/project${id}`)}
                className="px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors"
              >
                View Details
              </motion.button>

              <div className="flex space-x-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="text-gray-400 hover:text-accent"
                >
                  <i className="fab fa-github text-xl"></i>
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#"
                  className="text-gray-400 hover:text-accent"
                >
                  <i className="fas fa-external-link-alt text-xl"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectOne;
