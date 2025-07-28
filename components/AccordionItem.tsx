
import React from 'react';
import { ChevronDown } from 'lucide-react';
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

const AccordionItem: React.FC<AccordionItemProps> = ({ module, isOpen, onClick, index }) => {
  const colors = getModuleColor(index);

  return (
    <div className="module" onClick={onClick}>
      <h2 style={{ color: colors.title }}>
        MÓDULO {index + 1} - DÍA {index + 1}
      </h2>
      <p>"{module.subtitle}"</p>
      
      {isOpen && (
        <div style={{ marginTop: '1rem' }}>
          {module.content.map((section, sectionIndex) => (
            <div key={sectionIndex} style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ 
                fontWeight: '600', 
                fontSize: '1.125rem', 
                color: colors.title,
                marginBottom: '0.75rem'
              }}>
                {section.title}
              </h3>
              <Timeline items={section.items} moduleColor={colors} />
            </div>
          ))}
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