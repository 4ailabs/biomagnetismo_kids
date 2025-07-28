import React from 'react';
import MagnetIcon from './icons/MagnetIcon';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>
        <MagnetIcon className="text-white" size={48} />
        BIOMAGNETISMO KIDS
      </h1>
      <p>
        Biomagnetismo para Conflictos Biológicos, Resonancia Familiar y Acompañamiento Vivencial por Etapas del Desarrollo Infantil
      </p>
    </header>
  );
};

export default Header;