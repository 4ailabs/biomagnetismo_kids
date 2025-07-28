import React from 'react';
import { Magnet } from 'lucide-react';

interface MagnetIconProps {
  className?: string;
  color?: string;
  size?: number;
}

const MagnetIcon: React.FC<MagnetIconProps> = ({ className = "", color, size = 24, ...props }) => {
  return (
    <Magnet 
      className={className}
      color={color}
      size={size}
      {...props}
    />
  );
};

export default MagnetIcon; 