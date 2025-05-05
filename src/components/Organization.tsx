import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { ClipboardList, GitBranch, Users } from 'lucide-react';

const Organization: React.FC = () => {
  return (
    <SectionContainer id="organization" title="Current State & Organization">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <ClipboardList className="mr-2 h-6 w-6 text-pink-500" />
            Project Management Tools
          </h3>
          <ul className="space-y-4">
            {[
              { name: 'Jira', desc: 'Agile project tracking', icon: '📊' },
              { name: 'Confluence', desc: 'Documentation & knowledge sharing', icon: '📝' },
              { name: 'Slack', desc: 'Team communication', icon: '💬' },
              { name: 'GitHub', desc: 'Version control & CI/CD', icon: '🔄' },
              { name: 'Figma', desc: 'Design collaboration', icon: '🎨' },
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
            <GitBranch className="mr-2 h-6 w-6 text-pink-500" />
            Agile Methodology
          </h3>
          <div className="space-y-4">
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <p className="text-pink-400 font-semibold">Sprint Cycle</p>
              <p className="text-white">2-week iterations</p>
              <p className="text-gray-400 text-sm">With daily standups and end-of-sprint reviews</p>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <p className="text-pink-400 font-semibold">Development Approach</p>
              <p className="text-white">Feature-driven development</p>
              <p className="text-gray-400 text-sm">With continuous integration and testing</p>
            </div>
            <div className="bg-purple-900/40 p-4 rounded-xl">
              <p className="text-pink-400 font-semibold">Prioritization</p>
              <p className="text-white">MoSCoW method</p>
              <p className="text-gray-400 text-sm">Must have, Should have, Could have, Won't have</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Users className="mr-2 h-6 w-6 text-pink-500" />
            RACI Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-purple-500/30">
                  <th className="py-2 text-left text-gray-300">Activity</th>
                  <th className="py-2 text-center text-gray-300">PM</th>
                  <th className="py-2 text-center text-gray-300">Dev</th>
                  <th className="py-2 text-center text-gray-300">UX</th>
                  <th className="py-2 text-center text-gray-300">DS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { activity: 'Requirements', pm: 'R', dev: 'C', ux: 'A', ds: 'I' },
                  { activity: 'Architecture', pm: 'A', dev: 'R', ux: 'C', ds: 'C' },
                  { activity: 'UI Design', pm: 'A', dev: 'I', ux: 'R', ds: 'C' },
                  { activity: 'Development', pm: 'A', dev: 'R', ux: 'C', ds: 'I' },
                  { activity: 'Algorithm', pm: 'A', dev: 'C', ux: 'I', ds: 'R' },
                  { activity: 'Testing', pm: 'A', dev: 'R', ux: 'C', ds: 'C' },
                  { activity: 'Deployment', pm: 'A', dev: 'R', ux: 'I', ds: 'C' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-purple-500/10 hover:bg-purple-900/20">
                    <td className="py-2 text-left text-white">{row.activity}</td>
                    <td className="py-2 text-center text-gray-300">{row.pm}</td>
                    <td className="py-2 text-center text-gray-300">{row.dev}</td>
                    <td className="py-2 text-center text-gray-300">{row.ux}</td>
                    <td className="py-2 text-center text-gray-300">{row.ds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-xs text-gray-400">
            <p>R: Responsible, A: Accountable, C: Consulted, I: Informed</p>
            <p>PM: Project Manager, Dev: Developer, UX: Designer, DS: Data Scientist</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Organization;