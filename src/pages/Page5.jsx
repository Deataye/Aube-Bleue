import React from 'react';
import PagePic5 from '../assets/page-5.svg';
const Page1 = () => {
  return (
    <section className='max-w-full py-32 bg-[linear-gradient(180deg,_#FFEFFD_14.5%,_#E29192_68%,_#3E3B72_100%)]'>
    <div className=" max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-[50px] leading-[80px] py-10 text-center font-normal text-[#081356] mb-4">
      5. Le massage énergétique guérissant Réaligrements corps Âme Esprit 

      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Text Description */}
        <div className="text-[#081356] text-[25px] leading-[30px] font-sans font-normal flex-1">
          <p className="mb-8">
          Les massages énergétiques sont des pratiques holistiques qui visent à rétablir l'harmonie entre le corps, l'âme et l'esprit. En utilisant des techniques variées comme le toucher doux, la pression et les mouvements fluides, ces massages permettent de libérer les blocages énergétiques et de favoriser une circulation harmonieuse de l'énergie vitale. Ils favorisent également un profond réalignement intérieur, permettant de reconnecter avec soi-même et de stimuler les processus de guérison.
          </p>
          
        </div>

        {/* Image and Call-to-Action */}
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${PagePic5})` }}
            className="w-[349px] h-[356px] max-w-xs"
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
