import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Server, Database, Layout } from 'lucide-react';

const System: React.FC = () => {
  return (
    <SectionContainer id="system" title="Current Information System">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Server className="mr-2 h-6 w-6 text-pink-500" />
            Dev Infrastructure
          </h3>
          <div className="space-y-5">
            <div className="relative">
              <div className="z-10 relative bg-purple-900/40 p-4 rounded-xl mb-3">
                <p className="text-pink-400 font-semibold">Version Control</p>
                <p className="text-white">GitHub with trunk-based development</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Protected main branch with code reviews</li>
                  <li>Automated CI/CD pipeline</li>
                </ul>
              </div>
              
              <div className="z-10 relative bg-purple-900/40 p-4 rounded-xl mb-3">
                <p className="text-pink-400 font-semibold">Environments</p>
                <p className="text-white">Containerized with Docker</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Development, Staging, and Production</li>
                  <li>Kubernetes orchestration</li>
                </ul>
              </div>
              
              <div className="z-10 relative bg-purple-900/40 p-4 rounded-xl">
                <p className="text-pink-400 font-semibold">Cloud Providers</p>
                <p className="text-white">AWS and Google Cloud Platform</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Multi-cloud strategy for redundancy</li>
                  <li>Terraform for infrastructure as code</li>
                </ul>
              </div>
              
              {/* Decorative line */}
              <div className="absolute left-8 top-8 h-[calc(100%-34px)] w-0.5 bg-gradient-to-b from-pink-500 to-purple-500 opacity-30"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Database className="mr-2 h-6 w-6 text-pink-500" />
            Backend Systems
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-pink-400 font-semibold">API Architecture</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">RESTful & GraphQL</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">Serving both mobile and web clients with optimized responses</p>
            </div>
            
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-pink-400 font-semibold">Database Architecture</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">Polyglot Persistence</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-black/30 p-2 rounded-lg">
                  <p className="text-white text-sm">PostgreSQL</p>
                  <p className="text-gray-400 text-xs">Relational data</p>
                </div>
                <div className="bg-black/30 p-2 rounded-lg">
                  <p className="text-white text-sm">MongoDB</p>
                  <p className="text-gray-400 text-xs">User preferences</p>
                </div>
                <div className="bg-black/30 p-2 rounded-lg">
                  <p className="text-white text-sm">Redis</p>
                  <p className="text-gray-400 text-xs">Caching</p>
                </div>
                <div className="bg-black/30 p-2 rounded-lg">
                  <p className="text-white text-sm">Neo4j</p>
                  <p className="text-gray-400 text-xs">Music relationships</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-pink-400 font-semibold">Processing Pipeline</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">ML & Streaming</span>
              </div>
              <ul className="text-gray-400 text-sm mt-1 space-y-1">
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">➔</span>
                  <span>Kafka for event streaming</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">➔</span>
                  <span>Spark for distributed processing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">➔</span>
                  <span>TensorFlow for recommendation models</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Layout className="mr-2 h-6 w-6 text-pink-500" />
            Frontend Stack
          </h3>
          <div className="space-y-5">
            <div className="overflow-hidden rounded-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 z-0"></div>
              <div className="relative z-10 p-4">
                <p className="text-pink-400 font-semibold mb-2">Web Application</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Redux'].map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 text-white rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 z-0"></div>
              <div className="relative z-10 p-4">
                <p className="text-pink-400 font-semibold mb-2">Mobile Applications</p>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Swift', 'Kotlin', 'Flutter'].map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 text-white rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 z-0"></div>
              <div className="relative z-10 p-4">
                <p className="text-pink-400 font-semibold mb-2">UX/UI Design</p>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Principle', 'Lottie'].map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 text-white rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 z-0"></div>
              <div className="relative z-10 p-4">
                <p className="text-pink-400 font-semibold mb-2">Testing Framework</p>
                <div className="flex flex-wrap gap-2">
                  {['Jest', 'React Testing Library', 'Cypress', 'Detox'].map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 text-white rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default System;