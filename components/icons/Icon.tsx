import React from 'react';
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Monitor, 
  PhoneCall,
  HelpCircle 
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  color?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    calendar: Calendar,
    clock: Clock,
    dollarSign: DollarSign,
    monitor: Monitor,
    phoneCall: PhoneCall,
  };

  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent {...props} />;
};

export default Icon;
