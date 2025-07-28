
import React, { useRef } from 'react';
import { MaterialData } from '../types';
import Icon from './icons/Icon';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface HighlightBoxProps {
    icon: string;
    title: string;
    children: React.ReactNode;
    index: number;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({ icon, title, children, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.2, triggerOnce: true });

    return (
        <div
            ref={ref}
            className={`bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg h-full flex items-start space-x-3 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <Icon name={icon} className="w-6 h-6 text-blue-700 mt-1 flex-shrink-0" />
            <div>
                <h4 className="font-semibold text-lg text-blue-800">{title}</h4>
                <p className="text-gray-600">{children}</p>
            </div>
        </div>
    );
}

const Materials: React.FC<{ materials: MaterialData[] }> = ({ materials }) => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <section
        ref={ref}
        className={`mt-12 bg-white p-8 rounded-2xl shadow-lg transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center gap-2">
        <Icon name="Sparkles" className="w-8 h-8" />
        Materiales Incluidos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {materials.map((material, index) => (
            <HighlightBox key={index} icon={material.icon} title={material.title} index={index}>
                {material.description}
            </HighlightBox>
        ))}
      </div>
    </section>
  );
};

export default Materials;