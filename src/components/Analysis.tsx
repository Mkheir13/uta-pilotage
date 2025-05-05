import React, { useState } from 'react';
import SectionContainer from './layout/SectionContainer';
import { BarChart, TrendingUp, Zap, Webhook } from 'lucide-react';

const Analysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'swot' | 'pestel'>('swot');

  return (
    <SectionContainer id="analysis" title="Analyse SWOT & PESTEL">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg p-1 bg-purple-900/30 backdrop-blur-sm">
          <button
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'swot'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setActiveTab('swot')}
          >
            SWOT Analysis
          </button>
          <button
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'pestel'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => setActiveTab('pestel')}
          >
            PESTEL Analysis
          </button>
        </div>
      </div>

      {activeTab === 'swot' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-green-500/20 hover:border-green-500/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-green-400 flex items-center">
              <Zap className="mr-2 h-6 w-6" />
              Forces
            </h3>
            <ul className="space-y-3">
              {[
                'Algorithme de recommandation transparent et explicable',
                'Intégration complète avec Spotify',
                'Multiple approches de recommandation (dataset, historique, personnalisé)',
                'Interface utilisateur intuitive et esthétique',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-red-500/20 hover:border-red-500/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-red-400 flex items-center">
              <Webhook className="mr-2 h-6 w-6" />
              Faiblesses
            </h3>
            <ul className="space-y-3">
              {[
                'Dépendance à l\'API Spotify',
                'Dataset limité par rapport à la bibliothèque complète de Spotify',
                'Performance des recommandations pour les utilisateurs avec des goûts musicaux de niche',
                'Infrastructure à petite échelle',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6" />
              Opportunités
            </h3>
            <ul className="space-y-3">
              {[
                'Croissance du marché des services de streaming musical',
                'Intérêt croissant pour les recommandations musicales transparentes et personnalisables',
                'Possibilité d\'intégration avec d\'autres services de streaming',
                'Possibilité de monétisation via un modèle freemium',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">↗</span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/30 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-amber-400 flex items-center">
              <BarChart className="mr-2 h-6 w-6" />
              Menaces
            </h3>
            <ul className="space-y-3">
              {[
                'Modifications potentielles de l\'API Spotify qui pourraient affecter le service',
                'Concurrence d\'autres outils de recommandation musicale',
                'Limites d\'utilisation de l\'API Spotify',
                'Coûts d\'infrastructure croissants avec l\'augmentation des utilisateurs',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-500 mr-2">!</span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Facteur</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Impact</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Opportunité/Menace</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: 'Politique',
                    factor: 'Réglementations sur la protection des données musicales',
                    impact: 'Nécessité de conformité avec les lois sur la propriété intellectuelle',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Politique',
                    factor: 'Politiques de propriété intellectuelle et droits d\'auteur',
                    impact: 'Impact sur l\'utilisation des données musicales',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Économique',
                    factor: 'Croissance du marché du streaming musical',
                    impact: 'Base d\'utilisateurs potentiels plus large',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Économique',
                    factor: 'Possibilités de monétisation',
                    impact: 'Potentiel de revenus via modèle freemium et partenariats',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Social',
                    factor: 'Tendances d\'écoute musicale changeantes',
                    impact: 'Adaptation continue des algorithmes de recommandation',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Social',
                    factor: 'Communautés d\'utilisateurs de Spotify',
                    impact: 'Base d\'utilisateurs cible existante',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Technologique',
                    factor: 'Évolution des API de streaming',
                    impact: 'Nécessité d\'adaptation continue',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Technologique',
                    factor: 'Avancées en matière d\'algorithmes de recommandation',
                    impact: 'Amélioration possible de la qualité des recommandations',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Environnemental',
                    factor: 'Empreinte carbone des services cloud',
                    impact: 'Coûts environnementaux à considérer',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Légal',
                    factor: 'Conformité au RGPD',
                    impact: 'Gestion stricte des données utilisateur requise',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-900/20">
                    <td className="py-3 px-4">
                      <div className="font-medium text-white">{item.category}</div>
                      <div className="text-sm text-gray-300">{item.factor}</div>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{item.impact}</td>
                    <td className="py-3 px-4">
                      <span className={`${item.color} font-medium`}>{item.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default Analysis;