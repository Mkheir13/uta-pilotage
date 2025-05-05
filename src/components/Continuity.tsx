import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { ShieldAlert, Rabbit, Clock, CheckSquare } from 'lucide-react';

const Continuity: React.FC = () => {
  return (
    <SectionContainer id="continuity" title="PRA / PCA - Continuité d'Activité">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <ShieldAlert className="mr-2 h-6 w-6 text-pink-500" />
            Reprise d'Activité (PRA)
          </h3>
          
          <div className="space-y-5">
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Systèmes Critiques</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { system: 'Authentification Utilisateur', rto: '15 min', rpo: '< 5 min' },
                  { system: 'Moteur de Recommandation', rto: '30 min', rpo: '< 10 min' },
                  { system: 'Passerelle API', rto: '15 min', rpo: '< 5 min' },
                  { system: 'Stockage Données Utilisateur', rto: '1 heure', rpo: '0 (aucune perte)' },
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
              <h4 className="text-lg font-semibold text-white mb-3">Stratégie de Reprise</h4>
              <ul className="space-y-2">
                {[
                  'Déploiement multi-région avec basculement automatique',
                  'Réplication des données en temps réel entre régions géographiques',
                  'Système de secours froid pour les services non critiques',
                  'Infrastructure immuable avec provisionnement automatisé',
                  'Exercices de reprise trimestriels',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">▶</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Scénarios de Sinistre</h4>
              <div className="space-y-3">
                {[
                  { title: 'Panne du Fournisseur Cloud', plan: 'Basculement automatique vers la région secondaire' },
                  { title: 'Corruption de Base de Données', plan: 'Reprise à un point dans le temps avec les journaux de transactions' },
                  { title: 'Attaque Malveillante', plan: 'Restauration depuis un environnement isolé et des sauvegardes sécurisées' },
                  { title: 'Défaillance de Service Critique', plan: 'Circuit breaking et dégradation gracieuse' },
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
            Continuité d'Activité (PCA)
          </h3>
          
          <div className="space-y-5">
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3">Évaluation des Risques</h4>
              <div className="space-y-3">
                {[
                  {
                    risk: 'Échec d\'Intégration API de Service',
                    impact: 'Élevé',
                    probability: 'Moyen',
                    mitigation: 'Repli sur les recommandations en cache',
                  },
                  {
                    risk: 'Violation de la Confidentialité des Données',
                    impact: 'Critique',
                    probability: 'Faible',
                    mitigation: 'Chiffrement, contrôles d\'accès, audit',
                  },
                  {
                    risk: 'Dégradation des Performances de l\'Algorithme',
                    impact: 'Moyen',
                    probability: 'Moyen',
                    mitigation: 'Surveillance des performances, modèles de repli',
                  },
                  {
                    risk: 'Dépendance aux Personnes Clés',
                    impact: 'Moyen',
                    probability: 'Moyen',
                    mitigation: 'Partage des connaissances, documentation',
                  },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 text-sm">
                    <div className="font-medium text-pink-400">{item.risk}</div>
                    <div className="text-white">{item.impact}</div>
                    <div className="text-gray-300">{item.probability}</div>
                    <div className="text-gray-400">{item.mitigation}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-pink-400" />
                Objectifs de Temps de Réponse
              </h4>
              <div className="space-y-2">
                {[
                  { phase: 'Réponse Initiale', timeframe: '< 15 minutes', actions: 'Alerte équipe, évaluation initiale' },
                  { phase: 'Restauration du Service', timeframe: '< 1 heure', actions: 'Récupération des fonctions critiques' },
                  { phase: 'Reprise Complète', timeframe: '< 4 heures', actions: 'Tous les systèmes opérationnels' },
                  { phase: 'Post-Incident', timeframe: '< 24 heures', actions: 'Analyse, mesures préventives' },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-2">
                    <div className="font-medium text-pink-400">{item.phase}</div>
                    <div className="text-white">{item.timeframe}</div>
                    <div className="text-gray-300 text-sm">{item.actions}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Continuity;