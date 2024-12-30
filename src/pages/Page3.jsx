import React, { useEffect } from 'react'; // Added useEffect import
import { Link } from 'react-router-dom';
import PagePic3 from '../assets/page-3.svg';

const Page3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <section className="max-w-full py-32 px-4 bg-[linear-gradient(180deg,_#FFEFFD_14.5%,_#E29192_68%,_#3E3B72_100%)]">
      <div className="lg:p-6 max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="lg:text-[50px] text-[32px] leading-[41px] lg:leading-[80px] py-10 text-center font-normal text-[#081356] mb-4">
          3. Le massage Kobido
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Text Description */}
          <div className="text-[#081356] text-[20px] leading-[28px] lg:text-[25px] lg:leading-[30px] font-sans font-normal flex-1">
            <p className="mb-4">
              Le massage Kobido, souvent qualifié de "lifting naturel", est une technique japonaise qui combine des manœuvres de massage traditionnel et des techniques de stimulation faciale. Parmi ses nombreuses vertus, il améliore la circulation sanguine, favorisant ainsi l’éclat de la peau et l’élimination des toxines.
            </p>
            <p className="mb-8">
              Ce massage stimule également la production de collagène, ce qui aide à raffermir la peau et à réduire l’apparence des rides. En relâchant les tensions musculaires du visage, il contribue à atténuer les signes de fatigue. De plus, le Kobido procure une profonde relaxation, aidant à diminuer le stress et à améliorer le bien-être général. En intégrant le massage Kobido dans votre routine de soins, vous offrez à votre peau une cure de jouvence tout en vous offrant un moment de sérénité.
            </p>
          </div>

          {/* Image and Call-to-Action */}
          <div className="relative">
            <div
              style={{ backgroundImage: `url(${PagePic3})` }}
              className="lg:w-[289px] w-[333px] h-[333px] lg:h-[385px] max-w-xs"
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
          className="inline-block text-[#081356] lg:mb-9 text-[20px] leading-[25.5px] font-sans font-normal py-2 px-4 rounded-full border border-[rgba(8,19,86,1)] hover:bg-blue-200 transition-colors"
        >
          Retour à la page principale
        </Link>
      </div>
    </section>
  );
};

export default Page3;
