import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Server, Database, Layout } from 'lucide-react';

const System: React.FC = () => {
  return (
    <SectionContainer id="system" title="Système d'Information UTA">
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
                <p className="text-white">React v17.0.2 avec interface moderne</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Interface utilisateur esthétique avec dégradés et animations</li>
                  <li>Visualisations de données avec Chart.js</li>
                  <li>Design responsive adapté à tous formats</li>
                </ul>
              </div>
              
              <div className="z-10 relative bg-purple-900/40 p-4 rounded-xl mb-3">
                <p className="text-pink-400 font-semibold">Fonctionnalités</p>
                <p className="text-white">Recommandations musicales avancées</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Recommandations basées sur dataset (milliers de titres)</li>
                  <li>Recommandations personnalisées</li>
                  <li>Sélection multiple (artistes, titres, genres)</li>
                  <li>Exploration visuelle des playlists</li>
                  <li>Recherche avancée avec filtres</li>
                  <li>Contrôle de la popularité via slider</li>
                  <li>Prévisualisation audio</li>
                </ul>
              </div>
              
              <div className="z-10 relative bg-purple-900/40 p-4 rounded-xl">
                <p className="text-pink-400 font-semibold">Intégration</p>
                <p className="text-white">API Spotify OAuth2</p>
                <ul className="text-gray-400 text-sm mt-1 list-disc list-inside">
                  <li>Authentification sécurisée</li>
                  <li>Accès aux données d'écoute</li>
                  <li>Synchronisation bibliothèque</li>
                  <li>Gestion des favoris</li>
                  <li>Sessions sécurisées</li>
                </ul>
              </div>
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
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">Flask 5.0</span>
              </div>
              <ul className="text-gray-400 text-sm mt-1 space-y-1">
                <li>Architecture RESTful</li>
                <li>Middleware CORS</li>
                <li>Gestion sessions flask_session</li>
                <li>15+ endpoints spécialisés</li>
              </ul>
            </div>
            
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-pink-400 font-semibold">Base de Données</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">Dataset 19MB</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-black/30 p-2 rounded-lg">
                  <p className="text-white text-sm">Caractéristiques</p>
                  <p className="text-gray-400 text-xs">Valence, energy, danceability...</p>
                </div>
                <div className="bg-black/30 p-2 rounded-lg">
                  <p className="text-white text-sm">Stockage</p>
                  <p className="text-gray-400 text-xs">Sessions & cache</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <p className="text-pink-400 font-semibold">Algorithmes</p>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full">ML</span>
              </div>
              <ul className="text-gray-400 text-sm mt-1 space-y-1">
                <li>Similarité cosinus</li>
                <li>Normalisation StandardScaler</li>
                <li>Vecteurs moyens</li>
                <li>Filtrage intelligent</li>
                <li>Traitement vectoriel numpy/scipy</li>
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
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>Architecture client-serveur</li>
                  <li>Ports: 3000 (React), 5000 (Flask)</li>
                  <li>Configuration proxy</li>
                  <li>Variables d'environnement dotenv</li>
                </ul>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 z-0"></div>
              <div className="relative z-10 p-4">
                <p className="text-pink-400 font-semibold mb-2">Services Tiers</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>API Spotify OAuth 2.0</li>
                  <li>Permissions étendues</li>
                  <li>Gestion playlists & favoris</li>
                  <li>Lecture profil & historique</li>
                </ul>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 z-0"></div>
              <div className="relative z-10 p-4">
                <p className="text-pink-400 font-semibold mb-2">Monitoring</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-pink-400 font-semibold mb-2">Authentification</p>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      <li>Intégration OAuth2 avec Spotify</li>
                      <li>JWT pour la sécurité des sessions</li>
                      <li>RBAC pour contrôle d'accès</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-pink-400 font-semibold mb-2">Déploiement</p>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      <li>AWS + Docker + Kubernetes</li>
                      <li>CI/CD avec GitHub Actions</li>
                      <li>Infrastructure as Code (Terraform)</li>
                    </ul>
                  </div>
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