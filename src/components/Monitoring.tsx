import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { LineChart, BarChart3, PieChart, Gauge } from 'lucide-react';

const Monitoring: React.FC = () => {
  return (
    <SectionContainer id="monitoring" title="Strategic Monitoring & KPIs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <LineChart className="mr-2 h-6 w-6 text-pink-500" />
            Key Performance Indicators
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Business KPIs</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    metric: 'User Acquisition Rate',
                    target: '10,000+ users/month',
                    current: '8,700 users/month',
                    progress: 87,
                  },
                  {
                    metric: 'User Retention Rate',
                    target: '85% after 30 days',
                    current: '78% after 30 days',
                    progress: 92,
                  },
                  {
                    metric: 'Partnership Growth',
                    target: '3 new integrations/quarter',
                    current: '2 integrations/quarter',
                    progress: 67,
                  },
                  {
                    metric: 'Revenue Growth',
                    target: '15% MoM growth',
                    current: '12% MoM growth',
                    progress: 80,
                  },
                ].map((kpi, index) => (
                  <div key={index} className="bg-black/20 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-white text-sm font-medium">{kpi.metric}</span>
                      <span className="text-pink-400 text-xs">{kpi.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" 
                        style={{ width: `${kpi.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-green-400">Target: {kpi.target}</span>
                      <span className="text-gray-300">Current: {kpi.current}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technical KPIs</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    metric: 'Recommendation Accuracy',
                    target: '95%',
                    current: '91%',
                    progress: 96,
                  },
                  {
                    metric: 'API Response Time',
                    target: '< 100ms',
                    current: '132ms',
                    progress: 76,
                  },
                  {
                    metric: 'System Uptime',
                    target: '99.95%',
                    current: '99.91%',
                    progress: 99,
                  },
                  {
                    metric: 'Technical Debt Ratio',
                    target: '< 5%',
                    current: '7.5%',
                    progress: 67,
                  },
                ].map((kpi, index) => (
                  <div key={index} className="bg-black/20 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-white text-sm font-medium">{kpi.metric}</span>
                      <span className="text-pink-400 text-xs">{kpi.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" 
                        style={{ width: `${kpi.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-green-400">Target: {kpi.target}</span>
                      <span className="text-gray-300">Current: {kpi.current}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <BarChart3 className="mr-2 h-6 w-6 text-pink-500" />
            Monitoring Strategy
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Monitoring Tools</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    tool: 'Datadog',
                    purpose: 'Infrastructure & Application Monitoring',
                    icon: <Gauge className="h-5 w-5 text-blue-400" />,
                  },
                  {
                    tool: 'Grafana',
                    purpose: 'Metrics Visualization & Dashboards',
                    icon: <PieChart className="h-5 w-5 text-orange-400" />,
                  },
                  {
                    tool: 'ELK Stack',
                    purpose: 'Log Collection & Analysis',
                    icon: <BarChart3 className="h-5 w-5 text-green-400" />,
                  },
                  {
                    tool: 'Prometheus',
                    purpose: 'Time-Series Metrics',
                    icon: <LineChart className="h-5 w-5 text-red-400" />,
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-black/20 p-3 rounded-lg flex items-center">
                    <div className="mr-3 p-2 bg-black/30 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{item.tool}</p>
                      <p className="text-gray-400 text-xs">{item.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Reporting Frequency</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="py-2 text-left text-gray-300">Metric Category</th>
                      <th className="py-2 text-center text-gray-300">Daily</th>
                      <th className="py-2 text-center text-gray-300">Weekly</th>
                      <th className="py-2 text-center text-gray-300">Monthly</th>
                      <th className="py-2 text-center text-gray-300">Quarterly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: 'Technical Performance', daily: true, weekly: true, monthly: true, quarterly: true },
                      { category: 'User Growth & Retention', daily: true, weekly: true, monthly: true, quarterly: true },
                      { category: 'Algorithm Accuracy', daily: true, weekly: true, monthly: true, quarterly: false },
                      { category: 'Revenue & Costs', daily: false, weekly: true, monthly: true, quarterly: true },
                      { category: 'Security & Compliance', daily: true, weekly: true, monthly: true, quarterly: true },
                      { category: 'Team Velocity', daily: false, weekly: true, monthly: true, quarterly: true },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-900/20">
                        <td className="py-2 text-left text-white">{row.category}</td>
                        <td className="py-2 text-center">
                          {row.daily ? <span className="text-green-500">✓</span> : <span className="text-gray-600">-</span>}
                        </td>
                        <td className="py-2 text-center">
                          {row.weekly ? <span className="text-green-500">✓</span> : <span className="text-gray-600">-</span>}
                        </td>
                        <td className="py-2 text-center">
                          {row.monthly ? <span className="text-green-500">✓</span> : <span className="text-gray-600">-</span>}
                        </td>
                        <td className="py-2 text-center">
                          {row.quarterly ? <span className="text-green-500">✓</span> : <span className="text-gray-600">-</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Review Meetings</h4>
              <div className="space-y-3">
                {[
                  {
                    meeting: 'Daily Standup',
                    participants: 'Development Team',
                    focus: 'Technical metrics, blockers, priorities',
                  },
                  {
                    meeting: 'Weekly Review',
                    participants: 'Project Leaders',
                    focus: 'KPI trends, upcoming milestones, resource allocation',
                  },
                  {
                    meeting: 'Monthly Strategic',
                    participants: 'All Stakeholders',
                    focus: 'Business KPIs, market trends, strategic adjustments',
                  },
                  {
                    meeting: 'Quarterly Planning',
                    participants: 'Executives + Team Leads',
                    focus: 'Roadmap review, major initiatives, budget allocation',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-black/20 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">{item.meeting}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-white">{item.participants}</span>
                      <span className="text-gray-400">{item.focus}</span>
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