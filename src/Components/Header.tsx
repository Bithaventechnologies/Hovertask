import logo from "../assets/BRAND LOGO Landing page.svg";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-purple-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Hover Task Logo" className="w-24" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          {["Home", "Market Place", "About Us", "FAQ", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-gray-800 hover:text-blue-600 transition-all duration-300 text-lg font-medium"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Create Account Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300">
            Create Account
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 text-2xl"
          >
            {menuOpen ? <MdClose /> : <RiMenu2Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-50 py-6 bg-gradient-to-r from-blue-50 to-purple-100">
          <div className="flex flex-col items-center space-y-6">
            {["Home", "Market Place", "About Us", "FAQ", "Contact Us"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-all duration-300"
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300">
              Create Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
