
import React, { useRef } from 'react';
import { ModuleData } from '../types';
import Timeline from './Timeline';
import ChevronDownIcon from './icons/ChevronDownIcon';
import Icon from './icons/Icon';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AccordionItemProps {
  module: ModuleData;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

// Función para obtener el color según el módulo
const getModuleColor = (moduleId: string) => {
  switch (moduleId) {
    case 'module-1':
      return {
        bg: 'bg-purple-50',
        border: 'border-purple-500',
        icon: 'text-purple-600',
        title: 'text-purple-700',
        subtitle: 'text-purple-600'
      };
    case 'module-2':
      return {
        bg: 'bg-green-50',
        border: 'border-green-500',
        icon: 'text-green-600',
        title: 'text-green-700',
        subtitle: 'text-green-600'
      };
    case 'module-3':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-500',
        icon: 'text-blue-600',
        title: 'text-blue-700',
        subtitle: 'text-blue-600'
      };
    case 'module-4':
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-500',
        icon: 'text-orange-600',
        title: 'text-orange-700',
        subtitle: 'text-orange-600'
      };
    default:
      return {
        bg: 'bg-gray-50',
        border: 'border-gray-500',
        icon: 'text-gray-600',
        title: 'text-gray-700',
        subtitle: 'text-gray-600'
      };
  }
};

const AccordionItem: React.FC<AccordionItemProps> = ({ module, isOpen, onClick, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });
  const colors = getModuleColor(module.id);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-out border-l-4 ${colors.border} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        className={`w-full flex justify-between items-center p-6 text-left ${colors.bg} hover:bg-opacity-80 transition-all duration-300`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={module.id}
      >
        <div className="flex items-center">
          <Icon name={module.icon} className={`w-8 h-8 mr-4 ${colors.icon} flex-shrink-0`} />
          <div>
            <h2 className={`text-xl font-bold ${colors.title}`}>
              {module.title}
            </h2>
            <p className={`text-md ${colors.subtitle} font-medium`}>{module.subtitle}</p>
          </div>
        </div>
        <div className={`text-2xl ${colors.icon} transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon />
        </div>
      </button>
      <div
        id={module.id}
        className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[5000px]' : 'max-h-0'}`}
      >
        <div className="pt-0 p-6">
            <Timeline items={module.content} moduleColor={colors} />
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;