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
          Les massages énergétiques sont des pratiques holistiques qui visent à rétablir l'harmonie entre le corps, l'âme et l'esprit.  En utilisant des techniques variées comme le toucher doux, la pression et les mouvements fluides, ces massages permettent de libérer les blocages énergétiques et de favoriser une circulation harmonieuse de l'énergie vitale. Ils favorisent également un profond réalignement intérieur, permettant de reconnecter avec soi-même et de stimuler les processus  de guérison.
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
