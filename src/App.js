import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import AboutMe from "./Pages/Home/AboutMe";
import MotoParts from "./Pages/DetailsProject/MotoParts";
import GroceryShop from "./Pages/DetailsProject/GroceryShop";
import PerfectCouple from "./Pages/DetailsProject/PerfectCouple";
import AsSunnah from "./Pages/DetailsProject/AsSunnah";
import Taskify from "./Pages/DetailsProject/Taskify";
import Pro44 from "./Pages/DetailsProject/44pro";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  // Add particle effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * window.innerWidth + "px";
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg mx-auto relative"
    >
      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      {/* Animated Background Shapes */}
      <div className="animated-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <Header />

      {/* Enhanced Cursor Animation */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
          border: "3px solid rgba(255, 69, 0, 0.5)",
          boxShadow:
            "0 0 15px rgba(255, 165, 0, 0.5), inset 0 0 15px rgba(255, 69, 0, 0.5)",
          animation: "flame 1s ease-in-out infinite alternate",
        }}
        innerStyle={{
          backgroundColor: "#ff4500",
          mixBlendMode: "exclusion",
          boxShadow: "0 0 10px #ff4500, 0 0 20px #ff4500, 0 0 30px #ff4500",
        }}
      />

      {/* Animated Route Transitions */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />
          {/* Apply similar animations to other routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/project5" element={<Taskify />} />
          <Route path="/project6" element={<Pro44 />} />
          <Route path="/project1" element={<MotoParts />} />
          <Route path="/project2" element={<GroceryShop />} />
          <Route path="/project3" element={<PerfectCouple />} />
          <Route path="/project4" element={<AsSunnah />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </motion.div>
  );
}

export default App;
