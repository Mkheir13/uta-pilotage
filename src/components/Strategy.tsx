import React, { useState } from 'react';
import SectionContainer from './layout/SectionContainer';
import { Target, Compass, BrainCircuit, Check, Globe, Brain, Layout, BarChart } from 'lucide-react';

const Strategy: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState<number>(2);

  const strategies = [
    {
      id: 1,
      name: 'Platform Integration Focus',
      icon: <Compass className="h-6 w-6 text-blue-400" />,
      color: 'blue',
      description: 'Focus on seamless integration with all major music platforms',
      pros: [
        'Wider potential user base through multiple platforms',
        'Reduced dependency on any single provider',
        'Cross-platform data insights',
      ],
      cons: [
        'Complex maintenance of multiple integrations',
        'Higher development and infrastructure costs',
        'Competing against native platform recommendations',
      ],
    },
    {
      id: 2,
      name: 'AI Excellence Strategy',
      icon: <BrainCircuit className="h-6 w-6 text-pink-400" />,
      color: 'pink',
      description: 'Prioritize AI algorithm development and machine learning capabilities',
      pros: [
        'Superior recommendation quality compared to competitors',
        'Potential for proprietary IP and patenting',
        'Ability to offer white-label solutions to platforms',
      ],
      cons: [
        'High R&D costs and specialized talent requirements',
        'Longer time-to-market for advanced features',
        'Computational resources and infrastructure demands',
      ],
      selected: true,
    },
    {
      id: 3,
      name: 'User Experience Strategy',
      icon: <Target className="h-6 w-6 text-purple-400" />,
      color: 'purple',
      description: 'Focus on creating the most intuitive and engaging user interface',
      pros: [
        'Lower barrier to adoption with intuitive design',
        'Higher user retention through engaging experience',
        'Differentiation in a feature-similar market',
      ],
      cons: [
        'May prioritize form over function',
        'Highly subjective success metrics',
        'Easily replicable by competitors',
      ],
    },
  ];

  return (
    <SectionContainer id="strategy" title="Stratégie Commerciale">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Globe className="mr-2 h-6 w-6 text-pink-500" />
            Intégration Multi-Plateformes
          </h3>
          <div className="space-y-4">
            <p className="text-gray-300">Élargir l'intégration au-delà de Spotify pour inclure d'autres plateformes de streaming musical</p>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Avantages</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Base d'utilisateurs potentiels plus large</li>
                <li>Réduction de la dépendance à Spotify</li>
                <li>Recommandations plus riches et diversifiées</li>
              </ul>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Limitations</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Complexité des intégrations multiples</li>
                <li>Coûts de développement élevés</li>
                <li>Concurrence des systèmes natifs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Brain className="mr-2 h-6 w-6 text-pink-500" />
            Excellence Algorithmique
          </h3>
          <div className="space-y-4">
            <p className="text-gray-300">Approfondir l'expertise en algorithmes de recommandation et en capacités d'apprentissage automatique</p>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Avantages</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Qualité de recommandation supérieure</li>
                <li>Propriété intellectuelle brevetable</li>
                <li>Solutions en marque blanche</li>
              </ul>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Limitations</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Coûts élevés de R&D</li>
                <li>Temps de développement long</li>
                <li>Ressources computationnelles importantes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Layout className="mr-2 h-6 w-6 text-pink-500" />
            Expérience Utilisateur
          </h3>
          <div className="space-y-4">
            <p className="text-gray-300">Créer l'interface utilisateur la plus intuitive et engageante pour la découverte musicale</p>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Avantages</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Barrière d'adoption réduite</li>
                <li>Meilleure rétention utilisateur</li>
                <li>Différenciation par le design</li>
              </ul>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Limitations</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Risque de prioriser la forme</li>
                <li>Métriques subjectives</li>
                <li>Fonctionnalités réplicables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Target className="mr-2 h-6 w-6 text-pink-500" />
            Plan d'Implémentation
          </h3>
          <div className="space-y-6">
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Stratégie Commerciale</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Focus sur l'excellence algorithmique</li>
                <li>Développement d'un moteur propriétaire</li>
                <li>Partenariats avec services de streaming</li>
                <li>Modèle B2B avec APIs tierces</li>
              </ul>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Systèmes d'Information</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Architecture microservices cloud-native</li>
                <li>Pipeline ML avec réentraînement continu</li>
                <li>Data lake pour métadonnées musicales</li>
                <li>Passerelle API sécurisée</li>
                <li>Pipeline CI/CD automatisé</li>
                <li>Infrastructure-as-code</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <BarChart className="mr-2 h-6 w-6 text-pink-500" />
            Critères de Succès
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Performance</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>95% satisfaction utilisateur</li>
                <li>API < 100ms de réponse</li>
                <li>10M+ chansons/jour</li>
                <li>30% plus efficace</li>
              </ul>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Business</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>3+ plateformes partenaires</li>
                <li>2+ brevets déposés</li>
                <li>Intégration multi-plateformes</li>
                <li>Modèle B2B établi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Strategy;