import React from 'react';

const Page1 = () => {
  return (
    <section className='max-w-full bg-[linear-gradient(180deg,_#FFEBD4_0%,_#976E6B_59%,_#A6BAF0_100%)]'>
    <div className=" p-6  max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-[50px] leading-[80px] items-center font-normal text-[#081356] mb-4">
      4. Le massage par pression de réflexologie

      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Text Description */}
        <div className="text-[#081356] text-[25px] leading-[30px] font-sans font-normal flex-1">
          <p className="mb-4">
          Les massages d'acupression sont basés sur les principes de la médecine traditionnelle chinoise et visent à libérer les blocages énergétiques dans le corps. En stimulant des points précis sur les méridiens, ces massages favorisent la circulation sanguine et lymphatique, améliorant ainsi la vitalité et le bien-être général.
          </p>
          <p className="mb-4">
          Parmi leurs vertus, ils aident à soulager le stress, l'anxiété et les tensions musculaires, tout en réduisant les douleurs chroniques, notamment au niveau des cervicales et du dos. L'acupression cible spécifiquement les zones de tension, offrant un soulagement efficace des douleurs dorsales et cervicales. De plus, elle peut renforcer le système immunitaire et améliorer la qualité du sommeil. En intégrant ce type de massage dans votre routine de soins, vous favorisez un équilibre harmonieux entre le corps et l'esprit.
          </p>
          
        </div>

        {/* Image and Call-to-Action */}
        <div className="relative">
          <img
            src="../src/assets/page-4.png" // Replace with your image path
            alt="Ayurvedic Massage"
            className="w-[368px] h-[276px] max-w-xs "
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
          className="inline-block  text-[#081356] mb-9  text-[20px] leading-[20.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)]  hover:bg-blue-200 transition-colors"
        >
          Retour à la page principale
        </a>
      </div>
    </div>
    </section>
  );
};

export default Page1;
