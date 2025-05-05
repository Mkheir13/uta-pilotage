import React from 'react';
import { Music, Headphones, Radio } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-800 to-pink-700 z-0" />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-60 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 blur-xl opacity-50 rounded-full transform scale-125" />
            <div className="relative bg-black/30 p-6 rounded-full backdrop-blur-sm border border-white/10">
              <Music className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
            Universal Tune Assistant
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          The next generation of music discovery and personalization, powered by advanced AI technology and a deep understanding of human musical preferences.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md py-3 px-5 rounded-full border border-white/20">
            <Headphones className="h-5 w-5 text-pink-400" />
            <span className="text-white">Personalized Recommendations</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md py-3 px-5 rounded-full border border-white/20">
            <Radio className="h-5 w-5 text-pink-400" />
            <span className="text-white">Mood-Based Discovery</span>
          </div>
        </div>
        
        <a 
          href="#introduction" 
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
        >
          Explore Project
        </a>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-20" />
    </div>
  );
};

export default Hero;