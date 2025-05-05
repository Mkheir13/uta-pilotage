import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Users, Target, Lightbulb } from 'lucide-react';

const Introduction: React.FC = () => {
  return (
    <SectionContainer id="introduction" title="Project Presentation">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-pink-500" />
            About UTA
          </h3>
          <p className="text-gray-300 mb-4">
            Universal Tune Assistant (UTA) is an innovative music recommendation platform 
            that leverages artificial intelligence to create personalized music experiences. 
            Unlike traditional platforms that rely on simple genre matching, UTA analyzes 
            complex patterns in listening behaviors, emotional responses, and contextual 
            factors to provide truly personalized recommendations.
          </p>
          <p className="text-gray-300">
            The project aims to revolutionize how people discover and engage with music,
            making the experience more intuitive, personal, and meaningful across all
            music streaming platforms.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Target className="mr-2 h-6 w-6 text-pink-500" />
            Project Objectives
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Create an AI-driven music recommendation engine with 95% accuracy</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Develop cross-platform integration with major music streaming services</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Build a user-friendly interface that adapts to individual preferences</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Establish a scalable infrastructure capable of handling millions of users</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">✦</span>
              <span>Launch MVP by Q3 2025 with full feature set by Q1 2026</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20 hover:border-pink-500/30 transition-all">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text flex items-center">
            <Users className="mr-2 h-6 w-6 text-pink-500" />
            Team & Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { role: 'Project Manager', name: 'Emma Chen', expertise: 'Product Strategy, Agile Methods' },
              { role: 'Lead Developer', name: 'Marcus Johnson', expertise: 'Full-stack, AI Integration' },
              { role: 'UX Designer', name: 'Sofia Garcia', expertise: 'User Research, Interface Design' },
              { role: 'Data Scientist', name: 'Raj Patel', expertise: 'Machine Learning, Data Analysis' },
            ].map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-4 rounded-xl">
                <p className="text-pink-400 font-semibold">{member.role}</p>
                <p className="text-white font-bold">{member.name}</p>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Introduction;