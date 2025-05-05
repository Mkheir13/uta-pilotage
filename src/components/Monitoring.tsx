import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { LineChart, BarChart3, PieChart, Gauge, Activity, AlertTriangle } from 'lucide-react';

const Monitoring: React.FC = () => {
  return (
    <SectionContainer id="monitoring" title="Surveillance & Métriques">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Activity className="mr-2 h-6 w-6 text-pink-500" />
            Métriques de Performance
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Métriques Business</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    metric: 'Taux de Conversion',
                    target: '25%',
                    current: '18%',
                    progress: 72,
                  },
                  {
                    metric: 'Rétention Utilisateurs',
                    target: '85%',
                    current: '78%',
                    progress: 92,
                  },
                  {
                    metric: 'Temps d\'Engagement',
                    target: '45 min',
                    current: '32 min',
                    progress: 71,
                  },
                  {
                    metric: 'Satisfaction Utilisateur',
                    target: '4.5/5',
                    current: '4.2/5',
                    progress: 93,
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-black/20 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-pink-400 font-medium">{item.metric}</span>
                      <span className="text-white">{item.current}</span>
                    </div>
                    <div className="h-2 bg-purple-900/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Objectif: {item.target}</span>
                      <span>{item.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Métriques Techniques</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    metric: 'Précision des Recommandations',
                    target: '95%',
                    current: '91%',
                    progress: 96,
                  },
                  {
                    metric: 'Temps de Réponse API',
                    target: '< 100ms',
                    current: '132ms',
                    progress: 76,
                  },
                  {
                    metric: 'Disponibilité Système',
                    target: '99.95%',
                    current: '99.91%',
                    progress: 99,
                  },
                  {
                    metric: 'Ratio de Dette Technique',
                    target: '< 5%',
                    current: '7.5%',
                    progress: 67,
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-black/20 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-pink-400 font-medium">{item.metric}</span>
                      <span className="text-white">{item.current}</span>
                    </div>
                    <div className="h-2 bg-purple-900/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>Objectif: {item.target}</span>
                      <span>{item.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-pink-500" />
            Alertes & Notifications
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Seuils d'Alerte</h4>
              <div className="space-y-3">
                {[
                  {
                    metric: 'Utilisation CPU',
                    warning: '70%',
                    critical: '85%',
                    action: 'Scale up automatique',
                  },
                  {
                    metric: 'Utilisation Mémoire',
                    warning: '75%',
                    critical: '90%',
                    action: 'Nettoyage cache',
                  },
                  {
                    metric: 'Latence API',
                    warning: '200ms',
                    critical: '500ms',
                    action: 'Optimisation requêtes',
                  },
                  {
                    metric: 'Taux d'Erreur',
                    warning: '1%',
                    critical: '5%',
                    action: 'Investigation immédiate',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-black/20 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-pink-400 font-medium">{item.metric}</span>
                      <div className="flex gap-2">
                        <span className="text-amber-400 text-sm">⚠️ {item.warning}</span>
                        <span className="text-red-400 text-sm">🚨 {item.critical}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-300">
                      Action: {item.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Canaux de Notification</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    channel: 'Email',
                    priority: 'Moyenne',
                    team: 'Support & Ops',
                    response: '< 4h',
                  },
                  {
                    channel: 'Slack',
                    priority: 'Élevée',
                    team: 'Dev & Ops',
                    response: '< 1h',
                  },
                  {
                    channel: 'SMS',
                    priority: 'Critique',
                    team: 'On-Call',
                    response: '< 15min',
                  },
                  {
                    channel: 'Dashboard',
                    priority: 'Info',
                    team: 'Tous',
                    response: 'Temps réel',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-black/20 p-4 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-pink-400 font-medium">{item.channel}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        item.priority === 'Critique' ? 'bg-red-900/40 text-red-400' :
                        item.priority === 'Élevée' ? 'bg-amber-900/40 text-amber-400' :
                        item.priority === 'Moyenne' ? 'bg-yellow-900/40 text-yellow-400' :
                        'bg-green-900/40 text-green-400'
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300">
                      <div>Équipe: {item.team}</div>
                      <div>Réponse: {item.response}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-2xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-4 text-white text-center">Project Success Metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: 'Recommendation Accuracy',
              target: '95%',
              importance: 'Critical',
              description: 'Percentage of recommendations rated positively by users',
            },
            {
              metric: 'User Adoption Rate',
              target: '500k users in Year 1',
              importance: 'High',
              description: 'Total active users utilizing the platform',
            },
            {
              metric: 'Streaming Platform Integrations',
              target: '5+ major platforms',
              importance: 'High',
              description: 'Number of music services connected to UTA',
            },
            {
              metric: 'System Reliability',
              target: '99.95% uptime',
              importance: 'Critical',
              description: 'Percentage of time the service is operational',
            },
          ].map((item, index) => (
            <div key={index} className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-bold text-white mb-1">{item.metric}</h4>
              <div className="flex items-center mb-2">
                <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  item.importance === 'Critical' 
                    ? 'bg-pink-900/40 text-pink-400'
                    : 'bg-purple-900/40 text-purple-400'
                }`}>
                  {item.importance}
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-2">{item.description}</p>
              <div className="mt-2 pt-2 border-t border-white/10">
                <p className="text-white font-semibold">Target: {item.target}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Monitoring;