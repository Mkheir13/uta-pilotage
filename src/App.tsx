import React from 'react';
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
import Monitoring from './components/Monitoring';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="bg-black/90">
        <Introduction />
        <Organization />
        <System />
        <Analysis />
        <Strategy />
        <Roadmap />
        <Architecture />
        <Continuity />
        <Costs />
        <Monitoring />
      </div>
      <Footer />
    </div>
  );
}

export default App;