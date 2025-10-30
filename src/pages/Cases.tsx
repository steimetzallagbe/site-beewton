import React from 'react';
import { ExternalLink, TrendingUp, Clock, DollarSign, Users, ArrowRight } from 'lucide-react';

interface CasesProps {
  onNavigate: (page: string, postId?: string) => void;
}

const Cases: React.FC<CasesProps> = ({ onNavigate }) => {
  const cases = [
    {
      id: 'wakoun',
      title: 'Wakoun',
      subtitle: 'Plateforme de gestion pour auto-écoles',
      description: 'Solution complète de gestion administrative et pédagogique pour les auto-écoles modernes.',
      context: 'Les auto-écoles font face à des défis de gestion administrative chronophages : planification des cours, suivi des élèves, gestion des moniteurs et conformité réglementaire.',
      intervention: [
        'Analyse des besoins et ateliers de co-design',
        'Architecture cloud-native sur AWS',
        'Développement React + Node.js',
        'Module de planification intelligent',
        'Tableau de bord temps réel',
        'Intégration paiement en ligne',
      ],
      results: [
        { icon: Clock, label: 'Gain de temps administratif', value: '+65%' },
        { icon: Users, label: 'Satisfaction utilisateurs', value: '4.8/5' },
        { icon: TrendingUp, label: 'Adoption par les écoles', value: '100%' },
        { icon: DollarSign, label: 'Réduction coûts opérationnels', value: '-40%' },
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'colever',
      title: 'Colever',
      subtitle: 'Plateforme de gestion scolaire',
      description: 'Système intégré de gestion administrative et pédagogique pour établissements scolaires.',
      context: 'Les établissements scolaires ont besoin d\'outils numériques modernes pour gérer efficacement leurs opérations quotidiennes tout en améliorant la communication avec les familles.',
      intervention: [
        'UX research auprès des parties prenantes',
        'Design system et prototypage Figma',
        'Développement web responsive',
        'Application mobile parents/élèves',
        'Module de suivi pédagogique',
        'Formation et accompagnement',
      ],
      results: [
        { icon: Users, label: 'Établissements équipés', value: '25+' },
        { icon: Clock, label: 'Temps de traitement', value: '-70%' },
        { icon: TrendingUp, label: 'Engagement parents', value: '+85%' },
        { icon: DollarSign, label: 'ROI première année', value: '250%' },
      ],
      tech: ['Vue.js', 'Flutter', 'Python', 'MySQL'],
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'xinergi',
      title: 'Xinergi',
      subtitle: 'Solution de gestion énergétique',
      description: 'Plateforme IoT et analytics pour l\'optimisation de la consommation énergétique.',
      context: 'Les entreprises cherchent à réduire leur empreinte carbone et leurs coûts énergétiques tout en améliorant leur efficacité opérationnelle.',
      intervention: [
        'Architecture IoT et data pipeline',
        'Développement de capteurs connectés',
        'Dashboard analytics temps réel',
        'Algorithmes de prédiction ML',
        'API pour intégrations tierces',
        'Programme pilote et scale-up',
      ],
      results: [
        { icon: TrendingUp, label: 'Économie d\'énergie', value: '-30%' },
        { icon: DollarSign, label: 'Réduction factures', value: '-25%' },
        { icon: Clock, label: 'Détection anomalies', value: 'Temps réel' },
        { icon: Users, label: 'Sites équipés', value: '50+' },
      ],
      tech: ['React', 'Python', 'TensorFlow', 'Azure IoT'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos réalisations
            </h1>
            <p className="text-xl text-gray-600">
              Des résultats mesurables, pas que des applis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {cases.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {caseStudy.title}
                      </h2>
                      <p className="text-lg text-beewton-primary-400 font-medium">
                        {caseStudy.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-700 mb-6">
                      {caseStudy.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                        Contexte
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {caseStudy.context}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                        Notre intervention
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {caseStudy.intervention.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-beewton-primary-400 mr-2">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-t-2 border-gray-200 p-8 lg:p-12">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    Résultats mesurables
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {caseStudy.results.map((result, idx) => {
                      const Icon = result.icon;
                      return (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Icon className="w-6 h-6 text-beewton-primary-400" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-600">
                            {result.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
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
            Prêt à créer votre success story ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Discutons de votre projet et des résultats que vous souhaitez atteindre.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center group shadow-xl"
          >
            Démarrer un projet
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cases;
