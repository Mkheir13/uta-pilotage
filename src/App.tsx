import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Organization from './components/Organization';
import System from './components/System';
import Analysis from './components/Analysis';
import Strategy from './components/Strategy';
import Roadmap from './components/Roadmap';
import Architecture from './components/Architecture';
import Continuity from './components/Continuity';
import Costs from './components/Costs';
import Footer from './components/Footer';
import LoadingSpinner from './components/layout/LoadingSpinner';
import './styles/animations.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simuler un temps de chargement pour montrer le spinner
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  console.log("Rendering App component");
  
  if (loading) {
    return (
      <div className="bg-uta-black flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" message="Initialisation de UTA..." />
      </div>
    );
  }
  
  return (
    <div className="bg-uta-black text-uta-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="bg-uta-black/90">
        <Introduction />
        <Organization />
        <System />
        <Analysis />
        <Strategy />
        <Roadmap />
        <Architecture />
        <Continuity />
        <Costs />
      </div>
      <Footer />
    </div>
  );
}

export default App;