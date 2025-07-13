import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "DR Moghazy",
      role: "Product Manager",
      company: "TechCorp Solutions",
      content:
        "Sohan delivered exceptional results on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Sana Sk",
      role: "Startup Founder",
      company: "InnovateLab",
      content:
        "Working with Sohan was a game-changer for our startup. He transformed our vision into a scalable web application that perfectly matches our brand. Highly recommended!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Praveen",
      role: "Marketing Director",
      company: "Digital Dynamics",
      content:
        "Sohan's technical skills are outstanding, but what really impressed me was his communication and project management. He kept us updated throughout the entire development process.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
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

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[5%] w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
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
            <Quote className="w-4 h-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about working together.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
                {/* Background gradient blur effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-purple-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

                <div className="relative flex h-full flex-col rounded-xl bg-gray-900/90 p-6 backdrop-blur-sm">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-accent/60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-accent/20"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-accent">
                        {testimonial.company}
                      </p>
                    </div>
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
          <p className="text-gray-300 mb-6">
            Ready to join the list of satisfied clients?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-accent to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
