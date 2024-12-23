import React from 'react';

const Page1 = () => {
  return (
    <section className='max-w-full bg-[linear-gradient(180deg,_#79A8B4_23%,_#4BA3B3_57.5%,_#E678C2_88%)]'>
    <div className="
     p-6  max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-[50px] leading-[80px] items-center font-normal text-[#081356] mb-4">
        1. Le massage d’inspiration Ayurvédique
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Text Description */}
        <div className="text-[#081356] text-[25px] leading-[30px] font-sans font-normal flex-1">
          <p className="mb-4">
            Les massages ayurvédiques, issus de la médecine traditionnelle indienne, sont conçus pour harmoniser le corps et l'esprit. En utilisant des huiles chaudes et des techniques spécifiques, ces massages favorisent la circulation, éliminent les toxines et apaisent le stress.
          </p>
          <p className="mb-4">
            Une des vertus majeures des massages ayurvédiques est leur capacité à améliorer la qualité du sommeil. En relaxant les muscles et en réduisant l’anxiété, ils aident à atteindre un sommeil plus profond et réparateur. De plus, ces massages aident à équilibrer les doshas, favorisant ainsi un bien-être global.
          </p>
          <p className="mb-4">
            Ils sont également particulièrement efficaces pour soulager les douleurs chroniques. En ciblant les zones de tension et en améliorant la circulation sanguine, ils permettent de réduire les inflammations et apaiser les douleurs musculaires et articulaires. En incorporant ces pratiques dans sa routine de soins, on peut réellement transformer la qualité de vie, en apportant légèreté et sérénité tout en allégeant les maux persistants.
          </p>
        </div>

        {/* Image and Call-to-Action */}
        <div className="relative">
          <img
            src="../src/assets/page-1.jpg" // Replace with your image path
            alt="Ayurvedic Massage"
            className="w-[289px] h-[385px] max-w-xs  shadow-md"
          />
          <a
            href="#" // Replace with your link
            className="absolute bottom-36 right-9  text-[#081356] bg-[#A8BDE5]     text-[20px] leading-[20.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)] hover:bg-blue-600 transition-colors"
          >
            Réservez vos soins ici
          </a>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <a
          href="#" // Replace with your link
          className="inline-block  text-[#081356] mb-9   text-[20px] leading-[20.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)]  hover:bg-blue-200 transition-colors"
        >
          Retour à la page principale
        </a>
      </div>
    </div>
    </section>
  );
};

export default Page1;
