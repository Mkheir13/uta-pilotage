import React, { useEffect, useState } from 'react';
import utaLogo from '../assets/uta.png';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-uta-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-uta-black via-uta-black to-uta-black opacity-90"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-uta-red/10 blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 flex justify-center">
            <img src={utaLogo} alt="UTA Logo" className="w-auto h-[120px] animate-pulse-slow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-uta-white">
            Universal <span className="text-uta-red">Tune</span> Assistant
          </h1>
          <p className="text-xl md:text-2xl text-uta-white/80 max-w-3xl mx-auto mb-8">
            Intelligence artificielle au service de la recommandation musicale
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#introduction" className="px-8 py-3 bg-uta-red text-uta-white font-medium rounded-full hover:bg-uta-red-dark transition-colors transform hover:scale-105 duration-200">
              Découvrir le projet
            </a>
            <a href="#organization" className="px-8 py-3 bg-uta-white/10 text-uta-white font-medium rounded-full hover:bg-uta-white/20 transition-colors backdrop-blur-sm transform hover:scale-105 duration-200">
              Notre équipe
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <span className="text-uta-white/80 text-sm mb-2">Scroll</span>
        <svg 
          className="w-6 h-6 text-uta-red" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;