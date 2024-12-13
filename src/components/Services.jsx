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
      <div className="container mx-auto max-w-[1300px]">
        {/* Single Image (For mobile, displayed above heading) */}
        <div className="block  md:hidden mb-8">
          <div
            className="w-[270px] bg-black h-[365px] bg-cover bg-center shadow-md  mx-auto"
            style={{ backgroundImage: `url(${Image1})` }}
          ></div>
        </div>

        {/* Title */}
        <h2 className="text-[40px] md:text-[60px] font-semi-bold leading-[50px] md:leading-[80px] text-[#081356] text-center mb-8">
          Services
        </h2>

        {/* Upper Section: Text and Single Image */}
        <div className="flex flex-col-reverse md:flex-row items-center  gap-8 mb-12">
          {/* Left: Text */}
          <div className="md:w-1/2 px-20  text-blue-900">
            <p className="text-[#081356] text-[20px] font-normal leading-[30px] mb-4">
              Mes services répondent à vos besoins de:
            </p>
            <ul className="text-[#081356]   text-[20px] font-normal leading-[30px] list-disc space-y-2 pl-6">
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
          <div className=" hidden px-48 md:block   ">
            <div
              className="w-[270px] h-[365px] bg-cover bg-center shadow-md"
              style={{ backgroundImage: `url(${Image1})` }}
            ></div>
          </div>
        </div>

        {/* Lower Section: Image Gallery */}
        <div className="grid grid-cols-1 lg:px-44 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[Image2, Image3, Image4, Image5, Image6, Image7].map((image, index) => (
            <div
              key={index}
              className="w-[270px] h-[365px] bg-cover bg-center shadow-md mx-auto"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
