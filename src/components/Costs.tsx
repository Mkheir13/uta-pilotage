import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { DollarSign, TrendingUp, BarChart } from 'lucide-react';

const Costs: React.FC = () => {
  return (
    <SectionContainer id="costs" title="Cost Estimation">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <DollarSign className="mr-2 h-6 w-6 text-pink-500" />
            Infrastructure & Services Costs
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Category</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Component</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Monthly Cost</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Annual Cost</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: 'Cloud Computing',
                    component: 'AWS EC2 Instances',
                    monthly: '$1,800',
                    annual: '$21,600',
                    notes: '12 instances across 3 regions',
                  },
                  {
                    category: 'Cloud Computing',
                    component: 'GCP Compute Engine',
                    monthly: '$1,200',
                    annual: '$14,400',
                    notes: 'Backup infrastructure',
                  },
                  {
                    category: 'Databases',
                    component: 'AWS RDS (PostgreSQL)',
                    monthly: '$900',
                    annual: '$10,800',
                    notes: 'Primary relational database',
                  },
                  {
                    category: 'Databases',
                    component: 'MongoDB Atlas',
                    monthly: '$800',
                    annual: '$9,600',
                    notes: 'Document store for metadata',
                  },
                  {
                    category: 'Databases',
                    component: 'Redis Enterprise',
                    monthly: '$500',
                    annual: '$6,000',
                    notes: 'Caching layer',
                  },
                  {
                    category: 'Storage',
                    component: 'S3 / Cloud Storage',
                    monthly: '$400',
                    annual: '$4,800',
                    notes: 'Object storage for assets',
                  },
                  {
                    category: 'ML/AI',
                    component: 'SageMaker / Vertex AI',
                    monthly: '$2,500',
                    annual: '$30,000',
                    notes: 'ML model training and serving',
                  },
                  {
                    category: 'CDN',
                    component: 'Cloudflare Enterprise',
                    monthly: '$600',
                    annual: '$7,200',
                    notes: 'Content delivery, DDoS protection',
                  },
                  {
                    category: 'Monitoring',
                    component: 'Datadog',
                    monthly: '$700',
                    annual: '$8,400',
                    notes: 'Observability platform',
                  },
                  {
                    category: 'Security',
                    component: 'Auth0',
                    monthly: '$500',
                    annual: '$6,000',
                    notes: 'Identity management',
                  },
                  {
                    category: 'Domains',
                    component: 'DNS & Certificates',
                    monthly: '$50',
                    annual: '$600',
                    notes: 'Domain registration, SSL certs',
                  },
                  {
                    category: '',
                    component: 'TOTAL',
                    monthly: '$9,950',
                    annual: '$119,400',
                    notes: '',
                    isTotal: true,
                  },
                ].map((row, index, array) => (
                  <tr
                    key={index}
                    className={`border-b border-purple-500/10 ${
                      row.isTotal 
                        ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 font-bold' 
                        : 'hover:bg-purple-900/20'
                    }`}
                  >
                    <td className="py-3 px-4 text-gray-300">{row.category}</td>
                    <td className="py-3 px-4 text-white">{row.component}</td>
                    <td className="py-3 px-4 text-gray-300">{row.monthly}</td>
                    <td className="py-3 px-4 text-gray-300">{row.annual}</td>
                    <td className="py-3 px-4 text-gray-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-pink-500" />
              Scaling Projections
            </h3>
            
            <div className="space-y-4">
              <div className="bg-black/20 p-3 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="text-white text-sm font-medium">6 Months</span>
                  <span className="text-pink-400 text-sm">$15,000/mo</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <div className="mt-2 text-xs text-gray-400">~100k active users</div>
              </div>
              
              <div className="bg-black/20 p-3 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="text-white text-sm font-medium">12 Months</span>
                  <span className="text-pink-400 text-sm">$25,000/mo</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="mt-2 text-xs text-gray-400">~500k active users</div>
              </div>
              
              <div className="bg-black/20 p-3 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="text-white text-sm font-medium">24 Months</span>
                  <span className="text-pink-400 text-sm">$40,000/mo</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="mt-2 text-xs text-gray-400">~2M active users</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
              <BarChart className="mr-2 h-5 w-5 text-pink-500" />
              Cost Optimization
            </h3>
            
            <ul className="space-y-3">
              {[
                'Reserved instances for 40% cost reduction',
                'Autoscaling based on traffic patterns',
                'Multi-tier storage strategy for data lifecycle',
                'Rightsizing instances based on utilization data',
                'Spot instances for non-critical workloads',
                'Serverless architecture for certain microservices',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 p-3 bg-gradient-to-r from-green-900/20 to-green-900/10 rounded-xl">
              <p className="text-green-400 font-medium">Estimated Annual Savings</p>
              <p className="text-white text-xl font-bold">$35,000 - $45,000</p>
              <p className="text-gray-400 text-sm">~30% reduction with optimizations</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Costs;