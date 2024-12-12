import React from 'react';
import AboutPic1 from '../assets/About-pic-1.jpg';
import AboutPic2 from '../assets/About-pic-2.jpg';
import AboutPic3 from '../assets/About-pic-3.jpg';

const APropos = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-purple-200 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#081356] text-center mb-8">
          À propos
        </h2>

        {/* Top Section: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-10">
          {/* Text Block */}
          <div className="md:w-1/2 text-[#081356] text-sm sm:text-base md:text-lg font-normal leading-relaxed text-center md:text-left">
            <p>
              Je m'appelle Servane, passionnée par l'harmonie entre le corps,
              l'âme et l'esprit. Mon approche des massages repose sur
              l'intuition et une solide expertise acquise à travers plusieurs
              formations et expériences dans le domaine du bien-être. Chaque
              séance est conçue pour favoriser votre alignement intérieur et
              vous reconnecter avec vous-même.
            </p>
          </div>

          {/* Single Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div
              className="w-full max-w-[240px] sm:max-w-[151px] h-auto aspect-[4/6] bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic1})` }}
            ></div>
          </div>
        </div>

        {/* Bottom Section: 2 Images Left, Text Right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
          {/* Images */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <div
              className="w-full max-w-[160px] sm:max-w-[200px] h-auto aspect-[4/6] bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic2})` }}
            ></div>
            <div
              className="w-full max-w-[160px] sm:max-w-[200px] h-auto aspect-[4/6] bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic3})` }}
            ></div>
          </div>

          {/* Text Block */}
          <div className="md:w-1/2 text-[#081356] text-sm sm:text-base md:text-lg font-normal leading-relaxed text-center md:text-left">
            <p className="mb-4">
              Formée dans diverses techniques de massage telles que: l'ayurveda,
              le kobido, le massage crânien, les points réflexes et énergétique.
              Je combine mes compétences professionnelles avec une profonde
              écoute du corps.
            </p>
            <p>
              Je crois fermement que le bien-être passe par un équilibre subtil
              entre le corps et l’esprit, et je m’efforce de guider chaque
              personne vers cette stabilité. Au cœur de mes soins se trouve
              l’ancrage : cette capacité à être pleinement présent dans son
              corps, à se sentir stable et aligné. Mon objectif est de vous
              offrir un moment où vous pouvez vous ressourcer, relâcher les
              tensions et vous recentrer pour mieux appréhender votre quotidien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;
