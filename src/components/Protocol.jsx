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
    <section className="bg-gradient-to-b from-blue-200 to-purple-200 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-[60px] font-semi-bold leading-[80.49px]  text-[#081356] mb-2">Protocole</h2>
          <p className=" text-[#081356] text-[20px] font-normal leading-[30px]">Association de six techniques</p>
        </div>

        {/* Techniques List */}
        <div className="space-y-6">
          {techniques.map((technique, index) => (
            <div key={index} className="flex items-center gap-8">
              {/* Number */}
              <div className=" text-[#081356] text-[25px]  font-semi-bold leading-[30px]">{index + 1}.</div>

              {/* Details */}
              <div className="flex-1">
                <p className="  text-[#081356] text-[25px] font-semi-bold leading-[30px]">{technique.title}</p>
                <button className="mt-2 px-4 py-1 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
                  + Plus de détails
                </button>
              </div>

              {/* Image */}
              <div
                className="w-[141px] h-[140px] rounded-full bg-cover bg-center shadow-md"
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
