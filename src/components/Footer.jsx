import React from 'react'


const Footer = () => {
  return (
    <section className='bg-[#C7C3E0] w-full h-[182px] flex flex-row  '>
    <div className="    px-6 py-10 lg:py-16 lg:w-[1200px]   ">
        <p>Aube Bleue © 2024 – Tous droits réservés.</p>
        
    </div>
    <div className=" px-6 py-4 lg:py-6    overflow-hidden">
        {/* Logo */}
        <div className="">
          <img
            src="../src/assets/logo.svg" // Replace with your logo path
            alt="Aube Bleue Logo"
            className="h-[107px] w-[107px]"
          />
        </div>
      </div>
    </section>
  )
}


export default Footer
