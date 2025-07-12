import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  Palette,
  Globe,
  Settings,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Responsive, fast, and user-friendly solutions.",
      features: [
        "React/Next.js",
        "TypeScript",
        "REST APIs",
        "Performance Optimization",
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Responsive web applications that work seamlessly across all devices. Mobile-first approach ensures optimal user experience.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "Touch Optimization",
        "Cross-Platform",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust server-side solutions with Node.js, Express, and MongoDB. Scalable architecture with proper data management.",
      features: [
        "Node.js/Express",
        "MongoDB/PostgreSQL",
        "Authentication",
        "API Design",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description:
        "Deploy and maintain applications on cloud platforms. CI/CD pipelines for automated testing and deployment.",
      features: ["AWS/Vercel", "Docker", "CI/CD", "Monitoring"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description:
        "Implement security best practices and optimize performance for better user experience and SEO rankings.",
      features: [
        "SSL/HTTPS",
        "Data Encryption",
        "Performance Audit",
        "SEO Optimization",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and technical support to keep your application running smoothly.",
      features: [
        "Bug Fixes",
        "Feature Updates",
        "Performance Monitoring",
        "24/7 Support",
      ],
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[25%] right-[5%] w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[50%] left-[50%] w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
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
            <Settings className="w-4 h-4 mr-2" />
            What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services I Provide
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, I offer comprehensive web development
            services that help businesses establish a strong digital presence
            and achieve their goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
                {/* Background gradient blur effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-purple-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

                <div className="relative flex h-full flex-col rounded-xl bg-gray-900/90 p-6 backdrop-blur-sm">
                  {/* Icon */}
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon
                      className="h-8 w-8 text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your requirements and create something amazing
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
              >
                <Globe className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-gray-600 text-white font-medium transition-all duration-300 hover:border-accent hover:bg-accent/10"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
