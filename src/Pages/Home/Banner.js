import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  const navigate = useNavigate();
  const moreDetails = () => {
    navigate("/aboutMe");
  };
  
  return (
    <div className="hero min-h-screen bgBanner ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.ibb.co/B3C5XcV/diu.jpg"
            className="max-w-sm rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="profile"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:ml-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl text-accent font-bold"
          >
            HI!
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl text-accent font-bold"
          >
            I AM SOHANUR <br /> RAHMAN
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="typewriter"
          >
            <h1 className="text-[gray] text-xl mt-4">Full Stack Developer</h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm font-bold text-primary mt-8 mb-3"
          >
            Connect With Me
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex gap-3 footerIcon"
          >
            <a
              className="link p-2 hover:scale-110 transition-transform duration-300 link-hover border-2 rounded-full"
              href="https://www.facebook.com/SrSohan2748"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={20}
                src="https://i.ibb.co/7Sv45pg/facebook-circle.png"
                alt="facebook"
              />
            </a>
            <a
              className="link p-2 hover:scale-110 transition-transform duration-300 link-hover border-2 rounded-full"
              href="https://github.com/sohan284"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={22}
                src="https://i.ibb.co/8dQKqtG/68747470733a2f2f64617368626f6172642e736e617063726166742e696f2f736974655f6d656469612f6170706d65646961.png"
                alt="github"
              />
            </a>
            <a
              className="link p-2 hover:scale-110 transition-transform duration-300 link-hover border-2 rounded-full"
              href="https://www.linkedin.com/in/sr-sohan-1621a0199/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width={23}
                src="https://i.ibb.co/h1bwTJB/linked-in-icon-18.png"
                alt="linkedin"
              />
            </a>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            onClick={moreDetails}
            className="btn btn-primary mt-16 foot"
          >
            Explore more
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
