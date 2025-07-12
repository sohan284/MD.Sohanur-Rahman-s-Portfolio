import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X, ArrowUp } from "lucide-react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactOptions = [
    {
      icon: Phone,
      label: "Call",
      action: () => window.open("tel:+8801788175088", "_self"),
      color: "bg-green-500",
      delay: 0.1,
    },
    {
      icon: Mail,
      label: "Email",
      action: () => window.open("mailto:sr.sohan088@gmail.com", "_self"),
      color: "bg-blue-500",
      delay: 0.2,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/8801788175088", "_blank"),
      color: "bg-green-600",
      delay: 0.3,
    },
  ];

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Contact Options */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-16 right-0 space-y-3">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={option.label}
                  initial={{ opacity: 0, scale: 0, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: 20 }}
                  transition={{
                    delay: option.delay,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="flex items-center justify-end"
                >
                  <motion.button
                    onClick={option.action}
                    className={`${option.color} p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <option.icon className="w-5 h-5 text-white" />
                  </motion.button>
                  <span className="mr-3 text-sm font-medium text-white bg-gray-800 px-3 py-1 rounded-full shadow-lg">
                    {option.label}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={toggleMenu}
          className="relative w-14 h-14 bg-gradient-to-r from-accent to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-gray-800 hover:bg-accent rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-700 hover:border-accent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </>
  );
};

export default FloatingActionButton;
