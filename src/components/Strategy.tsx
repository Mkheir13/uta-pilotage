import React, { useState } from 'react';
import SectionContainer from './layout/SectionContainer';
import { Target, Compass, BrainCircuit, Check } from 'lucide-react';

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
    <SectionContainer id="strategy" title="Business Strategy">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {strategies.map((strategy) => (
          <div
            key={strategy.id}
            className={`relative overflow-hidden bg-white/5 backdrop-blur-md p-6 rounded-2xl border transition-all cursor-pointer ${
              activeStrategy === strategy.id
                ? `border-${strategy.color}-500/50 shadow-lg shadow-${strategy.color}-500/10`
                : 'border-purple-500/20 hover:border-purple-500/30'
            }`}
            onClick={() => setActiveStrategy(strategy.id)}
          >
            {activeStrategy === strategy.id && (
              <div className="absolute top-3 right-3">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
            )}
            
            <div className="flex items-center mb-4">
              <div className={`p-2 rounded-full bg-${strategy.color}-900/30 mr-3`}>
                {strategy.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{strategy.name}</h3>
            </div>
            
            <p className="text-gray-300 mb-4">{strategy.description}</p>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white/10 p-3 rounded-xl">
                <p className="text-green-400 font-medium mb-2">Advantages</p>
                <ul className="space-y-1">
                  {strategy.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 shrink-0">✓</span>
                      <span className="text-gray-300 text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 p-3 rounded-xl">
                <p className="text-red-400 font-medium mb-2">Limitations</p>
                <ul className="space-y-1">
                  {strategy.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 shrink-0">✗</span>
                      <span className="text-gray-300 text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-6 rounded-2xl backdrop-blur-sm border border-pink-500/30">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Strategic Plan Implementation
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="inline-block w-8 h-8 bg-purple-600 text-white rounded-full mr-2 flex items-center justify-center text-xs">1</span>
              Business Strategy
            </h4>
            <ul className="space-y-3 ml-10">
              {[
                'Focus on AI algorithm excellence as our primary differentiator',
                'Develop proprietary recommendation engine with patentable innovations',
                'Form strategic partnerships with mid-sized streaming platforms first',
                'Pursue enterprise B2B model with streaming services rather than direct-to-consumer',
                'Create APIs for third-party developers to extend functionality',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-pink-500 mr-2">▷</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="inline-block w-8 h-8 bg-pink-600 text-white rounded-full mr-2 flex items-center justify-center text-xs">2</span>
              IS Strategy
            </h4>
            <ul className="space-y-3 ml-10">
              {[
                'Build scalable, cloud-native microservice architecture',
                'Implement machine learning pipeline with continuous retraining capabilities',
                'Design data lake for processing vast music metadata and user interactions',
                'Create secure API gateway for external service integration',
                'Establish automated CI/CD pipeline for rapid iteration and testing',
                'Adopt infrastructure-as-code for consistent deployment across environments',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">▷</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-pink-500/30">
          <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
            <span className="inline-block w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full mr-2 flex items-center justify-center text-xs">3</span>
            Success Criteria
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { metric: 'Recommendation Accuracy', target: '95% within 6 months' },
              { metric: 'API Response Time', target: '<100ms average' },
              { metric: 'Partnership Agreements', target: '3+ major platforms by EOY' },
              { metric: 'Algorithm Patents', target: 'File 2+ patents in 12 months' },
              { metric: 'Processing Scale', target: '10M+ songs analyzed daily' },
              { metric: 'Data Processing Efficiency', target: '30% better than industry average' },
            ].map((item, index) => (
              <div key={index} className="bg-black/20 p-3 rounded-xl">
                <p className="text-pink-400 font-medium">{item.metric}</p>
                <p className="text-white">{item.target}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Strategy;