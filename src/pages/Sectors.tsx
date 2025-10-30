import React from 'react';
import { Building2, Landmark, ShoppingCart, Factory, Radio, ArrowRight } from 'lucide-react';

interface SectorsProps {
  onNavigate: (page: string, postId?: string) => void;
}

const Sectors: React.FC<SectorsProps> = ({ onNavigate }) => {
  const sectors = [
    {
      id: 'public',
      icon: Landmark,
      title: 'Secteur public',
      description: 'Simplifier les démarches, maîtriser les coûts, améliorer l\'accès aux services.',
      useCases: [
        'Portails citoyens & services en ligne',
        'Dématérialisation de procédures',
        'Interopérabilité (APIs)',
        'Accessibilité RGAA',
        'Sécurité & conformité',
      ],
      color: 'blue',
    },
    {
      id: 'finance',
      icon: Building2,
      title: 'Services financiers',
      description: 'Innovation digitale, conformité et expérience client au service de la finance.',
      useCases: [
        'Applications bancaires mobiles',
        'Parcours client digitaux',
        'Open banking & APIs',
        'Conformité réglementaire',
        'Data analytics & fraude',
      ],
      color: 'green',
    },
    {
      id: 'retail',
      icon: ShoppingCart,
      title: 'Retail & e-commerce',
      description: 'Expériences d\'achat fluides et personnalisées, online et offline.',
      useCases: [
        'Plateformes e-commerce',
        'Applications mobile commerce',
        'Personnalisation & recommandations',
        'Gestion omnicanale',
        'Analytics & conversion',
      ],
      color: 'orange',
    },
    {
      id: 'industry',
      icon: Factory,
      title: 'Industrie & énergie',
      description: 'Transformation digitale pour l\'efficacité opérationnelle et la durabilité.',
      useCases: [
        'IoT & monitoring industriel',
        'Maintenance prédictive',
        'Optimisation énergétique',
        'Digital twin & simulation',
        'Supply chain digitale',
      ],
      color: 'slate',
    },
    {
      id: 'telecom',
      icon: Radio,
      title: 'Télécom',
      description: 'Expérience client, infrastructures et services pour l\'ère du tout connecté.',
      useCases: [
        'Portails clients & self-care',
        'BSS/OSS modernisation',
        'Network analytics',
        'IoT & edge computing',
        'Cloud-native architecture',
      ],
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-purple-100', text: 'text-beewton-primary-400', border: 'border-purple-200' },
      green: { bg: 'bg-teal-100', text: 'text-beewton-accent-teal', border: 'border-teal-200' },
      orange: { bg: 'bg-orange-100', text: 'text-beewton-accent-orange', border: 'border-orange-200' },
      slate: { bg: 'bg-slate-100', text: 'text-beewton-neutral-dark', border: 'border-slate-200' },
      purple: { bg: 'bg-purple-100', text: 'text-beewton-primary-500', border: 'border-purple-200' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Secteurs d'activité
            </h1>
            <p className="text-xl text-gray-600">
              Des patterns métiers éprouvés, par secteur.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              const colors = getColorClasses(sector.color);

              return (
                <div
                  key={sector.id}
                  className={`bg-white border-2 ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {sector.title}
                  </h2>

                  <p className="text-gray-600 mb-6">
                    {sector.description}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      Cas d'usage
                    </h3>
                    <ul className="space-y-2">
                      {sector.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className={`${colors.text} mr-2 font-bold`}>→</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/futuristic-dot-wave-abstract-background copy.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beewton-primary/95 via-beewton-primary/90 to-beewton-primary-600/95"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Votre secteur n'apparaît pas ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nous intervenons sur de nombreux autres domaines. Discutons de vos besoins spécifiques.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center group shadow-xl"
          >
            Contactez-nous
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
