import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { DollarSign, TrendingUp, BarChart } from 'lucide-react';

const Costs: React.FC = () => {
  return (
    <SectionContainer id="costs" title="Estimation des Coûts">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <DollarSign className="mr-2 h-6 w-6 text-pink-500" />
            Coûts d'Infrastructure & Services
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Catégorie</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Composant</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Coût Mensuel</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Coût Annuel</th>
                  <th className="py-3 px-4 text-left text-gray-300 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: 'Infrastructure',
                    component: 'AWS EC2 (20 instances)',
                    monthly: '$3,000',
                    annual: '$36,000',
                    notes: 'Serveurs de production et développement',
                  },
                  {
                    category: 'Base de données',
                    component: 'AWS RDS (Multi-AZ)',
                    monthly: '$2,000',
                    annual: '$24,000',
                    notes: 'Base de données PostgreSQL hautement disponible',
                  },
                  {
                    category: 'Cache',
                    component: 'AWS ElastiCache',
                    monthly: '$1,500',
                    annual: '$18,000',
                    notes: 'Cache Redis pour les performances',
                  },
                  {
                    category: 'Stockage',
                    component: 'AWS S3',
                    monthly: '$800',
                    annual: '$9,600',
                    notes: 'Stockage des médias et sauvegardes',
                  },
                  {
                    category: 'Analytics',
                    component: 'Snowflake',
                    monthly: '$800',
                    annual: '$9,600',
                    notes: 'Entrepôt de données et analyses',
                  },
                  {
                    category: 'CDN',
                    component: 'Cloudflare Enterprise',
                    monthly: '$600',
                    annual: '$7,200',
                    notes: 'Distribution de contenu, protection DDoS',
                  },
                  {
                    category: 'Surveillance',
                    component: 'Datadog',
                    monthly: '$700',
                    annual: '$8,400',
                    notes: 'Plateforme d\'observabilité',
                  },
                  {
                    category: 'Sécurité',
                    component: 'Auth0',
                    monthly: '$500',
                    annual: '$6,000',
                    notes: 'Gestion des identités',
                  },
                  {
                    category: 'Domaines',
                    component: 'DNS & Certificats',
                    monthly: '$50',
                    annual: '$600',
                    notes: 'Enregistrement de domaine, certificats SSL',
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
              Projections d'Échelle
            </h3>
            
            <div className="space-y-4">
              <div className="bg-black/20 p-3 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="text-white text-sm font-medium">6 Mois</span>
                  <span className="text-pink-400 text-sm">$15,000/mo</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <div className="mt-2 text-xs text-gray-400">~100k utilisateurs actifs</div>
              </div>
              
              <div className="bg-black/20 p-3 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="text-white text-sm font-medium">12 Mois</span>
                  <span className="text-pink-400 text-sm">$25,000/mo</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="mt-2 text-xs text-gray-400">~500k utilisateurs actifs</div>
              </div>
              
              <div className="bg-black/20 p-3 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="text-white text-sm font-medium">24 Mois</span>
                  <span className="text-pink-400 text-sm">$40,000/mo</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="mt-2 text-xs text-gray-400">~2M utilisateurs actifs</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
              <BarChart className="mr-2 h-5 w-5 text-pink-500" />
              Optimisation des Coûts
            </h3>
            
            <ul className="space-y-3">
              {[
                'Instances réservées pour réduction de coût de 40%',
                'Autoscaling basé sur les motifs de trafic',
                'Stratégie de stockage multiniveau pour cycle de vie des données',
                'Redimensionnement des instances basé sur les données d\'utilisation',
                'Instances Spot pour charges de travail non critiques',
                'Architecture Serverless pour certains microservices',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 p-3 bg-gradient-to-r from-green-900/20 to-green-900/10 rounded-xl">
              <p className="text-green-400 font-medium">Économies annuelles estimées</p>
              <p className="text-white text-xl font-bold">$35,000 - $45,000</p>
              <p className="text-gray-400 text-sm">~30% de réduction avec des optimisations</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Costs;