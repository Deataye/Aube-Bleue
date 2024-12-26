import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../assets/protocole-1.jpg';
import Image2 from '../assets/protocole-2.jpg';
import Image3 from '../assets/protocole-3.jpg';
import Image4 from '../assets/protocole-4.jpg';
import Image5 from '../assets/protocole-5.jpg';
import Image6 from '../assets/protocole-6.png';

const Protocol = () => {
  const navigate = useNavigate();

  const techniques = [
    { title: "Le massage d’inspiration Ayurvédique", image: Image1, path: "/details/1" },
    { title: "Le massage crânien", image: Image2, path: "/details/2" },
    { title: "Le massage Kobido", image: Image3, path: "/details/3" },
    { title: "Le massage par pression de réflexologie", image: Image4, path: "/details/4" },
    { title: "Le massage énergétique guérissant Réalignements Corps Âme Esprit", image: Image5, path: "/details/5" },
    { title: "Le Massage classique sportif: Libération tensions musculaires", image: Image6, path: "/details/6" },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,_#C9A6D1_3%,_#91ACC9_38%,_#5E65E9_100%)] py-12">
      <div className="container mx-auto max-w-[1200px] px-2">
        <div className="text-center mb-8">
          <h2 className="text-[60px] lg:text-[70px] font-sans font-normal leading-[68.99px] lg:leading-[39px] text-[#081356] mb-5">
            Protocole
          </h2>
          <p className="text-[#081356] text-[20px] leading-[28px] lg:text-[25px]  font-sans font-bold lg:leading-[44px]">
            Association de six techniques
          </p>
        </div>

        <div className="space-y-8">
          {techniques.map((technique, index) => (
            <div key={index} className="flex flex-row items-start px-5 lg:px-0 gap-2">
              <div className="text-[#081356] text-[28px] leading-[33px] lg:text-[40px]  lg:leading-[55px] font-normal font-sans">
                {index + 1}.
              </div>
              <div className="flex-1  text-left">
                <p className="text-[#081356] lg:mb-8 text-[28px] leading-[33px] lg:text-[40px] lg:leading-[55px] font-normal font-sans">
                  {technique.title}
                </p>
                <button
                  onClick={() => navigate(technique.path)}
                  className="mt-2 px-4 py-1 text-[#081356] text-[20px] lg:text-[25px] lg:leading-[46px] border border-[rgba(8,19,86,1)] font-normal font-sans rounded-full hover:bg-blue-900 hover:text-white transition"
                >
                   → Plus de détails
                </button>
              </div>
              <div
                className="w-[100px] h-[100px] lg:w-[181px] lg:h-[180px] rounded-full bg-cover bg-center shadow-md"
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
