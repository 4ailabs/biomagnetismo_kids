import React from 'react';
import { TimelineItemData } from '../types';

interface TimelineItemProps {
  item: TimelineItemData;
  moduleColor: {
    border: string;
    icon: string;
    title: string;
  };
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, moduleColor }) => (
  <div className={`relative pl-8 pb-6 border-l-2 ${moduleColor.border} last:border-transparent last:pb-0`}>
    <div className={`absolute left-[-0.5rem] top-1 h-4 w-4 ${moduleColor.border.replace('border-', 'bg-')} rounded-full border-2 border-white`}></div>
    <p className={`font-semibold ${moduleColor.title}`}>{item.title}</p>
    {item.description && <p className="italic text-gray-500 mt-1">{item.description}</p>}
    {item.points && (
      <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
        {item.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

interface TimelineProps {
    items: TimelineItemData[];
    moduleColor?: {
      border: string;
      icon: string;
      title: string;
    };
}

const Timeline: React.FC<TimelineProps> = ({ items, moduleColor }) => {
    // Si no hay color específico, usar el color azul por defecto
    const defaultColor = {
      border: 'border-blue-200',
      icon: 'text-blue-600',
      title: 'text-blue-600'
    };
    
    const color = moduleColor || defaultColor;
    
    return (
        <div className="space-y-0 pt-4">
            {items.map((item, index) => (
                <TimelineItem key={index} item={item} moduleColor={color} />
            ))}
        </div>
    );
};

export default Timeline;