import React, { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import Logo from "../assets/img/logo.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img className="w-[200px]" src={Logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 font-medium relative">
          {/* Resume */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-2 py-2 hover:text-indigo-600 transition">
              Resume
              <IoChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
            </button>

            <div className="absolute left-0 top-full bg-white border border-gray-100 shadow-lg rounded-b-xl p-6 w-[800px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform translate-y-0 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-3">Templates</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-indigo-500">Modern Resume</a></li>
                    <li><a href="#" className="hover:text-indigo-500">Creative Resume</a></li>
                    <li><a href="#" className="hover:text-indigo-500">Minimal Resume</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-3">Tools</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-indigo-500">Resume Builder</a></li>
                    <li><a href="#" className="hover:text-indigo-500">Resume Analyzer</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-3">Guides</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-indigo-500">Design Inspiration</a></li>
                    <li><a href="#" className="hover:text-indigo-500">Writing Tips</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CV */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-2 py-2 hover:text-indigo-600 transition">
              CV
              <IoChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
            </button>

            <div className="absolute left-0 top-full bg-white border border-gray-100 shadow-lg rounded-b-xl p-6 w-[800px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform translate-y-0 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-3">Formats</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-indigo-500">Academic CV</a></li>
                    <li><a href="#" className="hover:text-indigo-500">Professional CV</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-3">Examples</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-indigo-500">Fresher CV</a></li>
                    <li><a href="#" className="hover:text-indigo-500">One Page CV</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="group relative">
            <button className="flex items-center gap-1 px-2 py-2 hover:text-indigo-600 transition">
              Cover Letter
              <IoChevronDown
                className="transition-transform duration-300 group-hover:rotate-180"
                size={16}
              />
            </button>

            <div className="absolute left-0 top-full bg-white border border-gray-100 shadow-lg rounded-b-xl p-6 w-[700px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform translate-y-0 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-3">Templates</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-indigo-500">Simple</a></li>
                    <li><a href="#" className="hover:text-indigo-500">Creative</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600 mb-3">Tips</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-indigo-500">Structure</a></li>
                    <li><a href="#" className="hover:text-indigo-500">Common Mistakes</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-indigo-600 px-2 py-2 transition">Advice</a>
          <a href="#" className="hover:text-indigo-600 px-2 py-2 transition">Resources</a>
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#"
            className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 transition font-medium"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
          >
            Free Account
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col space-y-1.5"
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="hover:text-indigo-600 flex items-center justify-between">
              Resume <IoChevronDown size={16} />
            </a>
            <a href="#" className="hover:text-indigo-600 flex items-center justify-between">
              CV <IoChevronDown size={16} />
            </a>
            <a href="#" className="hover:text-indigo-600 flex items-center justify-between">
              Cover Letter <IoChevronDown size={16} />
            </a>
            <a href="#" className="hover:text-indigo-600">Advice</a>
            <a href="#" className="hover:text-indigo-600">Resources</a>
            <a
              href="#"
              className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg text-center hover:bg-indigo-50 transition"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-indigo-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-indigo-700 text-center"
            >
              Free Account
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
