import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Newsletter from './Newsletter';
import SocialLinks from './SocialLinks';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string, postId?: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [knowledgeMenuOpen, setKnowledgeMenuOpen] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setKnowledgeMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setKnowledgeMenuOpen(false);
    }, 200);
  };

  const navigation = [
    { name: 'Offres', href: 'services' },
    {
      name: 'Nous connaître',
      href: 'about',
      hasSubmenu: true,
      submenu: [
        { name: 'À propos', href: 'about' },
        { name: 'Secteurs', href: 'sectors' },
      ]
    },
    { name: 'Réalisations', href: 'cases' },
    { name: 'Blog', href: 'blog' },
    { name: 'Carrières', href: 'careers' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img
                src="/Huge@2x.svg"
                alt="Beewton"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                item.hasSubmenu ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`text-sm font-medium transition-colors py-2 ${
                        currentPage === 'about' || currentPage === 'sectors'
                          ? 'text-beewton-primary-400'
                          : 'text-gray-700 hover:text-beewton-primary-400'
                      }`}
                    >
                      {item.name}
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                        knowledgeMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      {item.submenu?.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => {
                            onNavigate(subItem.href);
                            setKnowledgeMenuOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                            currentPage === subItem.href
                              ? 'text-beewton-primary-400 bg-purple-50'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => onNavigate(item.href)}
                    className={`text-sm font-medium transition-colors ${
                      currentPage === item.href
                        ? 'text-beewton-primary-400'
                        : 'text-gray-700 hover:text-beewton-primary-400'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-beewton-primary text-white text-sm font-medium rounded-lg hover:bg-beewton-primary-600 transition-colors"
              >
                Prendre rendez-vous
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {navigation.map((item) => (
                item.hasSubmenu ? (
                  <div key={item.name}>
                    {item.submenu?.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => {
                          onNavigate(subItem.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                          currentPage === subItem.href
                            ? 'text-beewton-primary-400 bg-purple-50'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => {
                      onNavigate(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium ${
                      currentPage === item.href
                        ? 'text-beewton-primary-400 bg-purple-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 mx-4 px-4 py-2 bg-beewton-primary text-white text-sm font-medium rounded-lg hover:bg-beewton-primary-600 transition-colors text-center"
                style={{ width: 'calc(100% - 2rem)' }}
              >
                Prendre rendez-vous
              </a>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-beewton-primary text-white mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4">
              <img
                src="/Huge@2x.svg"
                alt="Beewton"
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-purple-200 text-sm mb-6">
                Des solutions numériques qui créent de la valeur, vite.
              </p>
              <div className="mb-6">
                <Newsletter compact />
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-3 text-white">Suivez-nous</h4>
                <SocialLinks variant="light" />
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-white">Offres</h3>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Conseil & AMOA</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Produit & UX</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Développement</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Data & IA</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Cloud & Cyber</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-white">Secteurs</h3>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><button onClick={() => onNavigate('sectors')} className="hover:text-white transition-colors">Secteur public</button></li>
                <li><button onClick={() => onNavigate('sectors')} className="hover:text-white transition-colors">Finance</button></li>
                <li><button onClick={() => onNavigate('sectors')} className="hover:text-white transition-colors">Retail</button></li>
                <li><button onClick={() => onNavigate('sectors')} className="hover:text-white transition-colors">Industrie</button></li>
                <li><button onClick={() => onNavigate('sectors')} className="hover:text-white transition-colors">Télécom</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-white">Entreprise</h3>
              <ul className="space-y-2 text-sm text-purple-200">
                <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">À propos</button></li>
                <li><button onClick={() => onNavigate('careers')} className="hover:text-white transition-colors">Carrières</button></li>
                <li><button onClick={() => onNavigate('cases')} className="hover:text-white transition-colors">Réalisations</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-semibold mb-4 text-white">Implantations</h3>
              <ul className="space-y-3 text-sm text-purple-200">
                <li>
                  <p className="font-medium text-white">Paris, France</p>
                  <p className="text-xs">Siège européen</p>
                </li>
                <li>
                  <p className="font-medium text-white">Cotonou, Bénin</p>
                  <p className="text-xs">Centre nearshore</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-purple-200">
              &copy; {new Date().getFullYear()} Beewton. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-purple-200">
              <button onClick={() => onNavigate('legal')} className="hover:text-white transition-colors">Mentions légales</button>
              <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Politique de confidentialité</button>
              <button onClick={() => onNavigate('cookies')} className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
