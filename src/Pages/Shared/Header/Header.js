import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Download, ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "py-5 bg-transparent"
      }`}
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="group relative flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent transition-all duration-300">
              SOHAN
            </span>
            <span className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-accent">
              <ChevronRight size={16} />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { path: "/home", label: "HOME" },
              { path: "/home#contact", label: "CONTACT", isHash: true },
              { path: "/blogs", label: "BLOGS" },
              { path: "/aboutme", label: "ABOUT" },
            ].map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                active={
                  item.isHash
                    ? location.hash === "#contact"
                    : isActive(item.path)
                }
                isHash={item.isHash}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/19PCXNKLW-y7rXLHlLP1VIN_PGcn-1IVr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative ml-4 px-5 py-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative flex items-center group-hover:text-accent transition-colors duration-300">
                <Download size={16} className="mr-2" />
                Resume
              </span>
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-accent" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 shadow-xl"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-1">
              {[
                { path: "/home", label: "HOME" },
                { path: "/home#contact", label: "CONTACT", isHash: true },
                { path: "/blogs", label: "BLOGS" },
                { path: "/aboutme", label: "ABOUT" },
              ].map((item) => (
                <MobileNavLink
                  key={item.label}
                  to={item.path}
                  active={
                    item.isHash
                      ? location.hash === "#contact"
                      : isActive(item.path)
                  }
                  isHash={item.isHash}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              ))}

              {/* Mobile Resume Button */}
              <a
                href="https://drive.google.com/file/d/19PCXNKLW-y7rXLHlLP1VIN_PGcn-1IVr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-accent to-purple-600 text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={16} className="mr-2" />
                Get Resume
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ children, to, active, isHash }) => {
  const Component = isHash ? "a" : Link;

  return (
    <Component
      to={to}
      href={isHash ? to : undefined}
      className={`relative px-4 py-2 font-medium text-sm transition-colors duration-300 ${
        active ? "text-accent" : "text-gray-300 hover:text-white"
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="navbar-indicator"
          className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
          style={{ borderRadius: 2 }}
        />
      )}
    </Component>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ children, to, active, isHash, onClick }) => {
  const Component = isHash ? "a" : Link;

  return (
    <Component
      to={to}
      href={isHash ? to : undefined}
      onClick={onClick}
      className={`px-4 py-3 flex items-center font-medium text-base rounded-lg transition-colors duration-300 ${
        active
          ? "bg-gray-800 text-accent"
          : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
      }`}
    >
      {children}
      {active && <span className="ml-auto text-accent">•</span>}
    </Component>
  );
};

export default Header;
