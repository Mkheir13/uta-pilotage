import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Calendar, CheckCircle2, Circle, Clock } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: 'Janvier - Initiation du projet',
      status: 'completed',
      progress: 100,
      items: [
        'Formation de l\'équipe et distribution des rôles',
        'Document initial de portée du projet',
        'Sélection des technologies (React, Flask, scikit-learn)',
        'Configuration de l\'environnement de développement'
      ]
    },
    {
      title: 'Février - Architecture & Planification',
      status: 'completed',
      progress: 100,
      items: [
        'Conception de l\'architecture système',
        'Diagrammes de flux de données Spotify',
        'Document des exigences d\'infrastructure',
        'Planification du développement et sprints'
      ]
    },
    {
      title: 'Mars - Développement des algorithmes de base',
      status: 'in-progress',
      progress: 60,
      items: [
        'Système d\'extraction des caractéristiques musicales',
        'Cadre de modélisation des préférences utilisateur',
        'Prototype d\'algorithme de recommandation',
        'Création et validation du dataset (19MB)'
      ]
    },
    {
      title: 'Avril - MVP Release',
      status: 'upcoming',
      progress: 0,
      items: [
        'Moteur de recommandation (80% précision)',
        'Interface utilisateur de base',
        'Intégration complète Spotify',
        'Documentation technique et protocole de test'
      ]
    }
  ];

  const futurePhases = [
    {
      title: 'Phase II: Mai-Juillet',
      items: [
        'Intégrations avec d\'autres API musicales',
        'Précision algorithmique à 90%',
        'Fonctionnalités de partage social',
        'Programme de test bêta'
      ]
    },
    {
      title: 'Phase III: Août-Octobre',
      items: [
        'Détection de l\'humeur musicale',
        'Sensibilité contextuelle',
        'API entreprise B2B',
        'Support 100k+ utilisateurs'
      ]
    },
    {
      title: 'Phase IV: Novembre-Janvier',
      items: [
        'Lancement public et marketing',
        'Fonctionnalités premium',
        'Collaboration avec artistes',
        'Expansion internationale'
      ]
    }
  ];

  return (
    <SectionContainer id="roadmap" title="Feuille de Route">
      <div className="space-y-12">
        {/* Phases actuelles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  {phase.title}
                </h3>
                <div className="flex items-center">
                  {phase.status === 'completed' && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                  {phase.status === 'in-progress' && (
                    <Clock className="h-5 w-5 text-yellow-500" />
                  )}
                  {phase.status === 'upcoming' && (
                    <Circle className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="h-2 bg-purple-900/40 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${phase.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-1">{phase.progress}% complété</p>
              </div>

              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-pink-500 mr-2">▷</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Phases futures */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-6 rounded-2xl backdrop-blur-sm border border-pink-500/30">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Jalons Futurs
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futurePhases.map((phase, index) => (
              <div key={index} className="bg-black/20 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-3">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-pink-500 mr-2">▷</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Roadmap;