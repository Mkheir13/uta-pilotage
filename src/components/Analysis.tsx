import React, { useState } from 'react';
import SectionContainer from './layout/SectionContainer';
import { BarChart, TrendingUp, Zap, Webhook } from 'lucide-react';

const Analysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'swot' | 'pestel'>('swot');

  return (
    <SectionContainer id="analysis" title="SWOT & PESTEL Analysis">
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
              Strengths
            </h3>
            <ul className="space-y-3">
              {[
                'Proprietary AI recommendation algorithm with 90% accuracy',
                'Cross-platform compatibility with major music services',
                'Team expertise in machine learning and music industry',
                'Low-latency architecture ensuring fast recommendations',
                'Unique mood-based discovery features',
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
              Weaknesses
            </h3>
            <ul className="space-y-3">
              {[
                'Dependent on third-party music streaming APIs',
                'Limited historical user data for algorithm training',
                'High infrastructure costs for AI processing',
                'New entrant in a competitive market',
                'Complex integration with varying music service APIs',
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
              Opportunities
            </h3>
            <ul className="space-y-3">
              {[
                'Growing market for personalized music experiences',
                'Potential partnerships with streaming platforms',
                'Expansion into artist recommendation for labels',
                'Integration with smart home and IoT devices',
                'Emerging markets with increasing streaming adoption',
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
                'Les grandes plateformes de streaming développant des fonctionnalités similaires',
                'Modifications des conditions d\'accès aux API tierces',
                'Réglementations sur la confidentialité affectant la collecte de données',
                'Coûts d\'acquisition élevés sur des marchés saturés',
                'Concurrents établis avec une base d\'utilisateurs plus importante',
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
                    factor: 'Réglementations sur le contenu numérique',
                    impact: 'Réglementations variables selon les régions nécessitant un filtrage du contenu',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Politique',
                    factor: 'Politiques d\'internet ouvert',
                    impact: 'Permet la diffusion mondiale de contenu sans restrictions',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Économique',
                    factor: 'Croissance des abonnements streaming',
                    impact: 'Base d\'utilisateurs potentiels plus large pour l\'intégration',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Économique',
                    factor: 'Récession affectant les dépenses discrétionnaires',
                    impact: 'Réduction de la volonté de payer pour les services musicaux premium',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Social',
                    factor: 'Intérêt croissant pour les expériences personnalisées',
                    impact: 'Demande accrue de recommandations musicales personnalisées',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Social',
                    factor: 'La musique comme monnaie sociale',
                    impact: 'Adoption accrue des fonctionnalités de partage et sociales',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Technologique',
                    factor: 'Avancées en IA et ML',
                    impact: 'Possibilité d\'algorithmes de recommandation améliorés',
                    type: 'Opportunité',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Technologique',
                    factor: 'Modifications des API par les services de streaming',
                    impact: 'Peut nécessiter une adaptation fréquente du code d\'intégration',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Environnemental',
                    factor: 'Consommation énergétique du cloud computing',
                    impact: 'Coûts plus élevés pour les options de centres de données durables',
                    type: 'Menace',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Légal',
                    factor: 'RGPD et lois sur la protection des données',
                    impact: 'Gestion plus stricte des données de préférences utilisateur requise',
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