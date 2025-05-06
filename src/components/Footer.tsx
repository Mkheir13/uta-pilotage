import React from 'react';
import utaLogo from '../assets/uta.png';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-uta-black border-t border-uta-red/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <img src={utaLogo} alt="UTA Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-uta-red">UTA</span>
            </div>
            <p className="mt-4 text-uta-white/60 max-w-xs">
              La prochaine génération de recommandation musicale propulsée par l'intelligence artificielle.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-uta-white/60 hover:text-uta-red">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-uta-white/60 hover:text-uta-red">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-uta-white/60 hover:text-uta-red">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-uta-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Introduction', href: '#introduction' },
                { name: 'Équipe', href: '#organization' },
                { name: 'Système', href: '#system' },
                { name: 'Stratégie', href: '#strategy' },
                { name: 'Roadmap', href: '#roadmap' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-uta-white/60 hover:text-uta-red transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-uta-white font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              {[
                { name: 'Architecture', href: '#architecture' },
                { name: 'PRA / PCA', href: '#continuity' },
                { name: 'Coûts', href: '#costs' },
                { name: 'SWOT & PESTEL', href: '#analysis' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-uta-white/60 hover:text-uta-red transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-uta-white/10 text-center">
          <p className="text-uta-white/40 text-sm">
            &copy; {new Date().getFullYear()} Universal Tune Assistant. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;