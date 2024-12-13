import React from 'react';

const Page1 = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-purple-200 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
        1. Le massage d’inspiration Ayurvédique
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Text Description */}
        <div className="text-blue-900 text-base leading-relaxed flex-1">
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
            src="./assets/page-1.jpg" // Replace with your image path
            alt="Ayurvedic Massage"
            className="w-full max-w-xs rounded-lg shadow-md"
          />
          <a
            href="#" // Replace with your link
            className="absolute bottom-4 right-4 bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            Réservez vos soins ici
          </a>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <a
          href="#" // Replace with your link
          className="inline-block bg-blue-100 text-blue-700 text-sm font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-200 transition-colors"
        >
          Retour à la page principale
        </a>
      </div>
    </div>
  );
};

export default Page1;
