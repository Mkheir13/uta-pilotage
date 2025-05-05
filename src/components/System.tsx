import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Server, Database, Layout } from 'lucide-react';

const System: React.FC = () => {
  return (
    <SectionContainer id="system" title="Système d'Information Actuel">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Server className="mr-2 h-6 w-6 text-pink-500" />
            Frontend
          </h3>
          <div className="space-y-5">
            <div className="relative">
              <div className="z-10 relative bg-purple-900/40 p-4 rounded-xl mb-3">
                <p className="text-pink-400 font-semibold">Application Web</p>
                <p className="text-white">React avec interface utilisateur intuitive</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Hébergée sur un serveur web</li>
                  <li>Interface utilisateur esthétique</li>
                </ul>
              </div>
              
              <div className="z-10 relative bg-purple-900/40 p-4 rounded-xl mb-3">
                <p className="text-pink-400 font-semibold">Fonctionnalités</p>
                <p className="text-white">Recommandations musicales personnalisées</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Recommandations basées sur un dataset</li>
                  <li>Recommandations basées sur l'historique</li>
                  <li>Recommandations personnalisées</li>
                  <li>Exploration des playlists</li>
                </ul>
              </div>
              
              <div className="z-10 relative bg-purple-900/40 p-4 rounded-xl">
                <p className="text-pink-400 font-semibold">Intégration</p>
                <p className="text-white">API Spotify</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Authentification utilisateur</li>
                  <li>Accès aux données d'écoute</li>
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
            Backend
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-pink-400 font-semibold">API</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">Flask</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">API Flask déployée sur un serveur web</p>
            </div>
            
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-pink-400 font-semibold">Base de Données</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">Dataset & BD</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-black/30 p-2 rounded-lg">
                  <p className="text-white text-sm">Dataset CSV</p>
                  <p className="text-gray-400 text-xs">Recommandations</p>
                </div>
                <div className="bg-black/30 p-2 rounded-lg">
                  <p className="text-white text-sm">Base de données</p>
                  <p className="text-gray-400 text-xs">Données utilisateur</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-pink-400 font-semibold">Algorithmes</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">ML</span>
              </div>
              <ul className="text-gray-400 text-sm mt-1 space-y-1">
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">➔</span>
                  <span>Algorithmes de recommandation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">➔</span>
                  <span>Analyse des données d'écoute</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2">➔</span>
                  <span>Personnalisation des recommandations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Layout className="mr-2 h-6 w-6 text-pink-500" />
            DevOps
          </h3>
          <div className="space-y-5">
            <div className="overflow-hidden rounded-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 z-0"></div>
              <div className="relative z-10 p-4">
                <p className="text-pink-400 font-semibold mb-2">Infrastructure</p>
                <div className="flex flex-wrap gap-2">
                  {['Serveur Web', 'Cloud', 'CI/CD'].map((tech, i) => (
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
                <p className="text-pink-400 font-semibold mb-2">Services Tiers</p>
                <div className="flex flex-wrap gap-2">
                  {['API Spotify', 'Hébergement Cloud', 'Pipeline CI/CD'].map((tech, i) => (
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
                <p className="text-pink-400 font-semibold mb-2">Monitoring</p>
                <div className="flex flex-wrap gap-2">
                  {['Performance', 'Qualité', 'Disponibilité'].map((tech, i) => (
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