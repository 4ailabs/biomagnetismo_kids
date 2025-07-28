
import React from 'react';
import { CalendarDays } from 'lucide-react';

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => {
  return <CalendarDays className={className} />;
};

export default CalendarIcon;
