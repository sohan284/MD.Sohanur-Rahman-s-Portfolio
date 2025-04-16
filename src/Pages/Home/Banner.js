import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Globe, Sparkles, Code, ArrowRight, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const navigate = useNavigate();
  const particlesRef = useRef(null);

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });

    // Create particles after component mounts
    const createParticles = () => {
      if (!particlesRef.current) return;

      // Clear any existing particles first
      particlesRef.current.innerHTML = "";

      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Random size between 2-5px
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random opacity
        particle.style.opacity = Math.random() * 0.5;

        // Add animation
        particle.style.animation = `float ${
          Math.random() * 30 + 20
        }s ease-in-out infinite alternate`;

        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();

    // Cleanup function
    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = "";
      }
    };
  }, []);

  const moreDetails = () => {
    navigate("/aboutMe");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="background-effect">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-overlay"></div>

        {/* Particles container with ref */}
        <div className="particles" ref={particlesRef}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          {/* Profile image with animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-2/5"
          >
            <div className="relative">
              {/* Decorative gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-purple-500 rounded-2xl blur-sm"></div>

              <img
                src="https://i.ibb.co/B3C5XcV/diu.jpg"
                className="rounded-xl shadow-2xl hover:scale-105 transition-all duration-500 relative w-full max-w-md mx-auto"
                alt="profile"
              />
            </div>

            {/* Available for work badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 right-4 lg:-right-4 flex items-center gap-2 bg-gradient-to-r from-accent to-purple-600 text-white px-6 py-3 rounded-full shadow-lg"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span>Available for Work</span>
            </motion.div>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            {/* Welcome text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to my portfolio
            </motion.div>

            {/* Dynamic text animation */}
            <div className="mb-6">
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
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              Transforming ideas into elegant digital solutions. With expertise
              in both frontend and backend development, I create seamless web
              experiences that combine beautiful design with powerful
              functionality.
            </motion.p>

            {/* Stats section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm p-4 group hover:border-accent/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Call to action buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={moreDetails}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-accent px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <Globe className="mr-2 h-5 w-5" />
                <span className="relative">Explore My Work</span>
              </button>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-700 px-6 py-3 font-bold text-white transition-all duration-300 hover:border-accent focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <Phone className="mr-2 h-5 w-5" />
                <span className="relative">Let's Connect</span>
              </a>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <p className="inline-flex items-center text-sm font-bold text-accent mb-4">
                <Code className="w-4 h-4 mr-2" />
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Next JS",
                  "Redux",
                  "Node JS",
                  "MongoDB",
                  "Express",
                  "JavaScript",
                  "TypeScript",
                  "Material UI",
                  "Ant Design",
                  "Shad CN",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="group/badge px-4 py-2 border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-full text-gray-300 text-sm hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <span className="mr-1 opacity-0 transition-all duration-300 group-hover/badge:opacity-100">
                      #
                    </span>
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
