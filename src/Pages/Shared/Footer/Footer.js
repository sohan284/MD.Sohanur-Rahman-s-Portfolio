import React from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUp,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#11293b] to-[#0a192f] text-white pt-16 pb-8 px-6 relative ">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 right-10 bg-accent hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="transition-all duration-500">
            <h2 className="font-bold text-2xl mb-4 text-purple-400 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-accent after:mt-1">
              About Me
            </h2>
            <h3 className="font-bold text-xl text-accent mb-3 hover:text-primary transition-colors duration-300">
              MD. Sohanur Rahman Sohan
            </h3>
            <p className="text-gray-300 mb-4">
              Passionate Junior Full Stack Developer focused on creating clean,
              user-friendly web solutions with modern technologies.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/sohan284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/sr-sohan-1621a0199/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.facebook.com/SrSohan2748"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div className="transition-all duration-500">
            <h2 className="font-bold text-2xl mb-4 text-purple-400 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-accent after:mt-1">
              Contact Info
            </h2>
            <div className="flex flex-col gap-4 text-gray-300">
              <div className="flex items-center group">
                <div className="mr-3 bg-gray-800 p-2 rounded-md group-hover:bg-accent transition-colors duration-300">
                  <PhoneCall
                    className="text-gray-300 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-medium text-gray-200 group-hover:text-accent transition-colors duration-300">
                    +8801788175088
                  </p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="mr-3 bg-gray-800 p-2 rounded-md group-hover:bg-accent transition-colors duration-300">
                  <Mail
                    className="text-gray-300 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium text-gray-200 group-hover:text-accent transition-colors duration-300">
                    sr.sohan088@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="mr-3 bg-gray-800 p-2 rounded-md group-hover:bg-accent transition-colors duration-300">
                  <MapPin
                    className="text-gray-300 group-hover:text-white"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-medium text-gray-200 group-hover:text-accent transition-colors duration-300">
                    Banasree, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="transition-all duration-500">
            <h2 className="font-bold text-2xl mb-4 text-purple-400 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-accent after:mt-1">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Projects",
                "Skills",
                "Experience",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2 text-accent">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="transition-all duration-500">
            <h2 className="font-bold text-2xl mb-4 text-purple-400 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-accent after:mt-1">
              Stay Connected
            </h2>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates on my latest projects and tech
              articles.
            </p>
            <form className="mt-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-primary text-white py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            &copy; {new Date().getFullYear()} Sohanur Rahman. All rights
            reserved.
          </div>
          <div className="mt-3 md:mt-0">
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300 mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
