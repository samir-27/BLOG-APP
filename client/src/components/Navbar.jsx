import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-500">
          <Link to="/">Brand</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-500 font-medium"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-gray-700 hover:text-indigo-500 font-medium"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-500 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-indigo-500 font-medium"
          >
            Contact
          </Link>
          <button className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/"
            className="block py-2 px-4 text-gray-700 hover:text-indigo-500"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block py-2 px-4 text-gray-700 hover:text-indigo-500"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-gray-700 hover:text-indigo-500"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-gray-700 hover:text-indigo-500"
          >
            Contact
          </Link>
          <button className="w-full py-2 mt-2 text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
