import React from 'react';
 
// Import your image assets
import Image1 from '../assets/services-1.jpg';
import Image2 from '../assets/services-2.jpg';
import Image3 from '../assets/services-3.jpg';
import Image4 from '../assets/services-4.jpg';
import Image5 from '../assets/services-5.jpg';
import Image6 from '../assets/services-6.jpg'; 
import Image7 from '../assets/services-7.jpg'; 




const Services = () => {
    return (
      <section className="bg-gradient-to-b from-blue-200 to-purple-200 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Title */}
          <h2 className="text-[60px] font-semi-bold leading-[80.49px]  text-[#081356] text-center mb-8">Services</h2>
  
          {/* Upper Section: Text and Single Image */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Left: Text */}
            <div className="md:w-1/2 text-blue-900">
              <p className=" text-[#081356] text-[20px] font-normal leading-[30px] mb-4">Mes services répondent à vos besoins de:</p>
              <ul className=" text-[#081356] text-[20px] font-normal leading-[30px] list-disc space-y-2 pl-6">
                <li>Harmonisation du corps, de l’âme et de l’esprit</li>
                <li>Avoir un bon ancrage</li>
                <li>Améliorer le sommeil</li>
                <li>Remonter son estime de soi</li>
                <li>Apaiser les angoisses</li>
                <li>Faire le plein d’énergies positives</li>
                <li>Dénouer les tensions musculaires en profondeur</li>
                <li>Drainage lymphatique</li>
              </ul>
            </div>
  
            {/* Right: Single Image */}
            <div className="md:w-1/2 flex justify-end">
              <div
                className="w-[240px] h-[333px] bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${Image1})` }}
              ></div>
            </div>
          </div>
  
          {/* Lower Section: Image Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div
              className="w-[240px] h-[333px]  bg-cover bg-center  shadow-md"
              style={{ backgroundImage: `url(${Image2})` }}
            ></div>
            <div
              className="w-[240px] h-[333px]  bg-cover bg-center  shadow-md"
              style={{ backgroundImage: `url(${Image3})` }}
            ></div>
            <div
              className="w-[240px] h-[333px]  bg-cover bg-center  shadow-md"
              style={{ backgroundImage: `url(${Image4})` }}
            ></div>
            <div
              className="w-[240px] h-[333px]  bg-cover bg-center  shadow-md"
              style={{ backgroundImage: `url(${Image5})` }}
            ></div>
            <div
              className="w-[240px] h-[333px]  bg-cover bg-center  shadow-md"
              style={{ backgroundImage: `url(${Image6})` }}
            ></div>
            <div
              className="w-[240px] h-[333px]  bg-cover bg-center  shadow-md"
              style={{ backgroundImage: `url(${Image7})` }}
            ></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;