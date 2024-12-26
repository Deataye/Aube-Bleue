import React from "react";

const Contact = ({id}) => {
  return (
    <section id={id} className=" py-12 px-10  ">
      <div className="container mx-auto px-4 md:px-8 max-w-[1170px] text-[#081356]">
        {/* Title */}
        <h2 className="text-[60px] lg:text-[70px] font-normal leading-[68.99px] lg:leading-[80.49px]  text-center mb-10">Contact</h2>

        {/* Address and Hours */}
        <div className=" ">
          <p className="font-bold font-sans text-[20px] leading-[25px] lg:text-[25px] lg:leading-[30px]  mb-4">Adresse</p>
          <p className="mb-6 font-sans font-normal text-[20px] leading-[25px]  lg:text-[25px] lg:leading-[30px]  ">4 RUE DU CARROZ, 1197 PRANGINS.</p>

          <p className="font-bold font-sans text-[20px] leading-[25px] lg:text-[25px] lg:leading-[30px] mb-4">Heures d'ouvertures</p>
          <div className="grid lg:grid-cols-1 font-sans font-normal text-[20px] leading-[25px]  lg:text-[25px] lg:leading-[30px]   gap-x-4 gap-y-2 mb-8">
            <p>Lundi:</p>
            <p>10:00 - 12:00 et 18:00 - 20:00</p>
            <p>Mardi:</p>
            <p>10:00 - 12:00 et 18:00 - 20:00</p>
            <p>Mercredi:</p>
            <p>10:00 - 12:00 et 18:00 - 20:00</p>
            <p>Jeudi:</p>
            <p>10:00 - 12:00 et 18:00 - 20:00</p>
            <p>Vendredi:</p>
            <p>10:00 - 12:00 et 18:00 - 20:00</p>
            <p>Samedi:</p>
            <p>10:00 - 12:00 et 13:00 - 16:00</p>
            <p>Dimanche:</p>
            <p>11:00 - 13:00 et 14:00 - 18:00</p>
          </div>

          {/* Description */}
          <p className="mb-6 font-sans font-normal text-[20px] leading-[25px]  lg:text-[25px] lg:leading-[30px] ">
            Bonjour et bienvenue! Pour toutes vos questions ou urgences, n’hésitez pas à m’appeler au
            <span className="font-sans font-normal text-[20px] leading-[25px] underline lg:text-[25px] lg:leading-[30px] "> +41 (0) 78 610 13 07</span>. Pour ce qui est des réservations, merci de
            réserver sur le lien « Réservez ici » ci-dessous.
          </p>
        </div>

        {/* Reservation Button */}
        <div className="text-left  mb-6">
          
          <button className="bg-[#B5B5F2] hover:bg-blue-200 text-[#081356] text-[15px] leading-[16px] lg:text-[30px] lg:leading-[34.5px] font-semibold px-6 py-2 rounded-3xl border border-[rgba(8,19,86,1)] transition">
            Réservez vos soins ici
          </button>
        </div>

        {/* Footer */}
        <p className="text-left font-sans font-normal text-[20px] leading-[25px]  lg:text-[25px] lg:leading-[30px]  ">
          Ce serait avec plaisir de vous écouter et vous aider à trouver l’expérience qui vous convient le mieux. <br />
          À très bientôt pour un moment de relaxation! <br />
          <span className="font-sans font-normal text-[20px] leading-[60px]   lg:text-[25px] lg:leading-[30px] ">Servane Hurel</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
