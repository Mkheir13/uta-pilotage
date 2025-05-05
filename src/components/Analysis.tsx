import React, { useState } from 'react';
import SectionContainer from './layout/SectionContainer';
import { BarChart, TrendingUp, Zap, Webhook, TrendingDown, Lightbulb, AlertTriangle, Globe, Users, Shield } from 'lucide-react';

const Analysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'swot' | 'pestel'>('swot');

  return (
    <SectionContainer id="analysis" title="Analyse SWOT & PESTEL">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg p-1 bg-purple-900/30 backdrop-blur-sm">
          <button className="px-4 py-2 rounded-lg bg-pink-500/20 text-pink-300 font-medium">
            SWOT
          </button>
          <button className="px-4 py-2 rounded-lg text-gray-400 hover:text-white transition-colors">
            PESTEL
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <TrendingUp className="mr-2 h-6 w-6 text-pink-500" />
            Forces
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Algorithme de recommandation transparent et explicable basé sur la similarité cosinus et StandardScaler</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Intégration complète avec Spotify via OAuth2 et permissions étendues</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Trois méthodes de recommandation : dataset CSV, historique d'écoute, recommandations personnalisées</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Interface React intuitive avec visualisations avancées et design responsive</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <TrendingDown className="mr-2 h-6 w-6 text-pink-500" />
            Faiblesses
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Dépendance totale à l'API Spotify pour l'authentification et les données</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Dataset CSV limité (19MB) comparé au catalogue complet de Spotify</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Difficultés avec les recommandations pour les genres musicaux de niche</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Infrastructure locale limitant la capacité à servir de nombreux utilisateurs</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-pink-500" />
            Opportunités
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Croissance du marché du streaming musical (400M+ utilisateurs Spotify)</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Demande croissante pour des recommandations transparentes et personnalisables</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Potentiel d'intégration avec d'autres services (Apple Music, Deezer)</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Modèle freemium pour les fonctionnalités avancées d'analyse</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-pink-500" />
            Menaces
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Modifications potentielles de l'API Spotify et ses conditions d'utilisation</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Concurrence des algorithmes de recommandation existants</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Limitations de débit et coûts potentiels de l'API Spotify</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Coûts d'infrastructure croissants avec l'augmentation des utilisateurs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Globe className="mr-2 h-6 w-6 text-pink-500" />
            Politique & Économique
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Conformité aux réglementations de propriété intellectuelle musicale</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Marché du streaming en croissance (400M+ utilisateurs)</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Potentiel de revenus via fonctionnalités premium</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Users className="mr-2 h-6 w-6 text-pink-500" />
            Social & Technologique
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Évolution rapide des tendances d'écoute musicale</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Communauté existante d'utilisateurs Spotify</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Évolution continue des API de streaming</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Progrès en algorithmes de recommandation</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Shield className="mr-2 h-6 w-6 text-pink-500" />
            Environnemental & Légal
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Impact environnemental des services cloud</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Conformité RGPD pour les données utilisateur</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">➔</span>
              <span className="text-gray-300">Gestion des données d'écoute et préférences</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Analysis;