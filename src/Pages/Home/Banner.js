import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const navigate = useNavigate();
  const moreDetails = () => {
    navigate("/aboutMe");
  };

  return (
    <div className="hero min-h-screen bgBanner relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="code-rain"></div>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-8 z-10">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://i.ibb.co/B3C5XcV/diu.jpg"
            className="max-w-sm rounded-lg shadow-2xl hover:scale-105 transition-all duration-300"
            alt="profile"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-4 -right-4 bg-accent/80 backdrop-blur-sm text-white px-6 py-2 rounded-full"
          >
            <span className="animate-pulse">Available for Work</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:ml-20 max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="welcome-text"
          >
            <span className="text-xl text-accent">Welcome to my portfolio</span>
          </motion.div>

          <TypeAnimation
            sequence={[
              "I AM SOHANUR RAHMAN",
              1000,
              "FULL STACK DEVELOPER",
              1000,
              "WEB ARCHITECT",
              1000,
              "PROBLEM SOLVER",
              1000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl font-bold text-white my-4"
            repeat={Infinity}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="py-6 text-lg text-gray-300"
          >
            Transforming ideas into elegant digital solutions. With expertise in
            both frontend and backend development, I create seamless web
            experiences that combine beautiful design with powerful
            functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="stats-container glass p-6 rounded-lg mt-6 grid grid-cols-3 gap-4"
          >
            <div className="stat text-center">
              <div className="text-accent text-4xl font-bold">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="stat text-center">
              <div className="text-accent text-4xl font-bold">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="stat text-center">
              <div className="text-accent text-4xl font-bold">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 mt-8"
          >
            <button
              onClick={moreDetails}
              className="btn btn-accent hover:scale-105 transition-all duration-300"
            >
              Explore My Work
            </button>
            <a
              href="#contact"
              className="btn btn-outline btn-accent hover:scale-105 transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-8"
          >
            <p className="text-sm font-bold text-accent mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "JavaScript",
                "TypeScript",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="px-4 py-2 bg-accent/10 rounded-full text-accent text-sm hover:bg-accent/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
