import React, { useState } from 'react';
import SectionContainer from './layout/SectionContainer';
import { Target, Compass, BrainCircuit, Check, Globe, Brain, Layout, BarChart, AlertTriangle, ArrowRight, Star } from 'lucide-react';

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
      
      {/* Introduction */}
      <div className="mb-10 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Justification des Stratégies
        </h3>
        <p className="text-gray-300 mb-4">
          Suite à notre analyse SWOT et PESTEL, nous avons identifié trois stratégies d'entreprise potentielles pour UTA.
          Chacune répond à des opportunités ou menaces spécifiques et s'appuie sur nos forces ou cherche à pallier nos faiblesses.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Stratégie 1 */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <div className="flex items-center mb-4">
            <Globe className="h-6 w-6 text-blue-500 mr-2" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Intégration Multi-Plateformes
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-900/20 p-4 rounded-xl">
              <h4 className="text-blue-400 font-semibold mb-2">Justification SWOT</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Atténue notre <b>faiblesse</b> de dépendance à Spotify</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Exploite l'<b>opportunité</b> d'intégration avec d'autres services</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Réduit la <b>menace</b> des modifications de l'API Spotify</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-xl">
              <h4 className="text-blue-400 font-semibold mb-2">Justification PESTEL</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Profite de la croissance du marché global du streaming</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>S'adapte à l'évolution des API de différentes plateformes</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-400 text-sm italic">Diversifier nos sources de données et élargir notre base d'utilisateurs potentiels en intégrant plusieurs plateformes.</p>
              <div className="flex items-center">
                <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                <p className="text-gray-400 text-sm">Complexité élevée d'intégration et coûts de développement importants</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stratégie 2 - CHOISIE */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-pink-500/30 hover:border-pink-500/50 transition-all relative overflow-hidden">
          {/* Badge stratégie choisie */}
          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
            <div className="flex items-center">
              <Star className="h-3 w-3 mr-1" fill="white" />
              <span>Stratégie choisie</span>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-pink-500 mr-2" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Excellence Algorithmique
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-pink-900/20 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Justification SWOT</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mt-1 mr-2 flex-shrink-0" />
                  <span>S'appuie sur notre <b>force</b> d'algorithme transparent et explicable</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Répond à l'<b>opportunité</b> de demande pour des recommandations personnalisables</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Combat la <b>menace</b> de la concurrence des algorithmes existants</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-900/20 p-4 rounded-xl">
              <h4 className="text-pink-400 font-semibold mb-2">Justification PESTEL</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Capitalise sur les progrès en algorithmes de recommandation (Technologique)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Répond à l'évolution des tendances d'écoute (Social)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-pink-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Permet un potentiel de revenus via propriété intellectuelle (Économique)</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2 bg-pink-500/10 p-3 rounded-lg">
              <p className="text-white text-sm">
                <b>Pourquoi cette stratégie est choisie:</b> L'excellence algorithmique est notre atout différenciateur le plus puissant dans un marché concurrentiel. Elle nous permettra de créer une propriété intellectuelle valorisable et de proposer une solution véritablement supérieure aux recommandations existantes.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stratégie 3 */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <div className="flex items-center mb-4">
            <Layout className="h-6 w-6 text-purple-500 mr-2" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
              Expérience Utilisateur
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-purple-900/20 p-4 rounded-xl">
              <h4 className="text-purple-400 font-semibold mb-2">Justification SWOT</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Développe notre <b>force</b> d'interface React intuitive</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Exploite l'<b>opportunité</b> de différenciation par l'expérience</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Compense notre <b>faiblesse</b> avec les genres de niche par une interface intuitive</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-900/20 p-4 rounded-xl">
              <h4 className="text-purple-400 font-semibold mb-2">Justification PESTEL</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Répond à la communauté existante d'utilisateurs Spotify (Social)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Facilite la conformité RGPD par une interface transparente (Légal)</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-400 text-sm italic">Prioritiser une interface intuitive, engageante et esthétique pour différencier UTA des services concurrents.</p>
              <div className="flex items-center">
                <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                <p className="text-gray-400 text-sm">Risque de prioriser la forme sur la fonction et design facilement imitable</p>
              </div>
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
                <li>Temps de réponse API inférieur à 100ms</li>
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