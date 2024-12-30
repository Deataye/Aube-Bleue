import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import PagePic5 from '../assets/page-5.svg';

const Page5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const handleBackClick = () => {
    window.scrollTo(0, 0); // Scroll to the top before navigating
  };

  return (
    <section className="max-w-full py-32 px-4 bg-[linear-gradient(180deg,_#FFEFFD_14.5%,_#E29192_68%,_#3E3B72_100%)]">
      <div className="lg:p-6 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="lg:text-[50px] text-[32px] leading-[41px] lg:leading-[80px] py-10 text-center font-normal text-[#081356] mb-4">
          5. Le massage énergétique guérissant Réalignements corps Âme Esprit
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Text Description */}
          <div className="text-[#081356] text-[20px] leading-[28px] lg:text-[25px] lg:leading-[30px] font-sans font-normal flex-1">
            <p className="mb-8">
              Les massages énergétiques sont des pratiques holistiques qui visent à rétablir l'harmonie entre le corps, l'âme et l'esprit. En utilisant des techniques variées comme le toucher doux, la pression et les mouvements fluides, ces massages permettent de libérer les blocages énergétiques et de favoriser une circulation harmonieuse de l'énergie vitale. Ils favorisent également un profond réalignement intérieur, permettant de reconnecter avec soi-même et de stimuler les processus de guérison.
            </p>
          </div>

          {/* Image and Call-to-Action */}
          <div className="relative mb-8">
            <div
              style={{ backgroundImage: `url(${PagePic5})` }}
              className="lg:w-[289px] w-[349px] h-[353px] lg:h-[356px] lg:max-w-xs"
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
        <Link
          to="/"
          onClick={handleBackClick}
          className="inline-block text-[#081356] lg:mb-9 text-[20px] leading-[25.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)] hover:bg-blue-200 transition-colors"
        >
          Retour à la page principale
        </Link>
      </div>
    </section>
  );
};

export default Page5;
