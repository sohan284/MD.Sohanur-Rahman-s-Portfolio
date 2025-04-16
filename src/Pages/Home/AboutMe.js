import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiMui,
  SiAntdesign,
  SiMongoose,
  SiReactquery,
  SiUptobox,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiQuillPenFill } from "react-icons/ri";
import { AiOutlineAreaChart } from "react-icons/ai";

// Optional: Import AOS if not already imported in your main file
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const AboutMe = () => {
  useEffect(() => {
    // Initialize AOS if needed
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  // Custom color scheme
  const colors = {
    darkNavy: "#0a192f",
    teal: "#1f4e57",
    purple: "#963ee8",
    lightNavy: "#112240",
    lightestNavy: "#233554",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    white: "#e6f1ff",
  };

  // Skill categories with updated percentages (80-95%)
  const frontendSkills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-400" />,
      percentage: 95,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-400" />,
      percentage: 93,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      percentage: 88,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="text-blue-400" />,
      percentage: 84,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-400" />,
      percentage: 92,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      percentage: 85,
    },
    {
      name: "Redux",
      icon: <SiRedux className="text-purple-400" />,
      percentage: 87,
    },
  ];

  const uiFrameworks = [
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-400" />,
      percentage: 91,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400" />,
      percentage: 94,
    },
    {
      name: "Material UI",
      icon: <SiMui className="text-blue-400" />,
      percentage: 88,
    },
    {
      name: "Ant Design",
      icon: <SiAntdesign className="text-blue-400" />,
      percentage: 85,
    },
    {
      name: "Daisy UI",
      icon: <SiUptobox className="text-indigo-400" />,
      percentage: 87,
    },
    {
      name: "Shadcn/UI",
      icon: <div className="text-white font-bold">S</div>,
      percentage: 83,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-400" />,
      percentage: 89,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400" />,
      percentage: 86,
    },
    {
      name: "Mongoose",
      icon: <SiMongoose className="text-red-400" />,
      percentage: 85,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-amber-400" />,
      percentage: 82,
    },
    {
      name: "Socket.io",
      icon: <SiSocketdotio className="text-white" />,
      percentage: 80,
    },
    {
      name: "NodeMailer",
      // Using a placeholder text icon as original has no icon
      icon: <span className="text-white font-bold">NM</span>,
      percentage: 84,
    },
    {
      name: "Multer",
      // Using a placeholder text icon as original has no icon
      icon: <span className="text-white font-bold">MT</span>,
      percentage: 81,
    },
  ];

  const toolsAndOthers = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-400" />,
      percentage: 88,
    },
    {
      name: "Apex Charts",
      icon: <AiOutlineAreaChart className="text-blue-400" />,
      percentage: 83,
    },
    {
      name: "React Quill",
      icon: <RiQuillPenFill className="text-green-400" />,
      percentage: 85,
    },
  ];

  return (
    <div
      className="relative py-20"
      style={{ backgroundColor: colors.darkNavy }}
    >
      {/* Background Elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{ backgroundColor: colors.purple }}
      ></div>
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        style={{ backgroundColor: colors.teal }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        style={{ backgroundColor: colors.purple }}
      ></div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* Profile Section */}
        <div
          className="mb-16 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500"
          data-aos="fade-up"
          style={{
            backgroundColor: colors.lightNavy,
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="relative">
            {/* Decorative Header */}
            <div
              className="h-24"
              style={{
                background: `linear-gradient(to right, ${colors.teal}, ${colors.purple})`,
              }}
            ></div>

            <div className="flex flex-col lg:flex-row items-center p-8 -mt-12">
              {/* Profile Image */}
              <div className="relative" data-aos="zoom-in" data-aos-delay="200">
                <div
                  className="w-48 h-48 rounded-full shadow-xl p-2"
                  style={{ backgroundColor: colors.lightestNavy }}
                >
                  <img
                    className="rounded-full h-full w-full object-cover transition-all duration-500 hover:scale-105"
                    src="https://i.ibb.co/wdKzct8/SrPhoto.jpg"
                    alt="Sohanur Rahman"
                  />
                </div>
                <div
                  className="absolute bottom-2 right-2 h-6 w-6 rounded-full border-4"
                  style={{
                    backgroundColor: "#4ade80",
                    borderColor: colors.lightestNavy,
                  }}
                ></div>
              </div>

              {/* Profile Info */}
              <div className="mt-8 lg:mt-5 lg:ml-10 text-center lg:text-left">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="300"
                  className="text-3xl md:text-4xl font-bold"
                  style={{
                    color: colors.lightestSlate,
                    background: `linear-gradient(to right, ${colors.teal}, ${colors.purple})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MD.Sohanur Rahman Sohan
                </h1>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="400"
                  className="text-xl md:text-2xl font-medium mt-2 mb-4"
                >
                  <span
                    className="inline-block px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(150, 62, 232, 0.2)",
                      color: colors.white,
                    }}
                  >
                    Full Stack Developer
                  </span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  style={{ color: colors.lightSlate }}
                >
                  I am a passionate full stack developer with 1.5 years of
                  experience, specializing in building dynamic and responsive
                  web applications. I graduated in 2022 from Daffodil
                  International University with a degree in Software
                  Engineering. My projects showcase a blend of front-end and
                  back-end technologies, demonstrating my ability to create
                  seamless user experiences and robust server-side solutions.
                </p>

                {/* Contact/Social Icons */}
                <div
                  className="flex justify-center lg:justify-start space-x-4 mt-6"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      backgroundColor: "rgba(150, 62, 232, 0.2)",
                      color: colors.lightestSlate,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      backgroundColor: "rgba(150, 62, 232, 0.2)",
                      color: colors.lightestSlate,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      backgroundColor: "rgba(150, 62, 232, 0.2)",
                      color: colors.lightestSlate,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section with Categories */}
        <div className="space-y-12">
          {/* Frontend Skills */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              backgroundColor: colors.lightNavy,
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="p-8">
              <h2 className="relative text-2xl font-bold text-center mb-12">
                <span
                  style={{
                    background: `linear-gradient(to right, ${colors.teal}, ${colors.purple})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Frontend Development
                </span>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${colors.teal}, ${colors.purple})`,
                  }}
                ></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frontendSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    data-aos="zoom-in-up"
                    data-aos-delay={50 * (index + 1)}
                  >
                    <div
                      className="relative overflow-hidden rounded-lg p-6 transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ backgroundColor: colors.lightestNavy }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-2xl mr-3">{skill.icon}</div>
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: colors.lightestSlate }}
                        >
                          {skill.name}
                        </h3>
                        <span
                          className="ml-auto font-semibold"
                          style={{ color: colors.purple }}
                        >
                          {skill.percentage}%
                        </span>
                      </div>

                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ backgroundColor: colors.darkNavy }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${skill.percentage}%`,
                            transitionDelay: "100ms",
                            background: `linear-gradient(to right, ${colors.teal}, ${colors.purple})`,
                          }}
                        ></div>
                      </div>

                      {/* Background design element */}
                      <div
                        className="absolute -right-2 -bottom-2 w-12 h-12 rounded-full opacity-40 transition-transform duration-500 ease-in-out group-hover:scale-[3] group-hover:opacity-30"
                        style={{ backgroundColor: colors.purple }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* UI Frameworks */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="150"
            style={{
              backgroundColor: colors.lightNavy,
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="p-8">
              <h2 className="relative text-2xl font-bold text-center mb-12">
                <span
                  style={{
                    background: `linear-gradient(to right, ${colors.purple}, ${colors.teal})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  UI Frameworks & Libraries
                </span>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${colors.purple}, ${colors.teal})`,
                  }}
                ></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uiFrameworks.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    data-aos="zoom-in-up"
                    data-aos-delay={50 * (index + 1)}
                  >
                    <div
                      className="relative overflow-hidden rounded-lg p-6 transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ backgroundColor: colors.lightestNavy }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-2xl mr-3">{skill.icon}</div>
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: colors.lightestSlate }}
                        >
                          {skill.name}
                        </h3>
                        <span
                          className="ml-auto font-semibold"
                          style={{ color: colors.purple }}
                        >
                          {skill.percentage}%
                        </span>
                      </div>

                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ backgroundColor: colors.darkNavy }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${skill.percentage}%`,
                            transitionDelay: "100ms",
                            background: `linear-gradient(to right, ${colors.purple}, ${colors.teal})`,
                          }}
                        ></div>
                      </div>

                      {/* Background design element */}
                      <div
                        className="absolute -right-2 -bottom-2 w-12 h-12 rounded-full opacity-40 transition-transform duration-500 ease-in-out group-hover:scale-[3] group-hover:opacity-30"
                        style={{ backgroundColor: colors.teal }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              backgroundColor: colors.lightNavy,
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="p-8">
              <h2 className="relative text-2xl font-bold text-center mb-12">
                <span
                  style={{
                    background: `linear-gradient(to right, ${colors.teal}, ${colors.purple})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Backend Development
                </span>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${colors.teal}, ${colors.purple})`,
                  }}
                ></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {backendSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    data-aos="zoom-in-up"
                    data-aos-delay={50 * (index + 1)}
                  >
                    <div
                      className="relative overflow-hidden rounded-lg p-6 transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ backgroundColor: colors.lightestNavy }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-2xl mr-3">{skill.icon}</div>
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: colors.lightestSlate }}
                        >
                          {skill.name}
                        </h3>
                        <span
                          className="ml-auto font-semibold"
                          style={{ color: colors.purple }}
                        >
                          {skill.percentage}%
                        </span>
                      </div>

                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ backgroundColor: colors.darkNavy }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${skill.percentage}%`,
                            transitionDelay: "100ms",
                            background: `linear-gradient(to right, ${colors.teal}, ${colors.purple})`,
                          }}
                        ></div>
                      </div>

                      {/* Background design element */}
                      <div
                        className="absolute -right-2 -bottom-2 w-12 h-12 rounded-full opacity-40 transition-transform duration-500 ease-in-out group-hover:scale-[3] group-hover:opacity-30"
                        style={{ backgroundColor: colors.purple }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools and Other Skills */}
          <div
            className="rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="250"
            style={{
              backgroundColor: colors.lightNavy,
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="p-8">
              <h2 className="relative text-2xl font-bold text-center mb-12">
                <span
                  style={{
                    background: `linear-gradient(to right, ${colors.purple}, ${colors.teal})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Tools & Utilities
                </span>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${colors.purple}, ${colors.teal})`,
                  }}
                ></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolsAndOthers.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    data-aos="zoom-in-up"
                    data-aos-delay={50 * (index + 1)}
                  >
                    <div
                      className="relative overflow-hidden rounded-lg p-6 transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ backgroundColor: colors.lightestNavy }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-2xl mr-3">{skill.icon}</div>
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: colors.lightestSlate }}
                        >
                          {skill.name}
                        </h3>
                        <span
                          className="ml-auto font-semibold"
                          style={{ color: colors.purple }}
                        >
                          {skill.percentage}%
                        </span>
                      </div>

                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ backgroundColor: colors.darkNavy }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${skill.percentage}%`,
                            transitionDelay: "100ms",
                            background: `linear-gradient(to right, ${colors.purple}, ${colors.teal})`,
                          }}
                        ></div>
                      </div>

                      {/* Background design element */}
                      <div
                        className="absolute -right-2 -bottom-2 w-12 h-12 rounded-full opacity-40 transition-transform duration-500 ease-in-out group-hover:scale-[3] group-hover:opacity-30"
                        style={{ backgroundColor: colors.teal }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div
            className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-500 hover:translate-y-[-5px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="py-10 px-8">
              <div className="text-center text-white">
                <h3 className="text-2xl font-medium mb-3">
                  Ready to Work Together?
                </h3>
                <p className="text-blue-100 max-w-2xl mx-auto">
                  I'm currently available for freelance projects and full-time
                  positions. Let's create something amazing together!
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-6 py-3 bg-white text-blue-700 rounded-full font-medium transition-all hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Contact Me
                  </button>
                  <button className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-full font-medium transition-all hover:bg-white hover:text-blue-700 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Schedule a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
