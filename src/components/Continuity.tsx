import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Clock, AlertTriangle, ArrowUpCircle, FileSearch } from 'lucide-react';

const Continuity: React.FC = () => {
  const criticalSystems = [
    {
      name: 'Authentification Utilisateur',
      rto: '15 min',
      rpo: '< 5 min',
      note: 'L\'authentification OAuth2 avec Spotify est essentielle pour l\'accès aux données utilisateur'
    },
    {
      name: 'Moteur de Recommandation',
      rto: '30 min',
      rpo: '< 10 min',
      note: 'Le moteur de calcul de similarité cosinus peut fonctionner avec des données légèrement datées'
    },
    {
      name: 'Passerelle API',
      rto: '15 min',
      rpo: '< 5 min',
      note: 'Interface critique entre le frontend React et le backend Flask'
    },
    {
      name: 'Stockage Données Utilisateur',
      rto: '1 heure',
      rpo: '0 (aucune perte)',
      note: 'Les préférences et historiques d\'écoute doivent être intégralement préservés'
    }
  ];

  const recoveryStrategy = [
    'Déploiement multi-région avec basculement automatique pour le serveur Flask',
    'Réplication des données en temps réel du dataset CSV entre régions géographiques',
    'Système de secours froid pour les services non critiques comme l\'analyse des tendances',
    'Infrastructure immuable avec provisionnement automatisé via des scripts de déploiement',
    'Exercices de reprise trimestriels pour valider la procédure de restauration des services'
  ];

  const disasterScenarios = [
    {
      scenario: 'Panne du Fournisseur Cloud',
      solution: 'Basculement automatique vers une infrastructure secondaire avec redirection DNS'
    },
    {
      scenario: 'Corruption de Base de Données',
      solution: 'Reprise à un point dans le temps avec les journaux de transactions et sauvegardes régulières du dataset'
    },
    {
      scenario: 'Attaque Malveillante',
      solution: 'Restauration depuis un environnement isolé et des sauvegardes sécurisées avec vérification d\'intégrité'
    },
    {
      scenario: 'Défaillance de Service Critique',
      solution: 'Circuit breaking et dégradation gracieuse avec mode offline pour les recommandations les plus récentes'
    }
  ];

  const risks = [
    {
      name: 'Échec d\'Intégration API Spotify',
      impact: 'Élevé',
      probability: 'Moyen',
      mitigation: 'Repli sur les recommandations en cache et le dataset local pour maintenir la fonctionnalité principale'
    },
    {
      name: 'Violation de la Confidentialité des Données',
      impact: 'Critique',
      probability: 'Faible',
      mitigation: 'Chiffrement des données sensibles, contrôles d\'accès rigoureux, journalisation des accès à l\'API'
    },
    {
      name: 'Dégradation des Performances de l\'Algorithme',
      impact: 'Moyen',
      probability: 'Moyen',
      mitigation: 'Surveillance constante des performances, modèles de repli plus simples mais robustes'
    },
    {
      name: 'Dépendance aux Personnes Clés',
      impact: 'Moyen',
      probability: 'Moyen',
      mitigation: 'Documentation complète du code backend (Flask) et des algorithmes de recommandation, partage des connaissances'
    }
  ];

  const responseTimelines = [
    {
      phase: 'Réponse Initiale',
      timeframe: '< 15 minutes',
      actions: 'Alerte de l\'équipe technique, évaluation initiale de l\'impact sur les services de recommandation'
    },
    {
      phase: 'Restauration du Service',
      timeframe: '< 1 heure',
      actions: 'Récupération des fonctions critiques (authentification et recommandations de base)'
    },
    {
      phase: 'Reprise Complète',
      timeframe: '< 4 heures',
      actions: 'Restauration de tous les systèmes, y compris les fonctionnalités avancées et l\'historique utilisateur'
    },
    {
      phase: 'Post-Incident',
      timeframe: '< 24 heures',
      actions: 'Analyse approfondie de la cause racine, implémentation de mesures préventives dans le code'
    }
  ];

  return (
    <SectionContainer id="continuity" title="Plan de Continuité d'Activité">
      <div className="space-y-12">
        {/* Systèmes Critiques */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Clock className="mr-2 h-6 w-6 text-pink-500" />
            Systèmes Critiques (PRA)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criticalSystems.map((system, index) => (
              <div key={index} className="bg-purple-900/40 p-4 rounded-xl">
                <h4 className="text-pink-400 font-semibold mb-2">{system.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>RTO:</span>
                    <span className="font-medium">{system.rto}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>RPO:</span>
                    <span className="font-medium">{system.rpo}</span>
                  </div>
                  <p className="text-gray-400 mt-2 italic">{system.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stratégie de Reprise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
              <ArrowUpCircle className="mr-2 h-6 w-6 text-pink-500" />
              Stratégie de Reprise
            </h3>
            <ul className="space-y-3">
              {recoveryStrategy.map((strategy, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-pink-500 mr-2">▷</span>
                  <span className="text-gray-300 text-sm">{strategy}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6 text-pink-500" />
              Scénarios de Sinistre
            </h3>
            <div className="space-y-4">
              {disasterScenarios.map((scenario, index) => (
                <div key={index} className="bg-purple-900/40 p-4 rounded-xl">
                  <h4 className="text-pink-400 font-semibold mb-2">{scenario.scenario}</h4>
                  <p className="text-gray-300 text-sm">{scenario.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Évaluation des Risques */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-6 rounded-2xl backdrop-blur-sm border border-pink-500/30">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <FileSearch className="mr-2 h-6 w-6 text-pink-500" />
            Évaluation des Risques (PCA)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {risks.map((risk, index) => (
              <div key={index} className="bg-black/20 p-4 rounded-xl">
                <h4 className="text-pink-400 font-semibold mb-2">{risk.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Impact:</span>
                    <span className="font-medium">{risk.impact}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Probabilité:</span>
                    <span className="font-medium">{risk.probability}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{risk.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline de Réponse */}
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-6 rounded-2xl backdrop-blur-sm border border-pink-500/30">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Objectifs de Temps de Réponse
          </h3>
          <div className="space-y-4">
            {responseTimelines.map((timeline, index) => (
              <div key={index} className="bg-black/20 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-pink-400 font-semibold">{timeline.phase}</h4>
                  <span className="text-gray-300 text-sm font-medium">{timeline.timeframe}</span>
                </div>
                <p className="text-gray-300 text-sm">{timeline.actions}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Continuity;