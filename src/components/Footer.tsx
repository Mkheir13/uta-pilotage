import React from 'react';
import { Music, Github, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-purple-900 to-pink-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Music className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-2xl font-bold text-white">Universal Tune Assistant</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Revolutionizing the way people discover and experience music through 
              personalized AI-driven recommendations and cross-platform integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Projet</h3>
            <ul className="space-y-2">
              {[
                { label: 'Introduction', href: '#introduction' },
                { label: 'Organisation', href: '#organization' },
                { label: 'Système', href: '#system' },
                { label: 'Analyse', href: '#analysis' },
                { label: 'Stratégie', href: '#strategy' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Documentation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Feuille de Route', href: '#roadmap' },
                { label: 'Architecture', href: '#architecture' },
                { label: 'Continuité', href: '#continuity' },
                { label: 'Coûts', href: '#costs' },
                { label: 'Surveillance', href: '#monitoring' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Universal Tune Assistant. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;