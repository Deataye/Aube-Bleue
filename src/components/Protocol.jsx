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
    <section className="bg-gradient-to-b from-blue-200 to-purple-200 py-12 ">
      <div className="container mx-auto max-w-[1200px] px-2">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-[35px] lg:text-[60px] font-semi-bold leading-[55px] lg:leading-[80.49px] text-[#081356] ">
            Protocole
          </h2>
          <p className="text-[#081356] text-[17px] leading-[15px] lg:text-[30px] font-bold lg:leading-relaxed">
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
              <div className="text-[#081356]  text-[18px] lg:text-[25px] leading-[19px] lg:leading-relaxed font-semi-bold">
                {index + 1}.
              </div>

              {/* Details */}
              <div className="flex-1 text-left  md:text-left">
                <p className="text-[#081356]  text-[18px] leading-[19px] lg:text-[25px] lg:leading-relaxed font-semi-bold ">
                  {technique.title}
                </p>
                <button className="mt-2 px-4 py-1 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
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
