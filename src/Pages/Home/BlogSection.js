import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn how to structure large React applications using TypeScript, proper state management, and performance optimization techniques.",
      category: "React",
      readTime: "8 min read",
      date: "2024-01-15",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      tags: ["React", "TypeScript", "Performance"],
    },
    {
      id: 2,
      title: "Modern Backend Architecture with Node.js and MongoDB",
      excerpt:
        "Explore best practices for building robust backend systems using Node.js, Express, and MongoDB with proper error handling and security.",
      category: "Backend",
      readTime: "12 min read",
      date: "2024-01-10",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      tags: ["Node.js", "MongoDB", "Architecture"],
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox for Modern Layouts",
      excerpt:
        "A comprehensive guide to creating responsive and flexible layouts using CSS Grid and Flexbox with practical examples.",
      category: "CSS",
      readTime: "10 min read",
      date: "2024-01-05",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      tags: ["CSS", "Layout", "Responsive"],
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
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[25%] left-[15%] w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[10%] w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
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
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Blog Posts
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge and insights about web development, best
            practices, and the latest technologies.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-1 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
                {/* Background gradient blur effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/10 to-purple-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>

                <div className="relative flex h-full flex-col rounded-xl bg-gray-900/90 backdrop-blur-sm">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium border border-accent/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow p-6">
                    {/* Meta */}
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <div className="flex items-center mr-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-gray-800 text-xs text-gray-300 border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="mt-auto">
                      <button className="inline-flex items-center text-accent font-medium hover:text-white transition-colors duration-300 group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
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
              Want to Read More?
            </h3>
            <p className="text-gray-300 mb-6">
              Explore more articles about web development, programming tips, and
              industry insights.
            </p>
            <a
              href="/blogs"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-accent to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Posts
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
