import React from 'react';
import AboutPic1 from '../assets/About-pic-1.jpg';
import AboutPic2 from '../assets/About-pic-2.jpg';
import AboutPic3 from '../assets/About-pic-3.jpg';
import Image1 from '../assets/services-1.jpg';

const APropos = ({id}) => {
  return (
    <>
    <section id={id} className="hidden lg:block bg-[linear-gradient(180deg,_#91ACC9_3%,_#D3E3FE_38%,_#C9A6D1_100%)] py-12">
      <div className="container mx-auto   lg:px-16 max-w-[1280px] " >
        {/* Title */}
        <h2 className=" text-[35px] lg:text-[70px] font-sans font-normal leading-[55px] lg:leading-[80.49px]     text-[#081356] text-center mb-8">
          À propos
        </h2>

        {/* Top Section: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-10">
          {/* Text Block */}
          <div className=" text-[#081356] lg:px-10 px-4 lg:text-[25px] text-[15px]  font-sans font-normal lg:leading-[30px] text-centre md:text-left">
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
          <div className=" flex  px-16  md:justify-end">
            <div
              className="w-[240px] h-[333px] justify-end bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic1})` }}
            ></div>
          </div>
        </div>

        {/* Bottom Section: 2 Images Left, Text Right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
          {/* Images */}
          <div className="flex flex-col gap-4 px-8    ">
            <div
              className="w-[239px] h-[327px]   bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic2})` }}
            ></div>
            <div
              className=" w-[239px] h-[278px] bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic3})` }}
            ></div>
          </div>

          {/* Text Block */} 
          <div className=" text-[#081356] lg:px-16  px-4  lg:text-[25px] text-[15px]  font-sans font-normal leading-relaxed lg:leading-[30px] ">
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
    <section id={id} className='lg:hidden bg-[linear-gradient(180deg,_#91ACC9_3%,_#D3E3FE_38%,_#C9A6D1_100%)] py-12'>
       <div className='container mx-auto   lg:px-18 max-w-[1280px]'>
        <h1 className='text-[35px] font-semi-bold leading-[55px]     text-[#081356] text-center mb-8'>À propos</h1>
        <div className="  items-center gap-6 ">
          {/* Text Block */}
          <div className=" text-[#081356]  px-6  text-[15px]  font-sans font-normal   mb-8">
            <p>
              Je m'appelle Servane, passionnée par l'harmonie entre le corps,
              l'âme et l'esprit. Mon approche des massages repose sur
              l'intuition et une solide expertise acquise à travers plusieurs
              formations et expériences dans le domaine du bien-être. Chaque
              séance est conçue pour favoriser votre alignement intérieur et
              vous reconnecter avec vous-même.
            </p>
          </div>
        
        <div className="flex flex-row items-center gap-4 px-8  mb-8  ">
            <div
              className="w-[151px] h-[210px]   bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic1})` }}
            ></div>
            <div
              className=" w-[173px] h-[204px] bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic3})` }}
            ></div>
           </div>
           <div className=" text-[#081356]   px-6   text-[15px]  font-sans font-normal leading-relaxed mb-8  ">
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
          <div className="flex flex-row items-center gap-4 px-8    ">
            <div
              className="w-[149px] h-[204px]   bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutPic2})` }}
            ></div>
            <div
              className=" w-[151px] h-[204px] bg-cover bg-center"
              style={{ backgroundImage: `url(${Image1})` }}
            ></div>
           </div>
        </div>  
       </div>
    </section>
    </>
  );
};

export default APropos;
