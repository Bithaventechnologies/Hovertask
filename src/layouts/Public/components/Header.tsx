import logo from "../../../assets/brand-logo.svg";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLinks from "../lib/navLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const nav = useNavigate();

  return (
    <div className="header bg-white sticky top-0 w-full left-0 z-50  shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Hover Task Logo" className="w-24" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          role="navigation"
          className="hidden md:flex space-x-10 text-sm items-center"
        >
          {navLinks.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className={`${
                pathname === item.path
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              } transition-colors`}
            >
              {item.label}
              {pathname === item.path && (
                <span className="flex gap-1 justify-center max-w-[90%] mx-auto">
                  <span className="h-1 w-2 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full"></span>
                  <span className="h-1 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full flex-1"></span>
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Create Account Button */}
        <div className="hidden md:block">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300"
          >
            Create Account
          </Link>
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
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  nav(item.path);
                  setMenuOpen(false); // Close menu after navigation
                }}
                className="text-gray-800 hover:text-blue-600 text-lg font-medium transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                nav("/signup");
                setMenuOpen(false); // Close menu after clicking "Create Account"
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300"
            >
              Create Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
