
import React from 'react';
import { Clock } from 'lucide-react';

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => {
  return <Clock className={className} />;
};

export default ClockIcon;
