import React from 'react';
import utaLogo from '../../assets/uta.png';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = 'Chargement en cours...' 
}) => {
  const sizeClass = {
    sm: 'h-8 w-8',
    md: 'h-16 w-16',
    lg: 'h-24 w-24'
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-2 border-uta-red/20"></div>
        <div className="absolute inset-0 rounded-full border-t-2 border-uta-red animate-spin"></div>
        <img 
          src={utaLogo} 
          alt="UTA Logo" 
          className={`${sizeClass[size]} p-2 animate-pulse-slow`} 
        />
      </div>
      {message && (
        <p className="mt-4 text-uta-white/80 text-sm">{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner; 