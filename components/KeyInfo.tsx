
import React, { useRef } from 'react';
import CalendarIcon from './icons/CalendarIcon';
import ClockIcon from './icons/ClockIcon';
import MonitorIcon from './icons/MonitorIcon';
import DollarSignIcon from './icons/DollarSignIcon';
import Icon from './icons/Icon';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const InfoLine: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="text-blue-500 w-6 h-6 mt-1 flex-shrink-0">{icon}</div>
        <div>
            <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

const KeyInfo: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });

  return (
    <section
        ref={ref}
        className={`mb-12 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
    >
        <div className="absolute -top-5 right-5 bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform rotate-6">
            ¡Espacios limitados!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <InfoLine icon={<CalendarIcon />} title="Fechas">
                <p>Sábados 2, 16, 30 de Agosto y 6 de Septiembre</p>
            </InfoLine>
            <InfoLine icon={<ClockIcon />} title="Horario">
                <p>10:00 a.m. a 6:00 p.m.</p>
            </InfoLine>
            <InfoLine icon={<MonitorIcon />} title="Modalidad">
                <p>Online</p>
            </InfoLine>
            <InfoLine icon={<DollarSignIcon />} title="Inversión">
                <>
                    <p>$1,200.00 MXN por clase</p>
                    <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-md inline-block mt-1">¡15% de descuento al pagar las 4 clases!</span>
                </>
            </InfoLine>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
             <h3 className="font-semibold text-lg text-gray-800">Para más información:</h3>
             <a href="https://wa.me/+525579076626" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold text-xl hover:underline flex items-center justify-center space-x-2 mt-2">
                <Icon name="MessageSquare" className="w-5 h-5" />
                <span>+52 55 7907 6626</span>
             </a>
        </div>
    </section>
  );
};

export default KeyInfo;