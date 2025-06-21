import { motion } from "framer-motion";
import "boxicons/css/boxicons.min.css";
import { useState } from "react";

const Header = () => {
  //Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo Name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex justify-center items-center text-purple-800 font-bold text-xl mr-3">
            AD
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Alabi Dominion
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.7,
          }}
          className="hidden lg:flex justify-between space-x-8"
        >
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bx-landscape"></i>
              Home
            </div>

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bx-user-check"></i>
              About
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bxs-briefcase"></i>
              Projects
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bx-certification"></i>
              Experience
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bx-phone-call"></i>
              Contact
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </motion.nav>

        {/* Social icons - Desktop */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
            href="https://github.com/AlabiDominion"
          >
            <i class="bx bxl-github w-5 h-5 text-xl"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
            href="https://x.com/alabidominion?s=21"
          >
            <i class="bx bxl-twitter w-5 h-5 text-xl"></i>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300"
            href="https://www.linkedin.com/in/alabi-dominion-b58a85228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          >
            <i class="bx bxl-linkedin h-5 w-5 text-xl"></i>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            href="mailto:alabidominion@gmail.com"
          >
            <button type="button" className="headerBtn decoration-slice">
              <strong>Hire me</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="text-gray-300"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <i class="h-6 w-6 text-2xl bx bx-run"></i>
            ) : (
              <i class="h-6 w-6 text-2xl bx bx-menu-alt-right"></i>
            )}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bx-landscape"></i>
              Home
            </div>

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bx-user-check"></i>
              About
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bxs-briefcase"></i>
              Projects
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bx-certification"></i>
              Experience
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
            href="#"
          >
            <div className="flex gap-1 items-center">
              <i class="bx bx-phone-call"></i>
              Contact
            </div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className=" flex space-x-5">
            <a href="https://github.com/AlabiDominion">
              <i class="bx bxl-github w-5 h-5 text-gray-300 text-2xl"></i>
            </a>
            <a href="https://x.com/alabidominion?s=21">
              <i class="text-gray-300 bx bxl-twitter w-5 h-5 text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/alabi-dominion-b58a85228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <i class="bx bxl-linkedin w-5 h-5 text-gray-300 text-2xl"></i>
            </a>
          </div>
          <a className="decoration-slice" href="mailto:alabidominionAgmail.com">
            <button
              className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
            >
              Contact Me
            </button>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
