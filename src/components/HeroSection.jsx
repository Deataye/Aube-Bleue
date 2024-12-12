import React, { useState, useEffect } from 'react';
import Herobg from '../assets/Hero-bg.jpg';

const HeroSection = () => {
  // Texts to display in the slider
  const quotes = [
    "Massages & soins",
    "« Un corps libre de tension et de fatigue permet de mieux affronter les complexités de la vie. »\nJoseph Pilate.",
    "« Un voyage de mille lieues commence toujours par un premier pas. »\nLao-Tseu."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Change quote every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [quotes.length]);

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage:`url(${Herobg})`, // Replace with your image path
      }}
    >
      <div className="text-white px-4">
        <h1 className="text-[100px] leading-[140px] text-[#252F6D] font-semi-bold mb-2">Aube Bleue</h1>
        <p className="text-[#252F6D] text-[100px] leading-relaxed font-semi-bold md:text-2xl  whitespace-pre-wrap">
          {quotes[currentQuoteIndex]}
        </p>
        <button className="mt-6 px-4 py-2 bg-[#A6B4E4] text-[#081356] font-semibold rounded-lg shadow-md hover:bg-blue-200">
          Réservez vos soins ici
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
