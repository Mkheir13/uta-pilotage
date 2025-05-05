import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { ShieldAlert, Rabbit, Clock, CheckSquare } from 'lucide-react';

const Continuity: React.FC = () => {
  return (
    <SectionContainer id="continuity" title="PRA / PCA - Business Continuity">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <ShieldAlert className="mr-2 h-6 w-6 text-pink-500" />
            Disaster Recovery (PRA)
          </h3>
          
          <div className="space-y-5">
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Critical Systems</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { system: 'User Authentication', rto: '15 min', rpo: '< 5 min' },
                  { system: 'Recommendation Engine', rto: '30 min', rpo: '< 10 min' },
                  { system: 'API Gateway', rto: '15 min', rpo: '< 5 min' },
                  { system: 'User Data Storage', rto: '1 hour', rpo: '0 (zero loss)' },
                ].map((item, index) => (
                  <div key={index} className="bg-purple-900/40 p-2 rounded-lg">
                    <p className="text-pink-400 text-sm font-medium">{item.system}</p>
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>RTO: {item.rto}</span>
                      <span>RPO: {item.rpo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Recovery Strategy</h4>
              <ul className="space-y-2">
                {[
                  'Multi-region deployment with automatic failover',
                  'Real-time data replication across geographic regions',
                  'Cold standby for non-critical services',
                  'Immutable infrastructure with automated provisioning',
                  'Periodic recovery drills every quarter',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">▶</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Disaster Scenarios</h4>
              <div className="space-y-3">
                {[
                  { title: 'Cloud Provider Outage', plan: 'Auto-failover to secondary region' },
                  { title: 'Database Corruption', plan: 'Point-in-time recovery with transaction logs' },
                  { title: 'Malicious Attack', plan: 'Isolated environment restoration from secure backups' },
                  { title: 'Critical Service Failure', plan: 'Circuit breaking and graceful degradation' },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="w-1/2 font-medium text-white">{item.title}:</div>
                    <div className="w-1/2 text-gray-300 text-sm">{item.plan}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Rabbit className="mr-2 h-6 w-6 text-pink-500" />
            Business Continuity (PCA)
          </h3>
          
          <div className="space-y-5">
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Risk Assessment</h4>
              <div className="space-y-3">
                {[
                  {
                    risk: 'Service API Integration Failure',
                    impact: 'High',
                    probability: 'Medium',
                    mitigation: 'Fallback to cached recommendations',
                  },
                  {
                    risk: 'Data Privacy Breach',
                    impact: 'Critical',
                    probability: 'Low',
                    mitigation: 'Encryption, access controls, auditing',
                  },
                  {
                    risk: 'Algorithm Performance Degradation',
                    impact: 'Medium',
                    probability: 'Medium',
                    mitigation: 'Performance monitoring, fallback models',
                  },
                  {
                    risk: 'Team Key Person Dependency',
                    impact: 'Medium',
                    probability: 'Medium',
                    mitigation: 'Knowledge sharing, documentation',
                  },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 text-xs">
                    <div className="font-medium text-white">{item.risk}</div>
                    <div className={`text-center rounded px-1 ${
                      item.impact === 'Critical' ? 'bg-red-900/40 text-red-400' :
                      item.impact === 'High' ? 'bg-amber-900/40 text-amber-400' :
                      'bg-yellow-900/40 text-yellow-400'
                    }`}>
                      {item.impact}
                    </div>
                    <div className={`text-center rounded px-1 ${
                      item.probability === 'High' ? 'bg-red-900/40 text-red-400' :
                      item.probability === 'Medium' ? 'bg-amber-900/40 text-amber-400' :
                      'bg-green-900/40 text-green-400'
                    }`}>
                      {item.probability}
                    </div>
                    <div className="text-gray-300">{item.mitigation}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-pink-400" />
                Response Time Objectives
              </h4>
              <div className="space-y-2">
                {[
                  { phase: 'Initial Response', timeframe: '< 15 minutes', actions: 'Alert team, initial assessment' },
                  { phase: 'Service Restoration', timeframe: '< 1 hour', actions: 'Critical functions recovery' },
                  { phase: 'Full Recovery', timeframe: '< 4 hours', actions: 'All systems operational' },
                  { phase: 'Post-Incident', timeframe: '< 24 hours', actions: 'Analysis, preventive measures' },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-2">
                    <div className="font-medium text-pink-400">{item.phase}</div>
                    <div className="text-white">{item.timeframe}</div>
                    <div className="text-gray-300 text-sm">{item.actions}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <CheckSquare className="mr-2 h-4 w-4 text-pink-400" />
                Business Continuity Testing
              </h4>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  The team conducts regular business continuity testing to ensure readiness for various scenarios:
                </p>
                <ul className="space-y-2">
                  {[
                    'Quarterly simulated disaster recovery exercises',
                    'Monthly backup restoration validation',
                    'Semi-annual full-scale continuity plan test',
                    'Continuous integration testing with chaos engineering',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-2">✓</span>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Continuity;