import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../../../assets/brand-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4B70F5] to-[#2C418F] text-gray-200 py-12">
      {/* Main Content */}
      <div className="container mx-auto px-6">
        {/* Top Section with Logo, Links, and Install App */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 px-16">
          {/* Logo & About Section */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <img src={logo} alt="Hovertask Logo" className="w-36 mb-4" />
            <p className="text-sm leading-relaxed max-w-xs text-center md:text-left">
              Our mission is to create opportunities for people to earn daily
              income while helping businesses reach a wider audience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Marketplace", "About Us", "FAQ", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white hover:opacity-80 transition"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "Support"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white hover:opacity-80 transition"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Install App */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-4">
              Install Our App
            </h3>
            <div className="flex-col flex gap-4">
              <a href="#">
                <img
                  src="/assets/images/Apple.png"
                  alt="App Store"
                  className="h-10 hover:opacity-80 transition object-contain"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/images/Google.png"
                  alt="Google Play"
                  className="h-10 hover:opacity-80 transition object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section with Social Media and Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-12">
            {/* Copyright */}
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Hovertask. All rights reserved.
              Made by <span className="">Aloyzandra Nnawulezi</span>.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-6 text-2xl">
              <a href="#" className="hover:text-white transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-white transition">
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
