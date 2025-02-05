import React from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutMe text-white bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="container mx-auto px-4">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-5xl font-extrabold text-center mb-16 uppercase text-accent border-x-4 border-accent py-4 max-w-3xl mx-auto"
          >
            About Me
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="py-8 text-xl max-w-3xl mx-auto leading-relaxed text-gray-300 text-center mb-16"
          >
            <span className="font-medium">
              Hello! I'm <span className="text-accent font-bold">MD. Sohanur Rahman Sohan</span>, from Dhaka, Bangladesh. <br className="md:block hidden" />
              I'm a junior full-stack developer with a passion for building
              web applications. I specialize in creating modern applications using
              React, Node.js, Express, and MongoDB.
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl px-4">
            {/* HTML/CSS Developer */}
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="card bg-gray-800/50 backdrop-blur hover:scale-105 transition transform duration-300 shadow-xl rounded-lg border border-gray-700 hover:border-accent"
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src="https://i.ibb.co/WyWz3Pw/png-clipart-website-development-javascript-html5-css3-cascading-style-sheets-html-logo-web-design-te.png"
                  alt="HTML CSS Developer"
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="text-2xl font-bold text-accent">Plain HTML CSS Developer</h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  I can build websites using Plain HTML, Vanilla CSS, and
                  JavaScript. I also work with frameworks like Bootstrap and
                  Tailwind CSS for responsive design.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">HTML</span>
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">CSS</span>
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">JavaScript</span>
                </div>
              </div>
            </div>

            {/* Front End Developer */}
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="card bg-gray-800/50 backdrop-blur hover:scale-105 transition transform duration-300 shadow-xl rounded-lg border border-gray-700 hover:border-accent"
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src="https://i.ibb.co/YRsm0pN/react-redux-firebase-removebg-preview.png"
                  alt="React Developer"
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="text-2xl font-bold text-accent">Front End Development</h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  I build responsive Single Page Applications (SPA) with React.js
                  and implement private & nested routing with Firebase Authentication.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">React JS</span>
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">Redux</span>
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">Firebase</span>
                </div>
              </div>
            </div>

            {/* Full Stack Developer */}
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              className="card bg-gray-800/50 backdrop-blur hover:scale-105 transition transform duration-300 shadow-xl rounded-lg border border-gray-700 hover:border-accent"
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src="https://i.ibb.co/s2H8Pfw/images-4-removebg-preview.png"
                  alt="Full Stack Developer"
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="text-2xl font-bold text-accent">Full Stack Developer</h2>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  I develop Full Stack Web Applications using React.js, Node.js,
                  Express.js, and MongoDB with user authentication features such as
                  JWT tokens and admin roles.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">Node.js</span>
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">Express</span>
                  <span className="badge badge-outline px-4 py-3 hover:bg-accent hover:text-white transition-colors">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
