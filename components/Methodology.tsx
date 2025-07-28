
import React, { useRef } from 'react';
import Icon from './icons/Icon';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface MethodologyCardProps {
    percentage: string;
    title: string;
    description: string;
    color: string;
    index: number;
}

const MethodologyCard: React.FC<MethodologyCardProps> = ({ percentage, title, description, color, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.2, triggerOnce: true });

    return (
        <div
            ref={ref}
            className={`bg-white p-6 rounded-2xl shadow-md flex-1 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <p className={`text-4xl font-bold ${color}`}>{percentage}</p>
            <p className="font-semibold mt-2 text-gray-800">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    );
};

const Methodology: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className={`mt-12 text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center gap-2">
        <Icon name="Goal" className="w-8 h-8" />
        Metodología
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <MethodologyCard index={0} percentage="40%" title="Teórico" description="Conflictos biológicos y marco conceptual" color="text-sky-500" />
        <MethodologyCard index={1} percentage="30%" title="Práctico" description="Técnicas de rastreo y protocolos" color="text-indigo-500" />
        <MethodologyCard index={2} percentage="30%" title="Vivencial" description="Dinámicas y autoconocimiento" color="text-amber-500" />
      </div>
      <div className="mt-8">
        <p className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold inline-block">Certificación al completar las 32 horas de formación</p>
      </div>
    </section>
  );
};

export default Methodology;