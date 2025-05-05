import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Server, Database, Cloud, ShieldCheck, Network } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <SectionContainer id="architecture" title="Target Architecture">
      <div className="mb-8 relative">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Network className="mr-2 h-6 w-6 text-pink-500" />
            System Architecture Overview
          </h3>
          
          <div className="relative">
            {/* Architecture diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* User Layer */}
              <div className="md:col-span-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-3">User Layer</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-black/30 p-3 rounded-lg flex-1 min-w-[200px]">
                    <p className="text-pink-400 font-medium">Web Application</p>
                    <p className="text-gray-300 text-sm">React + TypeScript</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg flex-1 min-w-[200px]">
                    <p className="text-pink-400 font-medium">Mobile Apps</p>
                    <p className="text-gray-300 text-sm">React Native + Native Components</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg flex-1 min-w-[200px]">
                    <p className="text-pink-400 font-medium">Third-Party Integrations</p>
                    <p className="text-gray-300 text-sm">Music Service Plugins</p>
                  </div>
                </div>
              </div>
              
              {/* API Gateway */}
              <div className="md:col-span-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-white text-sm">
                  API Gateway + Load Balancer
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 mt-2">Service Layer</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Authentication Service</p>
                    <p className="text-gray-300 text-sm">OAuth2, JWT, Identity Management</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Recommendation Service</p>
                    <p className="text-gray-300 text-sm">AI Core, Personalization Engine</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">User Profile Service</p>
                    <p className="text-gray-300 text-sm">Preferences, History, Settings</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Content Service</p>
                    <p className="text-gray-300 text-sm">Music Metadata, Artist Info</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Analytics Service</p>
                    <p className="text-gray-300 text-sm">Usage Tracking, Performance Metrics</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Integration Service</p>
                    <p className="text-gray-300 text-sm">3rd Party API Adapters</p>
                  </div>
                </div>
              </div>
              
              {/* Data Layer */}
              <div className="md:col-span-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-xl relative mt-6">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-white text-sm">
                  Message Queue (Kafka)
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 mt-2">Data Layer</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">PostgreSQL</p>
                    <p className="text-gray-300 text-sm">User Data, Relationships</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">MongoDB</p>
                    <p className="text-gray-300 text-sm">Music Metadata, Flexible Schemas</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Redis</p>
                    <p className="text-gray-300 text-sm">Caching, Session Data</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Elasticsearch</p>
                    <p className="text-gray-300 text-sm">Search, Analytics</p>
                  </div>
                </div>
              </div>
              
              {/* Infrastructure Layer */}
              <div className="md:col-span-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-xl relative mt-6">
                <h4 className="text-lg font-semibold text-white mb-3">Infrastructure Layer</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Kubernetes Clusters</p>
                    <p className="text-gray-300 text-sm">Container Orchestration</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">Multi-Cloud Environment</p>
                    <p className="text-gray-300 text-sm">AWS, GCP for Redundancy</p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-pink-400 font-medium">CI/CD Pipeline</p>
                    <p className="text-gray-300 text-sm">GitHub Actions, Jenkins</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Connection lines to show relationships */}
            <div className="hidden md:block absolute top-[100px] left-1/2 w-0.5 h-16 bg-pink-500/30"></div>
            <div className="hidden md:block absolute top-[280px] left-1/2 w-0.5 h-16 bg-pink-500/30"></div>
            <div className="hidden md:block absolute top-[460px] left-1/2 w-0.5 h-16 bg-pink-500/30"></div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Cloud className="mr-2 h-6 w-6 text-pink-500" />
            Infrastructure Tools
          </h3>
          <div className="space-y-4">
            {[
              { tool: 'Terraform', purpose: 'Infrastructure as code for consistent environments' },
              { tool: 'Docker & Kubernetes', purpose: 'Containerization and orchestration' },
              { tool: 'Prometheus & Grafana', purpose: 'Monitoring and observability' },
              { tool: 'ELK Stack', purpose: 'Logging and analysis' },
              { tool: 'Istio', purpose: 'Service mesh for microservices' },
              { tool: 'Vault', purpose: 'Secrets management' },
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="w-1/3 font-medium text-pink-400">{item.tool}</div>
                <div className="w-2/3 text-gray-300">{item.purpose}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <ShieldCheck className="mr-2 h-6 w-6 text-pink-500" />
            Security Architecture
          </h3>
          <div className="space-y-4">
            {[
              {
                category: 'Authentication & Authorization',
                features: [
                  'OAuth2 and OIDC compliant',
                  'Role-based access control (RBAC)',
                  'Multi-factor authentication',
                ]
              },
              {
                category: 'Data Protection',
                features: [
                  'Encryption at rest and in transit',
                  'Data anonymization for analytics',
                  'GDPR and CCPA compliance measures',
                ]
              },
              {
                category: 'Network Security',
                features: [
                  'API gateway with rate limiting',
                  'Web Application Firewall (WAF)',
                  'DDoS protection',
                ]
              },
            ].map((section, index) => (
              <div key={index} className="bg-black/20 p-3 rounded-lg">
                <p className="text-pink-400 font-medium mb-2">{section.category}</p>
                <ul className="space-y-1">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Architecture;