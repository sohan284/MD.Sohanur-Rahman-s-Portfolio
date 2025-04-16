import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code,
  LayoutTemplate,
  ServerCog,
  Globe,
  Sparkles,
  User,
  FileCode,
  Laptop,
  Database,
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  // Advanced card with hover effects
  const CardWithIcon = ({
    icon: Icon,
    title,
    description,
    skills,
    delay,
    iconBg,
  }) => (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
      className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02]"
    >
      {/* Background gradient blur effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

      <div className="relative flex h-full flex-col rounded-xl bg-gray-900/90 p-6 backdrop-blur-sm">
        <div className="mb-6 flex items-center">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg} shadow-lg`}
          >
            <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="ml-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-2xl font-bold text-transparent">
            {title}
          </h2>
        </div>

        <p className="mb-6 text-gray-300 leading-relaxed">{description}</p>

        <div className="mt-auto flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="group/badge inline-flex items-center rounded-full border border-gray-700 px-3 py-1 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-white"
            >
              <span className="mr-1 opacity-0 transition-all duration-300 group-hover/badge:opacity-100">
                #
              </span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const skillCards = [
    {
      icon: FileCode,
      title: "Frontend Foundations",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
      description:
        "I architect responsive web interfaces using semantic HTML5, modern CSS3 techniques, and vanilla JavaScript. My implementations feature cross-browser compatibility, performance optimization, and adherence to W3C standards while leveraging utility frameworks like Tailwind CSS for rapid development cycles.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "Responsive Design",
        "CSS Grid/Flexbox",
      ],
      delay: "0",
    },
    {
      icon: Laptop,
      title: "React Ecosystem Specialist",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-400",
      description:
        "I develop sophisticated single-page applications with React.js and Next.js, implementing context API and Redux for state management, custom hooks for logic separation, and performance optimization through code splitting and lazy loading. My interfaces feature pixel-perfect designs, accessibility compliance, and intuitive UX patterns.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux",
        "React Query",
        "Material UI",
        "Tailwind CSS",
        "ShadCN",
        "Ant Design",
        "Frontend Testing",
      ],
      delay: "100",
    },
    {
      icon: ServerCog,
      title: "Full Stack Development",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      description:
        "I engineer end-to-end solutions using the MERN stack with RESTful and GraphQL APIs. My backend implementations feature middleware authentication patterns using JWT, role-based access control systems, database optimization, and cloud deployment strategies. I've successfully integrated payment gateways and real-time features using WebSockets and Socket.io.",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "REST API Design",
        "GraphQL",
        "JWT",
        "Socket.io",
        "CI/CD",
        "Cloud Deployment",
      ],
      delay: "200",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black min-h-screen w-full overflow-hidden relative py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero section */}
        <div className="mb-20 text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="inline-block mx-auto mb-6"
          >
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Portfolio
            </span>
          </div>

          <h1
            data-aos="zoom-in"
            data-aos-duration="1200"
            className="relative inline-block text-5xl md:text-6xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full"></div>
          </h1>

          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="mx-auto max-w-3xl"
          >
            <div className="relative mb-12 mt-8 flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-500 rounded-full blur-sm"></div>
              <div className="relative flex items-center justify-center bg-gray-900 p-6 rounded-full">
                <User className="w-8 h-8 text-accent mr-3" />
                <p className="text-xl font-medium">
                  <span className="text-white">I'm </span>
                  <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent font-bold">
                    MD. Sohanur Rahman Sohan
                  </span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Based in Dhaka, Bangladesh, I bring{" "}
              <span className="text-accent font-semibold">
                2 years of comprehensive web development expertise
              </span>{" "}
              to the table, with a strong focus on modern JavaScript frameworks
              and full-stack implementation. I specialize in architecting
              performant, scalable applications that deliver exceptional user
              experiences through clean code practices, component-driven
              architecture, and industry-standard development workflows. My
              technical approach balances cutting-edge technologies with proven
              methodologies to create solutions that are both innovative and
              maintainable.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCards.map((card, index) => (
            <CardWithIcon
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              skills={card.skills}
              delay={card.delay}
              iconBg={card.iconBg}
            />
          ))}
        </div>

        {/* Call to action button */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="mt-16 text-center"
        >
          {/* <button
            onClick={() => navigate("/portfolio")}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-accent px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <Globe className="mr-2 h-5 w-5" />
            <span className="relative">View My Projects</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
