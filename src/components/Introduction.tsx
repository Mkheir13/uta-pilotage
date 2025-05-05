import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Users, Target, Lightbulb } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <SectionContainer id="introduction" title="Présentation du Projet">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-pink-500" />
            À propos d'UTA
          </h3>
          <p className="text-gray-300 mb-4">
            Universal Tune Assistant (UTA) est une plateforme innovante de recommandation musicale 
            qui utilise l'intelligence artificielle pour créer des expériences musicales personnalisées. 
            Contrairement aux plateformes traditionnelles qui reposent sur une simple correspondance de genres, 
            UTA analyse des modèles complexes dans les comportements d'écoute, les réponses émotionnelles 
            et les facteurs contextuels pour fournir des recommandations véritablement personnalisées.
          </p>
          <p className="text-gray-300">
            Le projet vise à révolutionner la façon dont les gens découvrent et s'engagent avec la musique,
            rendant l'expérience plus intuitive, personnelle et significative sur toutes
            les plateformes de streaming musical.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Target className="mr-2 h-6 w-6 text-pink-500" />
            Objectifs du Projet
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Créer un moteur de recommandation musicale IA avec 95% de précision</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Développer l'intégration multiplateforme avec les principaux services de streaming musical</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Construire une interface utilisateur conviviale adaptée aux préférences individuelles</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Établir une infrastructure scalable capable de gérer des millions d'utilisateurs</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Lancer le MVP avant le troisième trimestre 2025 avec l'ensemble des fonctionnalités avant le premier trimestre 2026</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Users className="mr-2 h-6 w-6 text-pink-500" />
            Équipe & Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { role: 'Project Manager', name: 'Emma Chen', expertise: 'Stratégie de produit, Méthodes Agiles' },
              { role: 'Lead Developer', name: 'Marcus Johnson', expertise: 'Full-stack, Intégration IA' },
              { role: 'UX Designer', name: 'Sofia Garcia', expertise: 'Recherche utilisateur, Design d\'interface' },
              { role: 'Data Scientist', name: 'Raj Patel', expertise: 'Machine Learning, Analyse de données' },
            ].map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-4 rounded-xl">
                <p className="text-pink-400 font-semibold">{member.role}</p>
                <p className="text-white font-bold">{member.name}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;