import React from 'react';
import  Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <section className='bg-[#C7C3E0] w-full h-[182px] flex justify-between items-center px-6'>
      <div className="flex items-center justify-start px-6 py-10 lg:py-16">
        <p>Aube Bleue © 2024 – Tous droits réservés.</p>
      </div>
      <div className="flex items-center justify-end px-6 py-4 lg:py-6">
        {/* Logo */}
        <div className="flex items-center h-[107px] w-[107px] "
                              style={{ backgroundImage: `url(${Logo})` }}>
                            
                 
                </div>
      </div>
    </section>
  );
};

export default Footer;
