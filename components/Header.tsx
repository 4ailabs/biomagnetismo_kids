import React from 'react';
import MagnetIcon from './icons/MagnetIcon';

const Header: React.FC = () => {
  return (
    <header className="relative rounded-2xl overflow-hidden mb-12 shadow-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620912189868-3798944d712b?q=80&w=1974&auto=format&fit=crop')" }}
        aria-hidden="true"
      >
      </div>
      <div className="absolute inset-0 bg-blue-800/70 z-10" aria-hidden="true"></div>
      <div className="relative z-20 text-center py-16 sm:py-24 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 flex items-center justify-center gap-3">
            <MagnetIcon className="text-white" size={48} />
            BIOMAGNETISMO KIDS
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Biomagnetismo para Conflictos Biológicos, Resonancia Familiar y Acompañamiento Vivencial por Etapas del Desarrollo Infantil
          </p>
      </div>
    </header>
  );
};

export default Header;