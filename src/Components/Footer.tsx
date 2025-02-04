import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../assets/BRAND LOGO Landing page.svg"; // Update path
import appStore from "../assets/Apple.png";
import googlePlay from "../assets/Google.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4B70F5] to-[#2C418F] text-gray-200 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About Section */}
        <div>
          <img src={logo} alt="Hovertask Logo" className="w-36 mb-4" />
          <p className="text-sm leading-relaxed">
            Our mission is to create income opportunities for people to earn
            daily while helping businesses reach a wider audience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
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
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            {["Privacy Policy", "Terms & Conditions"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-white hover:opacity-80 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Install App */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Install Our App
          </h3>
          <div className="flex gap-4">
            <a href="#">
              <img
                src={appStore}
                alt="App Store"
                className="h-14 hover:opacity-80 transition object-contain"
              />
            </a>
            <a href="#">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-14 hover:opacity-80 transition object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12  pt-6 text-center">
        <div className="flex justify-center space-x-6 text-2xl">
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
        <p className="text-sm mt-4">
          &copy; {new Date().getFullYear()} Hovertask. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
