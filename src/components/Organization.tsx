import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { ClipboardList, GitBranch, Users, Star } from 'lucide-react';

const Organization: React.FC = () => {
  return (
    <SectionContainer id="organization" title="Organisation & Équipe">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <ClipboardList className="mr-2 h-6 w-6 text-pink-500" />
            Outils de Gestion
          </h3>
          <ul className="space-y-4">
            {[
              { name: 'Jira', desc: 'Suivi de projet Agile', icon: '📊' },
              { name: 'Confluence', desc: 'Documentation & partage de connaissances', icon: '📝' },
              { name: 'Slack', desc: 'Communication d\'équipe', icon: '💬' },
              { name: 'GitHub', desc: 'Contrôle de version & CI/CD', icon: '🔄' },
              { name: 'Figma', desc: 'Collaboration design', icon: '🎨' },
            ].map((tool, index) => (
              <li key={index} className="flex items-center">
                <span className="text-2xl mr-3">{tool.icon}</span>
                <div>
                  <p className="text-white font-medium">{tool.name}</p>
                  <p className="text-gray-400 text-sm">{tool.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Users className="mr-2 h-6 w-6 text-pink-500" />
            Notre Équipe
          </h3>
          <div className="space-y-4">
            {[
              { 
                name: 'Pizzetta Antoine', 
                role: 'Data Scientist',
                desc: 'Spécialiste en algorithmes de recommandation et analyse des données musicales',
                icon: '👨‍💻'
              },
              { 
                name: 'Mederreg Kheir-eddine', 
                role: 'Data Scientist',
                desc: 'Expert en modélisation ML et intégration Spotify API',
                icon: '👨‍💻'
              },
              { 
                name: 'Tomatis Margot', 
                role: 'Data Scientist',
                desc: 'Responsable visualisation des données et UX analytics',
                icon: '👩‍💻'
              },
            ].map((member, index) => (
              <div key={index} className="bg-purple-900/40 p-4 rounded-xl">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">{member.icon}</span>
                  <div>
                    <p className="text-pink-400 font-semibold">{member.name}</p>
                    <p className="text-white">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <GitBranch className="mr-2 h-6 w-6 text-pink-500" />
            Méthodologie Agile
          </h3>
          <div className="space-y-4">
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <p className="text-pink-400 font-semibold">Cycle de Sprint</p>
              <p className="text-white">Itérations de 2 semaines</p>
              <p className="text-gray-400 text-sm">Avec stand-ups quotidiens et revues de fin de sprint</p>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <p className="text-pink-400 font-semibold">Approche de Développement</p>
              <p className="text-white">Développement piloté par les fonctionnalités</p>
              <p className="text-gray-400 text-sm">Avec intégration et tests continus</p>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <p className="text-pink-400 font-semibold">Priorisation</p>
              <p className="text-white">Méthode MoSCoW</p>
              <p className="text-gray-400 text-sm">Must have, Should have, Could have, Won't have</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
          <Star className="mr-2 h-6 w-6 text-pink-500" />
          Matrice RACI
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="py-2 text-left text-gray-300">Activité</th>
                <th className="py-2 text-center text-gray-300">DS1</th>
                <th className="py-2 text-center text-gray-300">DS2</th>
                <th className="py-2 text-center text-gray-300">DS3</th>
              </tr>
            </thead>
            <tbody>
              {[
                { activity: 'Analyse des Besoins', ds1: 'R', ds2: 'A', ds3: 'C' },
                { activity: 'Architecture IA', ds1: 'C', ds2: 'R', ds3: 'A' },
                { activity: 'Intégration API', ds1: 'A', ds2: 'R', ds3: 'C' },
                { activity: 'Développement Algorithmes', ds1: 'R', ds2: 'C', ds3: 'A' },
                { activity: 'Visualisation Données', ds1: 'C', ds2: 'A', ds3: 'R' },
                { activity: 'Tests & Validation', ds1: 'A', ds2: 'C', ds3: 'R' },
                { activity: 'Déploiement', ds1: 'C', ds2: 'R', ds3: 'A' },
                { activity: 'Documentation Technique', ds1: 'I', ds2: 'R', ds3: 'A' },
                { activity: 'Gestion PRA/PCA', ds1: 'A', ds2: 'R', ds3: 'I' },
                { activity: 'Gestion de Budget', ds1: 'R', ds2: 'A', ds3: 'C' },
                { activity: 'Sécurité & Conformité', ds1: 'C', ds2: 'R', ds3: 'I' },
                { activity: 'Monitoring & Alertes', ds1: 'I', ds2: 'A', ds3: 'R' },
                { activity: 'Formation Utilisateurs', ds1: 'R', ds2: 'I', ds3: 'C' },
              ].map((row, index) => (
                <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-900/20">
                  <td className="py-2 text-left text-white">{row.activity}</td>
                  <td className="py-2 text-center text-gray-300">{row.ds1}</td>
                  <td className="py-2 text-center text-gray-300">{row.ds2}</td>
                  <td className="py-2 text-center text-gray-300">{row.ds3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-xs text-gray-400">
          <p>R: Responsable, A: Approbateur, C: Consulté, I: Informé</p>
          <p>DS1: Pizzetta Antoine, DS2: Mederreg Kheir-eddine, DS3: Tomatis Margot</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Organization;