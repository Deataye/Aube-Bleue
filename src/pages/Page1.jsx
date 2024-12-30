import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PagePic1 from '../assets/page-1.jpg';

const Page1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const handleBackClick = () => {
    window.scrollTo(0, 0); // Scroll to the top before navigating
  };

  return (
    <section className="max-w-full py-32 px-4 bg-[linear-gradient(180deg,_#79A8B4_23%,_#4BA3B3_57.5%,_#E678C2_88%)]">
      <div className="lg:p-6 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="lg:text-[50px] text-[32px] leading-[41px] lg:leading-[80px] py-10 lg:text-center font-normal text-[#081356] mb-4">
          1. Le massage d’inspiration Ayurvédique
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Text Description */}
          <div className="text-[#081356] text-[20px] leading-[28px] lg:text-[25px] lg:leading-[30px] font-sans font-normal flex-1">
            <p className="mb-4">
              Les massages ayurvédiques, issus de la médecine traditionnelle indienne, sont conçus pour harmoniser le corps et l'esprit. En utilisant des huiles chaudes et des techniques spécifiques, ces massages favorisent la circulation, éliminent les toxines et apaisent le stress.
            </p>
            <p className="mb-4">
              Une des vertus majeures des massages ayurvédiques est leur capacité à améliorer la qualité du sommeil. En relaxant les muscles et en réduisant l’anxiété, ils aident à atteindre un sommeil plus profond et réparateur. De plus, ces massages aident à équilibrer les doshas, favorisant ainsi un bien-être global.
            </p>
            <p className="mb-8">
              Ils sont également particulièrement efficaces pour soulager les douleurs chroniques. En ciblant les zones de tension et en améliorant la circulation sanguine, ils permettent de réduire les inflammations et apaiser les douleurs musculaires et articulaires. En incorporant ces pratiques dans sa routine de soins, on peut réellement transformer la qualité de vie, en apportant légèreté et sérénité tout en allégeant les maux persistants.
            </p>
          </div>

          {/* Image and Call-to-Action */}
          <div className="relative mb-8">
            <div
              style={{ backgroundImage: `url(${PagePic1})` }}
              className="lg:w-[289px] w-[265px] h-[353px] lg:h-[385px] max-w-xs shadow-md"
            />
            <a
              href="#" // Replace with your link
              className="absolute hidden lg:block bottom-36 right-9 text-[#081356] bg-[#A8BDE5] text-[20px] leading-[20.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)] hover:bg-blue-600 transition-colors"
            >
              Réservez vos soins ici
            </a>
          </div>
        </div>

        {/* Back Button */}
        <div className="lg:mt-6 mt-16">
          <Link
            to="/"
            onClick={handleBackClick}
            className="inline-block text-[#081356] lg:mb-9 text-[20px] leading-[25.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)] hover:bg-blue-200 transition-colors"
          >
            Retour à la page principale
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page1;
