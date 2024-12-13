import React, { useState, useEffect } from 'react';
 import { Link } from 'react-scroll';

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 text-white shadow-lg' : 'bg-transparent text-blue-900'
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
        <ul className="hidden md:flex space-x-6 text-base lg:text-lg font-medium">
          <li className="hover:text-blue-300 transition-colors">
          <Link to='apropos' smooth={true} offset={0} duration={500} >APropos</Link>
          </li>
          <li className="hover:text-blue-300 transition-colors">
          <Link to='services' smooth={true} offset={0} duration={500} >Services</Link>
          </li>
          <li className="hover:text-blue-300 transition-colors">
          <Link to='tarifs' smooth={true} offset={0} duration={500} >Tarifs</Link>
          </li>
          <li className="hover:text-blue-300 transition-colors">
          <Link to='contact' smooth={true} offset={0} duration={500} >Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white text-base font-medium space-y-4 py-4 px-6">
          <ul className="space-y-4">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
