import React, { useState, useEffect } from 'react';
import Herobg from '../assets/Hero-bg.jpg';

const HeroSection = () => {
  const quotes = [
    "Massages & soins",
    "« Un corps libre de tension et de fatigue permet de mieux affronter les complexités de la vie. »\nJoseph Pilate.",
    "« Un voyage de mille lieues commence toujours par un premier pas. »\nLao-Tseu.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${Herobg})`,
      }}
    >
      <div className="text-white  px-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-semibold mb-4 text-[#252F6D]">
          Aube Bleue
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#252F6D]  font-semibold whitespace-pre-wrap">
          {quotes[currentQuoteIndex]}
        </p>
        <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#A6B4E4] text-[#081356] text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-200 transition duration-300">
          Réservez vos soins ici
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
