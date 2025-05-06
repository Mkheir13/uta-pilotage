import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Target, Lightbulb, Music, Sparkles } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <SectionContainer id="introduction" title="Présentation du Projet">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all group hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1 duration-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl mr-3">
                <Lightbulb className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                À propos d'UTA
              </h3>
            </div>
            <p className="text-gray-300 mb-4 relative z-10">
              <span className="text-uta-red font-medium">Universal Tune Assistant (UTA)</span> est une plateforme innovante de recommandation musicale 
              qui utilise l'intelligence artificielle pour créer des expériences musicales personnalisées. 
              Contrairement aux plateformes traditionnelles qui reposent sur une simple correspondance de genres, 
              UTA analyse des modèles complexes dans les comportements d'écoute, les réponses émotionnelles 
              et les facteurs contextuels pour fournir des recommandations véritablement personnalisées.
            </p>
            <p className="text-gray-300 relative z-10">
              Le projet vise à révolutionner la façon dont les gens découvrent et s'engagent avec la musique,
              rendant l'expérience plus intuitive, personnelle et significative sur toutes
              les plateformes de streaming musical.
            </p>
            <div className="mt-4 flex">
              <Music className="h-5 w-5 text-pink-500 animate-pulse-slow mr-2" />
              <span className="text-sm text-gray-400 italic">Intelligence artificielle, expérience personnalisée</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all group hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1 duration-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl mr-3">
                <Target className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Objectifs du Projet
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300 relative z-10">
              {[
                "Créer un moteur de recommandation musicale IA avec 95% de précision",
                "Développer l'intégration multiplateforme avec les principaux services de streaming musical",
                "Construire une interface utilisateur conviviale adaptée aux préférences individuelles",
                "Établir une infrastructure scalable capable de gérer des millions d'utilisateurs",
                "Lancer le MVP avant le troisième trimestre 2025 avec l'ensemble des fonctionnalités avant le premier trimestre 2026"
              ].map((objective, index) => (
                <li key={index} className="flex items-start group/item hover:bg-purple-900/30 p-2 rounded-lg transition-colors">
                  <span className="text-pink-500 mr-2 flex-shrink-0 group-hover/item:scale-110 transform transition-transform">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <span className="group-hover/item:text-uta-white transition-colors">{objective}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex">
              <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full text-pink-300">Objectif Q1 2026</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;