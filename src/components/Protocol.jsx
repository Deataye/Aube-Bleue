import React from 'react';

// Importing images
import Image1 from '../assets/protocole-1.jpg';
import Image2 from '../assets/protocole-2.jpg';
import Image3 from '../assets/protocole-3.jpg';
import Image4 from '../assets/protocole-4.jpg';
import Image5 from '../assets/protocole-5.jpg';
import Image6 from '../assets/protocole-6.png';

const Protocol = () => {
  const techniques = [
    {
      title: "Le massage d’inspiration Ayurvédique",
      image: Image1,
    },
    {
      title: "Le massage crânien",
      image: Image2,
    },
    {
      title: "Le massage Kobido",
      image: Image3,
    },
    {
      title: "Le massage par pression de réflexologie",
      image: Image4,
    },
    {
      title: "Le massage énergétique guérissant Réalignements Corps Âme Esprit",
      image: Image5,
    },
    {
      title: "Le Massage classique sportif: Libération tensions musculaires",
      image: Image6,
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,_#C9A6D1_3%,_#91ACC9_38%,_#5E65E9_100%)] py-12 ">
      <div className="container mx-auto max-w-[1200px] px-2">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-[35px] lg:text-[70px] font-sans font-normal leading-[55px] lg:leading-[39px] text-[#081356] mb-5 ">
            Protocole
          </h2>
          <p className="text-[#081356] text-[17px] leading-[15px] lg:text-[25px] font-normal  lg:leading-[44px]">
            Association de six techniques
          </p>
        </div>

        {/* Techniques List */}
        <div className="space-y-8 ">
          {techniques.map((technique, index) => (
            <div
              key={index}
              className="flex flex-row items-start  md:items-start gap-2"
            >
              {/* Number */}
              <div className="text-[#081356]  text-[18px] lg:text-[40px] leading-[19px] lg:leading-[55px] font-normal font-sans">
                {index + 1}.
              </div>

              {/* Details */}
              <div className="flex-1 text-left  md:text-left">
                <p className="text-[#081356] mb-8 text-[18px] leading-[19px] lg:text-[40px] lg:leading-[55px] font-normal font-sans ">
                  {technique.title}
                </p>
                <button className="mt-2 px-4 py-1 text-[#081356] text-[20px]  lg:text-[25px] lg:leading-[46px] border border-[rgba(8,19,86,1)] font-normal font-sans rounded-full hover:bg-blue-900 hover:text-white transition">
                  + Plus de détails
                </button>
              </div>

              {/* Image */}
              <div
                className="w-[100px] h-[100px] lg:w-[141px] lg:h-[140px] rounded-full bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${technique.image})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protocol;
