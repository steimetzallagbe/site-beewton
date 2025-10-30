import React from 'react';
import { Users, Palette, Code, Database, Cloud, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string, postId?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 'conseil',
      icon: Users,
      title: 'Conseil & AMOA',
      tagline: 'Du besoin au marché : cadrage, CCTP, pilotage et réussite.',
      description: 'Nous sécurisons vos projets — cadrage, CCTP, pilotage, recette et conduite du changement — pour délivrer à l\'heure, au budget, à la valeur.',
      features: [
        'Cadrage & expression de besoin',
        'Business case & ROI',
        'Co-design d\'unité d\'œuvre',
        'Rédaction CCTP & aide au choix',
        'Pilotage de projet (PMO)',
        'Recette & qualité',
        'Conduite du changement',
        'Stratégie de déploiement',
        'Mesure d\'impact',
      ],
      color: 'blue',
    },
    {
      id: 'produit',
      icon: Palette,
      title: 'Produit & UX',
      tagline: 'Design → Discovery → Delivery',
      description: 'Construire le bon produit avant de le construire bien.',
      features: [
        'Ateliers discovery',
        'UX research & tests utilisateurs',
        'Prototypage Figma',
        'Design system & composants',
        'Product ops',
        'Ergonomie & accessibilité',
        'Architecture de l\'information',
        'Design thinking',
      ],
      color: 'purple',
    },
    {
      id: 'dev',
      icon: Code,
      title: 'Développement Web & Mobile',
      tagline: 'Applications modernes, maintenables, performantes.',
      description: 'Stack moderne, qualité industrielle, time-to-market réduit.',
      features: [
        'Front (React/Next, Vue)',
        'Mobile (Flutter/React Native)',
        'Back (Node/Java/.NET)',
        'API REST & GraphQL',
        'QA automatisée',
        'CI/CD',
        'Performance & optimisation',
        'Revues de code',
      ],
      color: 'green',
    },
    {
      id: 'data',
      icon: Database,
      title: 'Data & IA',
      tagline: 'Des données activables, une IA utile et responsable.',
      description: 'Des données gouvernées, des décisions augmentées.',
      features: [
        'Modern data stack',
        'Gouvernance des données',
        'Business Intelligence',
        'IA générative (use cases métier)',
        'MLOps & industrialisation',
        'Data quality & observabilité',
        'Analytics & visualisation',
        'Sécurité by design',
      ],
      color: 'orange',
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud, DevOps & Cybersécurité',
      tagline: 'Accélérez en confiance : Cloud-native, FinOps, Zero Trust.',
      description: 'Cloud-native & Zero Trust pour livrer en confiance.',
      features: [
        'Atterrissage cloud (AWS/Azure/GCP)',
        'Architecture cloud-native',
        'CI/CD & automatisation',
        'Observabilité & monitoring',
        'Sécurité applicative',
        'FinOps & optimisation coûts',
        'Secure DevOps',
        'Infrastructure as Code',
      ],
      color: 'sky',
    },
    {
      id: 'tma',
      icon: Wrench,
      title: 'TMA & Run / Hébergement & Infogérance',
      tagline: 'Surveiller, faire évoluer et sécuriser vos applis 24/7.',
      description: 'Support continu et évolution de vos applications en production.',
      features: [
        'TMA évolutive & corrective',
        'SRE & monitoring 24/7',
        'Performance & optimisation coûts',
        'Patching sécurité',
        'Astreinte & hotline',
        'Documentation & transfer',
        'Gestion des incidents',
        'Clients satisfaits 99,9%',
      ],
      color: 'slate',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; hover: string; text: string; border: string }> = {
      blue: { bg: 'bg-purple-100', hover: 'hover:bg-beewton-primary-400', text: 'text-beewton-primary-400', border: 'border-purple-200' },
      purple: { bg: 'bg-purple-100', hover: 'hover:bg-beewton-primary-500', text: 'text-beewton-primary-500', border: 'border-purple-200' },
      green: { bg: 'bg-teal-100', hover: 'hover:bg-beewton-accent-teal', text: 'text-beewton-accent-teal', border: 'border-teal-200' },
      orange: { bg: 'bg-orange-100', hover: 'hover:bg-beewton-accent-orange', text: 'text-beewton-accent-orange', border: 'border-orange-200' },
      sky: { bg: 'bg-purple-50', hover: 'hover:bg-beewton-primary-600', text: 'text-beewton-primary-600', border: 'border-purple-200' },
      slate: { bg: 'bg-slate-100', hover: 'hover:bg-beewton-neutral-dark', text: 'text-beewton-neutral-dark', border: 'border-slate-200' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos offres
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Nous intervenons de la stratégie au run, à l'échelle.
            </p>
            <div className="bg-purple-50 border-l-4 border-beewton-primary-400 p-6 rounded-r-lg">
              <p className="text-gray-700 font-medium">
                Centre de livraison nearshore à Cotonou (Bénin) — Forfait, Régie, Centre de services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = getColorClasses(service.color);

              return (
                <div
                  key={service.id}
                  className={`bg-white border-2 ${colors.border} rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg font-medium text-gray-700 mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Nos prestations
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className={`w-5 h-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
            Discutons de votre projet
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nous vous accompagnons de bout en bout, avec une approche sur-mesure.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center group shadow-xl"
          >
            Prendre rendez-vous
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
