import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import smooth scrolling Link
import { Link as RouterLink } from 'react-router-dom'; // Import React Router Link
import Logo from '../assets/logo.svg';

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
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="flex justify-between items-center px-6 py-4 overflow-hidden">
        {/* Logo with homepage link */}
        <RouterLink to="/" className="flex items-center h-[107px] w-[107px]">
          <div
            style={{ backgroundImage: `url(${Logo})` }}
            className="h-full w-full bg-cover bg-center"
          ></div>
        </RouterLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-24 px-20 text-[#081356] text-base lg:text-[25px] lg:leading-[28.75px] font-normal">
          <li className="hover:text-blue-300 transition-colors">
            <ScrollLink to="apropos" smooth={true} offset={0} duration={500}>
              APropos
            </ScrollLink>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <ScrollLink to="services" smooth={true} offset={0} duration={500}>
              Services
            </ScrollLink>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <ScrollLink to="tarifs" smooth={true} offset={0} duration={500}>
              Tarifs
            </ScrollLink>
          </li>
          <li className="hover:text-blue-300 transition-colors">
            <ScrollLink to="contact" smooth={true} offset={0} duration={500}>
              Contact
            </ScrollLink>
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
        <div className="md:hidden bg-gray-900 text-white w-full text-base font-medium space-y-4 py-4 px-6">
          <ul className="space-y-4">
            <li className="hover:text-blue-300 transition-colors">
              <ScrollLink
                to="apropos"
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                APropos
              </ScrollLink>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <ScrollLink
                to="services"
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </ScrollLink>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <ScrollLink
                to="tarifs"
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </ScrollLink>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
