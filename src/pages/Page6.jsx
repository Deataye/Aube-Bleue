import React from 'react';
import { Link } from 'react-router-dom';
import PagePic6 from '../assets/page-6.svg';
const Page1 = () => {
  return (
    <section className='max-w-full px-4 py-32 bg-[linear-gradient(180deg,_#FFEFFD_14.5%,_#E29192_68%,_#3E3B72_100%)]'>
    <div className="lg:p-6 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="lg:text-[50px] text-[32px] leading-[41px] lg:leading-[80px] py-10 text-center font-normal text-[#081356] mb-4">
      6. Massage classique sportif: Libération tension musculaires  
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start  gap-6">
        {/* Text Description */}
        <div className="text-[#081356] text-[20px] leading-[28px] lg:text-[25px] lg:leading-[30px] font-sans font-normal flex-1">
          <p className="mb-4">
          Le massage sportif est une technique conçue pour prévenir et traiter les tensions musculaires, particulièrement chez les athlètes et les personnes actives. En utilisant des manœuvres spécifiques telles que les frictions, les pétrissages et les étirements, ce type de massage cible les groupes musculaires sollicités pendant l'effort physique.
          </p>
          <p className="mb-8">
          Ses bienfaits incluent la réduction des douleurs musculaires, l'amélioration de la flexibilité et l'accélération de la récupération après l'exercice.
          </p>
          
        </div>

        {/* Image and Call-to-Action */}
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${PagePic6})` }}
            className="lg:w-[289px] w-[265px] h-[353px] lg:h-[385px] max-w-xs "
          />
          <a
            href="#" // Replace with your link
            className="absolute hidden lg:block bottom-36 right-9  text-[#081356] bg-[#A8BDE5]     text-[20px] leading-[20.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)] hover:bg-blue-600 transition-colors"
          >
            Réservez vos soins ici
          </a>
        </div>
      </div>

      {/* Back Button */}
        <Link
          to="/"
          className="inline-block text-[#081356] lg:mb-9 text-[20px] leading-[25.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)] hover:bg-blue-200 transition-colors"
        >
          Retour à la page principale
        </Link>
    </div>
    </section>
  );
};

export default Page1;
