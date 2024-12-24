import React, { useState, useEffect } from 'react';

 import { Link } from 'react-scroll';
//  import { Link } from 'react-router-dom';

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
      className={`absolute top-0 left-0 w-full  z-50 transition-all duration-300 `}
    >
      <div className="flex justify-between items-center px-6 py-4 overflow-hidden">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="../src/assets/logo.svg" // Replace with your logo path
            alt="Aube Bleue Logo"
            className="h-[107px] w-[107px]"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-24 px-20  text-[#081356]  text-base lg:text-[25px] lg:leading-[28.75px] font-normal">
          <li className="hover:text-blue-300 transition-colors">
          <Link to='apropos' smooth={true} offset={-100} duration={500} >APropos</Link>
          </li>
          <li className="hover:text-blue-300 transition-colors">
          <Link to='services' smooth={true} offset={-100} duration={500} >Services</Link>
          </li>
          <li className="hover:text-blue-300 transition-colors">
          <Link to='tarifs' smooth={true} offset={-100} duration={500} >Tarifs</Link>
          </li>
          <li className="hover:text-blue-300 transition-colors">
          <Link to='contact' smooth={true} offset={-100} duration={500} >Contact</Link>
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
            <Link to='apropos' smooth={true} offset={0} duration={500} onClick={() => setIsMenuOpen(false)} >APropos</Link>
            </li>
            <li className="hover:text-blue-300 transition-colors">
            <Link to='services' smooth={true} offset={-50} duration={500} onClick={() => setIsMenuOpen(false)} >Services</Link>
                
              
            </li>
            <li className="hover:text-blue-300 transition-colors">
            <Link to='tarifs' smooth={true} offset={-50} duration={500} onClick={() => setIsMenuOpen(false)} >Tarifs</Link>
             
              
            </li>
            <li className="hover:text-blue-300 transition-colors">
             <Link to='contact' smooth={true} offset={-50} duration={500} onClick={() => setIsMenuOpen(false)} >Contact</Link>
              
            
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
