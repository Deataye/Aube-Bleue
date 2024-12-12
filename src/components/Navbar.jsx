import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-900 text-white' : 'bg-transparent text-blue-900'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/path-to-your-logo.svg" // Replace with your logo path
            alt="Aube Bleue Logo"
            className="h-10"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li className="hover:text-blue-300 transition-colors">
            <a href="#about">À propos</a>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <a href="#pricing">Tarifs</a>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-gray-900 text-white text-lg font-semibold space-y-4 py-4 px-6">
          <li className="hover:text-blue-300 transition-colors">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              À propos
            </a>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
              Tarifs
            </a>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;