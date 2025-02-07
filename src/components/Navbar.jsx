import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="bg-orange-500 py-4">
        <h2 className="text-center text-white">
          Free Courses 🌟 Sale Ends Soon, Get It Now
          <i className="fa-solid fa-arrow-right-long"></i>
        </h2>
      </div>

      {/* Navbar with Fixed Position */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-20">
              <img src="/logo.png" alt="Logo" />

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/"
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    isActive("/")
                      ? "text-orange-500 bg-orange-100"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/our-course"
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    isActive("/our-course")
                      ? "text-orange-500 bg-orange-100"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  Courses
                </Link>
                <Link
                  to="/about-us"
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    isActive("/about-us")
                      ? "text-orange-500 bg-orange-100"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  to="/view-pricing"
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    isActive("/view-pricing")
                      ? "text-orange-500 bg-orange-100"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact-us"
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    isActive("/contact-us")
                      ? "text-orange-500 bg-orange-100"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/sign-up"
                className="text-gray-600 hover:text-orange-500"
              >
                Sign Up
              </Link>
              <Link
                to="/sign-in"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-orange-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <Link
              to="/"
              className={`block px-4 py-2 text-sm font-medium ${
                isActive("/")
                  ? "text-orange-500 bg-orange-100"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              Home
            </Link>
            <Link
              to="/our-course"
              className={`block px-4 py-2 text-sm font-medium ${
                isActive("/our-course")
                  ? "text-orange-500 bg-orange-100"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              Courses
            </Link>
            <Link
              to="/about-us"
              className={`block px-4 py-2 text-sm font-medium ${
                isActive("/about-us")
                  ? "text-orange-500 bg-orange-100"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/view-pricing"
              className={`block px-4 py-2 text-sm font-medium ${
                isActive("/view-pricing")
                  ? "text-orange-500 bg-orange-100"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/contact-us"
              className={`block px-4 py-2 text-sm font-medium ${
                isActive("/contact-us")
                  ? "text-orange-500 bg-orange-100"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              Contact
            </Link>
            <div className="border-t mt-2">
              <button className="block w-auto text-left px-4 py-2 text-gray-600 hover:text-orange-500">
                Sign Up
              </button>
              <button className="block w-auto text-left px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
    </>
  );
};

export default Navbar;
