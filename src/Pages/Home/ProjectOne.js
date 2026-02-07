import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectOne = ({ project, isHovered }) => {
  const { title, description, image, tags, github, live, features } = project;

  return (
    <div className="h-[400px] w-full" style={{ perspective: "1000px" }}>
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        initial={false}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full bg-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-1/2 overflow-hidden relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="p-4 flex flex-col flex-1 h-1/2">
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors line-clamp-1">
              {title}
            </h3>
            <div className="flex-1 overflow-hidden">
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-4 text-justify">
                {description}
              </p>
            </div>

            <div className="flex flex-nowrap gap-1 mt-2 overflow-hidden items-center">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[9px] bg-gray-700/50 text-accent px-2 py-0.5 rounded-full border border-gray-600/30 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full bg-gray-900 rounded-xl overflow-hidden shadow-xl flex flex-col border border-gray-700/50"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Image on Back Face as well for continuity */}
          <div className="h-1/2 overflow-hidden relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 bg-gray-900/60"></div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-900 to-transparent">
              <h3 className="text-xl font-bold text-white text-center">
                Key Features
              </h3>
            </div>
          </div>

          <div className="p-4 flex flex-col flex-1 h-1/2">
            <ul className="space-y-1.5 pl-2 flex-1 overflow-y-auto custom-scrollbar">
              {features && features.map((feature, index) => (
                <li key={index} className="text-gray-300 text-xs flex items-start gap-1.5 leading-tight">
                  <span className="text-accent mt-0.5 text-[10px]">▹</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-center gap-4 pt-3 border-t border-gray-700">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-accent transition-colors group text-sm"
                >
                  <div className="p-1.5 bg-gray-800 rounded-full group-hover:bg-accent/20 transition-colors">
                    <FaGithub size={16} />
                  </div>
                  <span className="font-medium">Code</span>
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-accent transition-colors group text-sm"
                >
                  <div className="p-1.5 bg-gray-800 rounded-full group-hover:bg-accent/20 transition-colors">
                    <FaExternalLinkAlt size={14} />
                  </div>
                  <span className="font-medium">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectOne;
