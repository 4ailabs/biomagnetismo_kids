import React, { useRef, useEffect, useState } from 'react';
import { Magnet } from 'lucide-react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animación escalonada para el título y subtítulo
    setTimeout(() => setTitleVisible(true), 300);
    setTimeout(() => setSubtitleVisible(true), 600);
  }, []);

  return (
    <div className={`header transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h1 className={`transition-all duration-700 ease-out delay-300 ${titleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
        <Magnet size={48} className="animate-pulse" />
        Biomagnetismo Kids Workshop
      </h1>
      <p className={`transition-all duration-700 ease-out delay-600 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Taller especializado de Biomagnetismo para Conflictos Biológicos, Resonancia Familiar y Acompañamiento Vivencial por Etapas del Desarrollo Infantil
      </p>
    </div>
  );
};

export default Header;