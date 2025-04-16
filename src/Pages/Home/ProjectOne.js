import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectOne = ({ project, isHovered }) => {
  const { title, description, image, tags, github, live } = project;

  return (
    <div className="h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-xl">
        <motion.img
          src={image}
          alt={title}
          className="w-full aspect-video object-cover object-top"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay that appears on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end justify-between p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-3">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-white hover:text-accent transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: "#111827" }}
              >
                <FaGithub size={20} />
              </motion.a>
            )}

            {live && (
              <motion.a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full text-white hover:text-accent transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: "#111827" }}
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
              whileHover={{
                backgroundColor: "rgba(56, 189, 248, 0.2)",
                color: "#38bdf8",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
