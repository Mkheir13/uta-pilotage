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
              Threats
            </h3>
            <ul className="space-y-3">
              {[
                'Major streaming platforms developing similar features',
                'Changes to third-party API terms and access',
                'Privacy regulations affecting data collection',
                'High customer acquisition costs in saturated markets',
                'Established competitors with larger user bases',
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
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Factor</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Impact</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Opportunity/Threat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: 'Political',
                    factor: 'Digital content regulations',
                    impact: 'Varying regulations across regions may require content filtering',
                    type: 'Threat',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Political',
                    factor: 'Open internet policies',
                    impact: 'Enables global content delivery without restrictions',
                    type: 'Opportunity',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Economic',
                    factor: 'Growth in streaming subscriptions',
                    impact: 'Larger potential user base for integration',
                    type: 'Opportunity',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Economic',
                    factor: 'Recession affecting discretionary spending',
                    impact: 'Reduced willingness to pay for premium music services',
                    type: 'Threat',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Social',
                    factor: 'Growing interest in personalized experiences',
                    impact: 'Higher demand for tailored music recommendations',
                    type: 'Opportunity',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Social',
                    factor: 'Music as social currency',
                    impact: 'Increased sharing and social features adoption',
                    type: 'Opportunity',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Technological',
                    factor: 'AI and ML advances',
                    impact: 'Better recommendation algorithms possible',
                    type: 'Opportunity',
                    color: 'text-green-400',
                  },
                  {
                    category: 'Technological',
                    factor: 'API changes by streaming services',
                    impact: 'May require frequent adaptation of integration code',
                    type: 'Threat',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Environmental',
                    factor: 'Cloud computing energy consumption',
                    impact: 'Higher costs for sustainable data center options',
                    type: 'Threat',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Legal',
                    factor: 'GDPR and data privacy laws',
                    impact: 'Stricter handling of user preference data required',
                    type: 'Threat',
                    color: 'text-amber-400',
                  },
                  {
                    category: 'Legal',
                    factor: 'Music licensing agreements',
                    impact: 'Complex legal landscape for music recommendations',
                    type: 'Threat',
                    color: 'text-amber-400',
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-purple-500/10 hover:bg-purple-900/20"
                  >
                    <td className="py-3 px-4">
                      <div>
                        <span className="text-pink-400 text-xs font-medium block">
                          {row.category}
                        </span>
                        <span className="text-white font-medium">{row.factor}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{row.impact}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          row.color === 'text-green-400'
                            ? 'bg-green-900/30 text-green-400'
                            : 'bg-amber-900/30 text-amber-400'
                        }`}
                      >
                        {row.type}
                      </span>
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