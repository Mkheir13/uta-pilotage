import React from 'react';
import SectionContainer from './layout/SectionContainer';
import { Calendar, CheckCircle, Circle, Clock } from 'lucide-react';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      month: 'January',
      title: 'Project Initiation',
      status: 'completed',
      deliverables: [
        'Team formation and role assignments',
        'Initial project scope and vision document',
        'Technology stack selection and justification',
        'Development environment setup',
      ],
    },
    {
      month: 'February',
      title: 'Architecture & Planning',
      status: 'completed',
      deliverables: [
        'System architecture blueprint',
        'Data flow diagrams and API specifications',
        'Infrastructure requirements document',
        'Development roadmap and sprint planning',
      ],
    },
    {
      month: 'March',
      title: 'Core Algorithm Development',
      status: 'inProgress',
      deliverables: [
        'Music feature extraction system',
        'User preference modeling framework',
        'Initial recommendation algorithm prototype',
        'Test dataset creation and validation metrics',
      ],
    },
    {
      month: 'April',
      title: 'MVP Release',
      status: 'upcoming',
      deliverables: [
        'Working recommendation engine with 80% accuracy',
        'Basic user interface for preference input',
        'Integration with top music streaming service',
        'Documentation and technical specifications',
        'User testing and feedback collection protocol',
      ],
    },
  ];

  return (
    <SectionContainer id="roadmap" title="Project Roadmap (January to April)">
      <div className="w-full relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 transform md:translate-x-px"></div>

        {/* Timeline items */}
        <div className="relative z-10">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`relative flex items-stretch mb-8 md:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-2 z-20">
                {milestone.status === 'completed' ? (
                  <CheckCircle className="h-8 w-8 text-green-500 bg-black rounded-full p-1" />
                ) : milestone.status === 'inProgress' ? (
                  <Clock className="h-8 w-8 text-pink-500 bg-black rounded-full p-1 animate-pulse" />
                ) : (
                  <Circle className="h-8 w-8 text-gray-500 bg-black rounded-full p-1" />
                )}
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
              }`}>
                <div 
                  className={`h-full bg-white/5 backdrop-blur-md p-6 rounded-2xl border transition-all
                    ${milestone.status === 'completed' 
                      ? 'border-green-500/30 shadow-lg shadow-green-500/5'
                      : milestone.status === 'inProgress'
                        ? 'border-pink-500/30 shadow-lg shadow-pink-500/5'
                        : 'border-purple-500/20'
                    }
                  `}
                >
                  <div className="flex items-center mb-3">
                    <Calendar className={`mr-2 h-5 w-5 ${
                      milestone.status === 'completed' ? 'text-green-400' :
                      milestone.status === 'inProgress' ? 'text-pink-400' : 'text-gray-400'
                    }`} />
                    <span className="text-lg font-semibold text-white">{milestone.month}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                    {milestone.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-gray-300 text-sm font-medium mb-2">Deliverables:</p>
                    <ul className="space-y-1.5">
                      {milestone.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 text-sm ${
                            milestone.status === 'completed' ? 'text-green-500' :
                            milestone.status === 'inProgress' ? 'text-pink-500' : 'text-gray-500'
                          }`}>●</span>
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        milestone.status === 'completed' 
                          ? 'bg-green-900/30 text-green-400'
                          : milestone.status === 'inProgress'
                            ? 'bg-pink-900/30 text-pink-400'
                            : 'bg-gray-900/30 text-gray-400'
                      }`}
                    >
                      {milestone.status === 'completed' 
                        ? 'Completed' 
                        : milestone.status === 'inProgress'
                          ? 'In Progress'
                          : 'Upcoming'
                      }
                    </div>
                    
                    {milestone.status === 'completed' && (
                      <span className="text-green-400 text-xs">100%</span>
                    )}
                    
                    {milestone.status === 'inProgress' && (
                      <span className="text-pink-400 text-xs">60%</span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Empty space for even distribution */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-purple-500/20">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Future Milestones (Post-MVP)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              phase: 'Phase II: May-July',
              goals: [
                'Expand platform integrations to top 3 music services',
                'Improve algorithm accuracy to 90%',
                'Add social sharing features',
                'Launch beta testing program'
              ]
            },
            {
              phase: 'Phase III: August-October',
              goals: [
                'Implement advanced mood detection features',
                'Add contextual awareness (time, location)',
                'Deploy enterprise API for B2B clients',
                'Scale infrastructure for 100k+ users'
              ]
            },
            {
              phase: 'Phase IV: November-January',
              goals: [
                'Full public launch with marketing campaign',
                'Implement premium features and subscription model',
                'Add artist collaboration platform',
                'Expand to international markets'
              ]
            },
          ].map((phase, index) => (
            <div key={index} className="bg-black/20 p-4 rounded-xl">
              <h4 className="text-lg font-bold text-white mb-3">{phase.phase}</h4>
              <ul className="space-y-2">
                {phase.goals.map((goal, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-500 mr-2">◆</span>
                    <span className="text-gray-300 text-sm">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Roadmap;