import React, { useState, useEffect } from 'react';

// --- Carrusel de Proyectos ---
export const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-48 w-full overflow-hidden bg-slate-800">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={img} alt={`Captura ${index + 1}`} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-slate-900/10"></div>
        </div>
      ))}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
        {images.map((_, index) => (
          <div key={index} className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentIndex ? 'bg-white w-3' : 'bg-white/40'}`} />
        ))}
      </div>
    </div>
  );
};