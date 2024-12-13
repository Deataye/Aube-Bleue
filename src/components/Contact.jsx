import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-purple-200 py-10 px-4">
      <div className="container mx-auto px-4 md:px-8 max-w-[1170px] text-[#081356]">
        {/* Title */}
        <h2 className="text-4xl font-bold  text-center mb-10">Contact</h2>

        {/* Address and Hours */}
        <div className="text-lg leading-relaxed mb-8">
          <p className="font-semibold mb-4">Adresse</p>
          <p className="mb-6">4 RUE DU CARROZ, 1197 PRANGINS.</p>

          <p className="font-semibold mb-4">Heures d'ouvertures</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
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
          <p className="mb-6">
            Bonjour et bienvenue! Pour toutes vos questions ou urgences, n’hésitez pas à m’appeler au
            <span className="font-semibold"> +41 (0) 78 610 13 07</span>. Pour ce qui est des réservations, merci de
            réserver sur le lien « Réservez ici » ci-dessous.
          </p>
        </div>

        {/* Reservation Button */}
        <div className="text-center mb-6">
          <button className="bg-[#AFB4F2] hover:bg-blue-200 text-[#081356] text-lg font-semibold px-6 py-2 rounded-xl transition">
            Réservez vos soins ici
          </button>
        </div>

        {/* Footer */}
        <p className="text-center">
          Ce serait avec plaisir de vous écouter et vous aider à trouver l’expérience qui vous convient le mieux. <br />
          À très bientôt pour un moment de relaxation! <br />
          <span className="font-semibold">Servane Hurel</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
