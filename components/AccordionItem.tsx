
import React from 'react';
import { ChevronDown, Infinity, Sprout, BookOpen, Flame, Heart, Brain, Stethoscope, Target, Users, Eye, Lightbulb } from 'lucide-react';
import Timeline from './Timeline';

interface Module {
  id: string;
  title: string;
  subtitle: string;
  content: {
    title: string;
    items: Array<{
      title: string;
      description?: string;
      points?: string[];
    }>;
  }[];
}

interface AccordionItemProps {
  module: Module;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const getModuleColor = (index: number) => {
  const colors = [
    { border: '#8b5cf6', icon: '#8b5cf6', title: '#8b5cf6' }, // Purple
    { border: '#10b981', icon: '#10b981', title: '#10b981' }, // Green
    { border: '#3b82f6', icon: '#3b82f6', title: '#3b82f6' }, // Blue
    { border: '#f59e0b', icon: '#f59e0b', title: '#f59e0b' }, // Orange
  ];
  return colors[index % colors.length];
};

const getModuleIcon = (index: number) => {
  const icons = [
    Infinity,  // Módulo 1 - Infinito (origen)
    Sprout,    // Módulo 2 - Brote (crecimiento)
    BookOpen,  // Módulo 3 - Libro (aprendizaje)
    Flame      // Módulo 4 - Llama (transformación)
  ];
  return icons[index % icons.length];
};

const getSectionIcon = (sectionTitle: string) => {
  const title = sectionTitle.toLowerCase();
  
  if (title.includes('apertura') || title.includes('vivencial')) return Heart;
  if (title.includes('marco') || title.includes('teórico')) return Brain;
  if (title.includes('patología') || title.includes('enfermedad')) return Stethoscope;
  if (title.includes('protocolo') || title.includes('específico')) return Target;
  if (title.includes('vivencia') || title.includes('terapéutica')) return Users;
  if (title.includes('práctica') || title.includes('supervisada')) return Eye;
  if (title.includes('reflexión') || title.includes('sistémica')) return Lightbulb;
  
  return BookOpen; // Icono por defecto
};

const AccordionItem: React.FC<AccordionItemProps> = ({ module, isOpen, onClick, index }) => {
  const colors = getModuleColor(index);
  const ModuleIcon = getModuleIcon(index);

  return (
    <div className="module" onClick={onClick}>
      <h2 style={{ color: colors.title }}>
        <ModuleIcon size={24} style={{ marginRight: '0.75rem' }} />
        MÓDULO {index + 1} - DÍA {index + 1}
      </h2>
      <p>"{module.subtitle}"</p>
      
      {isOpen && (
        <div style={{ marginTop: '1.5rem' }}>
          {module.content.map((section, sectionIndex) => {
            const SectionIcon = getSectionIcon(section.title);
            return (
              <div key={sectionIndex} className="module-section">
                <h3>
                  <SectionIcon size={24} style={{ color: colors.title }} />
                  {section.title}
                </h3>
                <div className="module-timeline">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="module-timeline-item">
                      <p style={{ fontWeight: '500', color: colors.title }}>
                        {item.title}
                      </p>
                      {item.description && (
                        <p style={{ 
                          fontSize: '0.9rem', 
                          color: '#6b7280', 
                          fontStyle: 'italic',
                          marginTop: '0.25rem'
                        }}>
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <ChevronDown 
        size={20} 
        style={{ 
          color: colors.icon,
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          marginLeft: 'auto'
        }} 
      />
    </div>
  );
};

export default AccordionItem;