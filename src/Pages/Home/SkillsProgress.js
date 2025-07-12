import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Database,
  Palette,
  Cloud,
  Smartphone,
  Zap,
  Globe,
  Shield,
} from "lucide-react";

const SkillsProgress = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", percentage: 95 },
        { name: "Next.js", percentage: 90 },
        { name: "TypeScript", percentage: 85 },
        { name: "Tailwind CSS", percentage: 95 },
        { name: "JavaScript", percentage: 98 },
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      category: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", percentage: 90 },
        { name: "Express.js", percentage: 88 },
        { name: "MongoDB", percentage: 85 },
        { name: "REST APIs", percentage: 92 },
        { name: "GraphQL", percentage: 80 },
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      category: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Responsive Design", percentage: 95 },
        { name: "Material UI", percentage: 90 },
        { name: "Ant Design", percentage: 85 },
        { name: "Figma", percentage: 80 },
        { name: "User Experience", percentage: 88 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "DevOps & Tools",
      icon: Cloud,
      skills: [
        { name: "Git & GitHub", percentage: 92 },
        { name: "Vercel Deployment", percentage: 90 },
        { name: "Firebase", percentage: 85 },
        { name: "Docker", percentage: 75 },
        { name: "CI/CD", percentage: 80 },
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ProgressBar = ({ percentage, name }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          setWidth(percentage);
        }, 500);
        return () => clearTimeout(timer);
      }
    }, [isInView, percentage]);

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-300">{name}</span>
          <span className="text-sm font-bold text-accent">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${percentage}%` : 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] right-[5%] w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Proficiency
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My technical skills span across the full development stack, from
            frontend frameworks to backend systems and deployment. Here's a
            breakdown of my expertise levels.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {skills.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
                  {/* Background gradient blur effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-purple-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

                  <div className="relative flex h-full flex-col rounded-xl bg-gray-900/90 p-6 backdrop-blur-sm">
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} shadow-lg mr-4`}
                      >
                        <category.icon
                          className="h-6 w-6 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                        {category.category}
                      </h3>
                    </div>

                    {/* Skills Progress */}
                    <div className="flex-grow">
                      {category.skills.map((skill, skillIndex) => (
                        <ProgressBar
                          key={skillIndex}
                          name={skill.name}
                          percentage={skill.percentage}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Additional Skills & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Redux",
                "React Query",
                "Socket.io",
                "JWT",
                "Mongoose",
                "PostgreSQL",
                "AWS",
                "Docker",
                "Jest",
                "Cypress",
                "Webpack",
                "Babel",
                "SASS",
                "Styled Components",
                "Framer Motion",
                "Three.js",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsProgress;
