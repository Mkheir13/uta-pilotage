import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Layers, Users, Database, Shield, Cloud, Code, GitBranch } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const Architecture: React.FC = () => {
  const layers = [
    {
      title: 'Couche Utilisateur',
      icon: <Users className="h-6 w-6 text-pink-500" />,
      sections: [
        {
          subtitle: 'Application Web',
          items: [
            'React + TypeScript pour interface moderne',
            'Chart.js pour visualisations musicales',
            'Interface intuitive d\'exploration'
          ]
        },
        {
          subtitle: 'Applications Mobiles',
          items: [
            'React Native + Composants Natifs',
            'Synchronisation multi-appareils',
            'Expérience mobile optimisée'
          ]
        },
        {
          subtitle: 'Intégrations Tierces',
          items: [
            'Plugins services de streaming',
            'Widgets embarquables',
            'APIs partenaires'
          ]
        }
      ]
    },
    {
      title: 'Couche Service',
      icon: <Code className="h-6 w-6 text-pink-500" />,
      sections: [
        {
          subtitle: 'Service d\'Authentification',
          items: [
            'OAuth2 multi-plateformes',
            'Gestion JWT sécurisée',
            'Contrôle d\'accès avancé'
          ]
        },
        {
          subtitle: 'Service de Recommandation',
          items: [
            'Noyau IA multi-algorithmes',
            'Moteur de personnalisation',
            'Système hybride de filtrage'
          ]
        },
        {
          subtitle: 'Services Annexes',
          items: [
            'Gestion des profils utilisateurs',
            'Base de métadonnées musicales',
            'Analyse et métriques'
          ]
        }
      ]
    },
    {
      title: 'Couche Données',
      icon: <Database className="h-6 w-6 text-pink-500" />,
      sections: [
        {
          subtitle: 'Bases Relationnelles',
          items: [
            'PostgreSQL: données utilisateurs',
            'Relations et préférences',
            'Historiques d\'écoute'
          ]
        },
        {
          subtitle: 'NoSQL & Cache',
          items: [
            'MongoDB: métadonnées musicales',
            'Redis: cache et files d\'attente',
            'Elasticsearch: recherche avancée'
          ]
        }
      ]
    },
    {
      title: 'Couche Infrastructure',
      icon: <Cloud className="h-6 w-6 text-pink-500" />,
      sections: [
        {
          subtitle: 'Orchestration',
          items: [
            'Clusters Kubernetes',
            'Auto-scaling horizontal',
            'Déploiements progressifs'
          ]
        },
        {
          subtitle: 'Multi-Cloud',
          items: [
            'AWS: services principaux',
            'GCP: ML et redondance',
            'Multi-régions global'
          ]
        },
        {
          subtitle: 'DevOps',
          items: [
            'Pipeline CI/CD complet',
            'Tests automatisés',
            'Infrastructure-as-code'
          ]
        }
      ]
    }
  ];

  const security = {
    icon: <Shield className="h-6 w-6 text-purple-400" />,
    title: 'Sécurité',
    subtitle: 'Sécurité',
    sections: [
      'Encryptage SSL/TLS',
      'Validation des entrées',
      'Protection CSRF/XSS',
      'Audit de vulnérabilités',
      'Chiffrement des données',
    ]
  };

  return (
    <SectionContainer id="architecture" title="Architecture Cible">
      <div className="space-y-12">
        {/* Architecture en couches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {layers.map((layer, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all"
            >
              <div className="flex items-center mb-6">
                {layer.icon}
                <h3 className="text-xl font-bold ml-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  {layer.title}
                </h3>
              </div>

              <div className="space-y-6">
                {layer.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="bg-purple-900/40 p-4 rounded-xl">
                    <h4 className="text-pink-400 font-semibold mb-2">{section.subtitle}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-pink-500 mr-2">▷</span>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sécurité */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Sécurité */}
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-6 rounded-2xl backdrop-blur-sm border border-pink-500/30">
            <div className="flex items-center mb-6">
              {security.icon}
              <h3 className="text-xl font-bold ml-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                {security.title}
              </h3>
            </div>

            <div className="space-y-4">
              {security.sections.map((section, index) => (
                <div key={index} className="bg-black/20 p-4 rounded-xl">
                  <h4 className="text-pink-400 font-semibold mb-2">{section}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Architecture;