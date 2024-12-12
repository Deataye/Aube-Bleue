import React from 'react';

const Tarifs = () => {
  return (
    <section className="bg-gradient-to-b from-blue-200 to-purple-200 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <div className=" mb-8">
          <h2 className="text-center text-[60px] font-semi-bold leading-[80.49px]  text-[#081356] mb-4">Tarifs</h2>
          <p className="text-start text-[#081356] text-[17px] font-bold leading-[30px]">
            Le protocole est unique et associe 6 techniques en 1 prestation selon vos besoins en choisissant l'une de ces 4 formules:
          </p>
        </div>

        {/* Pricing Details */}
        <ul className="space-y-6 text-blue-900">
          {/* SHIVA */}
          <li>
            <p className="text-[23px] font-semi-bold leading-[25px]  text-[#081356]">SHIVA:</p>
            <p className="leading-relaxed text-[#081356]">
              Massage harmonisant 2h de détente magistrale : Ayurvédique, crânien, kobido, acupressure, musculaire, magnétisme
            </p>
            <p className="font-semibold text-[#081356] text-lg mt-1">200.-</p>
          </li>

          {/* SAIKO */}
          <li>
            <p className="text-[23px] font-semi-bold leading-[25px]  text-[#081356]">SAIKO:</p>
            <p className="leading-relaxed text-[#081356]">
              Massage harmonisant 1h30 de détente Suprême : Ayurvédique, crânien, kobido, acupressure, musculaire, magnétisme
            </p>
            <p className="font-semibold text-[#081356] text-lg mt-1">150.-</p>
          </li>

          {/* SHAMBHALA */}
          <li>
            <p className="text-[23px] font-semi-bold leading-[25px]  text-[#081356]">SHAMBHALA:</p>
            <p className="leading-relaxed text-[#081356]">
              Massage harmonisant 1h d'excellence zen : Ayurvédique, crânien, Kobido, acupressure, musculaire, magnétisme
            </p>
            <p className="font-semibold text-[#081356] text-lg mt-1">120.-</p>
          </li>

          {/* AZSHARA */}
          <li>
            <p className="text-[23px] font-semi-bold leading-[25px]  text-[#081356]">AZSHARA:</p>
            <p className="leading-relaxed text-[#081356]">
              Massage harmonisant 30 mn en express Absolu, technique au choix : Ayurvédique, crânien, kobido, acupressure
            </p>
            <p className="font-semibold text-[#081356] text-lg mt-1">60.-</p>
          </li>
        </ul>

        {/* Additional Notes */}
        <div className="mt-8 text-[#081356] leading-relaxed space-y-4">
          <p>TARIFS PRÉFÉRENTIELS, ÉTUDIANTS / APPRENTIS / AVS / AI.</p>
          <p>LE RÈGLEMENT SE FAIT VIA TWINT OU EN CASH À LA FIN DE CHAQUE CONSULTATION.</p>
          <p>PRESTATIONS UNIQUEMENT SUR RENDEZ-VOUS.</p>
          <p>LES DÉPLACEMENTS À DOMICILE SONT FACTURÉS À HAUTEUR DE CHF 40.-</p>
          <p>
            L'ANNULATION DE MOINS DE 48 HEURES SERA FACTURÉE À 50% ET DE MOINS DE 24 HEURES À 100%.
          </p>
          <p>LE CABINET NE PROPOSE AUCUN MASSAGE À CARACTÈRE ÉROTIQUE.</p>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
