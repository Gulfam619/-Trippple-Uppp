import { FaTwitter, FaDiscord, FaMedium } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/PNGs/EstromLogo.png";

const Footer = () => {
  return (
    <footer className="relative backdrop-blur-md">
      <div className="relative z-10 w-full md:w-[90%] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex-1 max-w-md">
            <h2 className="text-2xl font-bold text-white mb-4">
              {/* <span className="text-primary-blue">Estrom</span> Innovation */}
              <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" />
            </h2>
            <p className="text-primary-gray text-sm leading-relaxed">
              Empowering businesses with smart, scalable solutions and services
              to drive growth, foster innovation, and create lasting impact.
            </p>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex flex-wrap gap-8 text-sm">
            <a
              href="#portfolio"
              className="text-primary-gray hover:text-white transition-colors duration-200"
            >
              Portfolio
            </a>
            <Link
              to="/services"
              className="text-primary-gray hover:text-white transition-colors duration-200"
            >
              Services
            </Link>
            <a
              href="#faq"
              className="text-primary-gray hover:text-white transition-colors duration-200"
            >
              FAQ
            </a>
            <Link
              to="/contact-us"
              className="text-primary-gray hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent my-8"></div>

        {/* Bottom section - Copyright and social icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © Estrom Innovation. All rights reserved.
          </p>

          {/* Social media icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
              aria-label="Discord"
            >
              <FaDiscord />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
              aria-label="Medium"
            >
              <FaMedium />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
