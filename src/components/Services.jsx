import React from 'react';

// Import your image assets
import Image1 from '../assets/services-1.jpg';
import Image2 from '../assets/services-2.jpg';
import Image3 from '../assets/services-3.jpg';
import Image4 from '../assets/services-4.jpg';
import Image5 from '../assets/services-5.jpg';
import Image6 from '../assets/services-6.jpg';
import Image7 from '../assets/services-7.jpg';

const Services = ({id}) => {
  return (
    <section id={id} className="bg-[linear-gradient(180deg,_#C9A6D1_100%,_#91ACC9_3%,_#D3E3FE_38%)] py-12 px-4">
      <div className="container mx-auto max-w-[1300px]">
       

        {/* Title */}
        <h2 className="text-[60px] lg:text-[70px] font-normal font-sans leading-[68.99px] lg:leading-[80.49px] text-[#081356] text-center mb-8">
          Services
        </h2>

        {/* Upper Section: Text and Single Image */}
        <div className="flex flex-col-reverse md:flex-row items-center  gap-8 mb-12">
          {/* Left: Text */}
          <div className="md:w-1/2 px-6 lg:px-0 lg:pl-24 text-blue-900">
            <p className="text-[#081356] lg:text-[25px] text-[20px] font-sans font-normal lg:leading-[30px] leading-[28px] mb-4">
              Mes services répondent à vos besoins de:
            </p>
            <ul className="text-[#081356]   lg:text-[25px] text-[20px] font-sans font-normal lg:leading-[30px] leading-[28px] list-disc space-y-2 ">
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
          <div className=" hidden pl-60  lg:w-[505px] md:block   ">
            <div
              className="w-[270px] h-[365px]  bg-cover bg-center shadow-md"
              style={{ backgroundImage: `url(${Image1})` }}
            ></div>
          </div>
        </div>

        {/* Lower Section: Image Gallery */}
        <div className="grid grid-cols-3 overflow-hidden px-6   lg:px-12 gap-3   lg:gap-8 ">
          {[Image2, Image3, Image4, Image5, Image6, Image7].map((image, index) => (
            <div
              key={index}
              className="w-[95px] lg:w-[277px] h-[140px] lg:h-[386px] bg-cover bg-center shadow-md mx-auto"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
