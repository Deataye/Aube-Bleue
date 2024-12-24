import React from 'react';
import PagePic2 from '../assets/page-2.svg';
const Page1 = () => {
  return (
    <section className='max-w-full  py-32 bg-[linear-gradient(180deg,_#E3AF92_0%,_#BD5637_43.5%,_#8B4F46_100%)]'>
    <div className=" p-6  max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-[50px] leading-[80px] py-10 text-center font-normal text-[#081356] mb-4">
      2. Le massage crânien

      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Text Description */}
        <div className="text-[#081356] text-[25px] leading-[30px] font-sans font-normal flex-1">
          <p className="mb-4">
          Les massages ayurvédiques, issus de la médecine traditionnelle indienne, sont conçus pour harmoniser le corps et l'esprit. En utilisant des huiles chaudes et des techniques de massages spécifiques, ceux-ci favorisent la circulation sanguine, éliminent les toxines du corps et réduisent le stress.
          </p>
          <p className="mb-4">
          Une des vertus majeures du massage ayurvédique est la capacité à améliorer la qualité du sommeil. En relaxant les muscles et en réduisant l'anxiété, il aide à atteindre un sommeil plus profond et réparateur. Il est également particulièrement efficace pour soulager les douleurs chroniques.
          </p>
          <p className="mb-8">
          En ciblant les zones de tension et en améliorant la circulation sanguine, ils peuvent réduire les inflammations et apaiser les douleurs musculaires et articulaires. En incorporant ces pratiques dans sa routine de soins, on peut réellement transformer la qualité de vie, en apportant légèreté et sérénité tout en allégeant les maux persistants.
          </p>
        </div>

        {/* Image and Call-to-Action */}
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${PagePic2})` }}
            className="w-[349px] h-[465px] max-w-xs "
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
