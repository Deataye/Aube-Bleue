import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNavigateAndScroll = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to the homepage first
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Adjust delay as needed
    } else {
      // Directly scroll if already on the homepage
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the menu for mobile
  };

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 transition-all duration-300`}>
      <div className="flex justify-between items-center px-6 py-4 overflow-hidden">
        {/* Logo with homepage link */}
        <div
          className="flex items-center h-[107px] w-[107px] cursor-pointer"
          onClick={() => navigate('/')}
          style={{ backgroundImage: `url(${Logo})`, backgroundSize: 'cover' }}
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-24 px-20 text-[#081356] text-base lg:text-[25px] lg:leading-[28.75px] font-normal">
          <li
            className="hover:text-blue-300 transition-colors cursor-pointer"
            onClick={() => handleNavigateAndScroll('apropos')}
          >
            APropos
          </li>
          <li
            className="hover:text-blue-300 transition-colors cursor-pointer"
            onClick={() => handleNavigateAndScroll('services')}
          >
            Services
          </li>
          <li
            className="hover:text-blue-300 transition-colors cursor-pointer"
            onClick={() => handleNavigateAndScroll('tarifs')}
          >
            Tarifs
          </li>
          <li
            className="hover:text-blue-300 transition-colors cursor-pointer"
            onClick={() => handleNavigateAndScroll('contact')}
          >
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        ><span>
          {isMenuOpen ? '✖' : '☰'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white w-full text-base font-medium space-y-4 py-4 px-6">
          <ul className="space-y-4">
            <li
              className="hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => handleNavigateAndScroll('apropos')}
            >
              APropos
            </li>
            <li
              className="hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => handleNavigateAndScroll('services')}
            >
              Services
            </li>
            <li
              className="hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => handleNavigateAndScroll('tarifs')}
            >
              Tarifs
            </li>
            <li
              className="hover:text-blue-300 transition-colors cursor-pointer"
              onClick={() => handleNavigateAndScroll('contact')}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
