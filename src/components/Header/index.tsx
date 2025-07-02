import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderNav } from "../../constants";
import DarkButton from "../DarkButton";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import Logo from "../../assets/PNGs/EstromLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (hash: string) => {
    navigate(hash);
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 bg-[#05071A]/60 py-4 z-50 backdrop-blur-md"
    >
      <div className="mx-auto flex items-center justify-between w-full px-2 md:w-[90%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl font-bold text-white"
        >
          <Link to="/">
            {" "}
            <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden space-x-8 md:flex"
        >
          {HeaderNav.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.link)}
              className="text-lg  tracking-wider text-primary-gray transition duration-300 hover:text-white cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="hidden md:block"
        >
          <DarkButton
            text={"Contact-Us"}
            onClick={() => navigate("/contact-us")}
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-white md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-y-0 left-0 z-50 w-[85%] h-[100vh] bg-[#071128] px-8 py-6 shadow-lg md:hidden"
          >
            <Link to="/">
              {" "}
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 rounded-full ml-5"
              />
            </Link>
            <nav className="space-y-4 px-8 py-4">
              {HeaderNav.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(link.link);
                    setMenuOpen(false);
                  }}
                  className="block w-fit text-left text-lg tracking-wider text-white transition duration-300 hover:text-gray-400 cursor-pointer z-50"
                >
                  {link.name}
                </button>
              ))}
              <DarkButton
                text={"Contact-Us"}
                onClick={() => navigate("/contact-us")}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
