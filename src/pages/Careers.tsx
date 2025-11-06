import React from 'react';
import { Rocket, BookOpen, Users, TrendingUp, MapPin, Briefcase, Code, Palette, ArrowRight, Send, Phone, FileCode, Handshake, PartyPopper } from 'lucide-react';

interface CareersProps {
  onNavigate: (page: string, postId?: string) => void;
}

const Careers: React.FC<CareersProps> = ({ onNavigate }) => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Apprentissage continu',
      description: 'Budget formation, certifications, conférences et accès aux meilleures ressources.',
    },
    {
      icon: Users,
      title: 'Communautés internes',
      description: 'Guildes techniques, partage de connaissances et mentorat entre pairs.',
    },
    {
      icon: TrendingUp,
      title: 'Évolution de carrière',
      description: 'Parcours de progression clairs, mobilité interne et développement de compétences.',
    },
    {
      icon: MapPin,
      title: 'Mobilité géographique',
      description: 'Possibilité de travailler entre Paris et Cotonou, télétravail flexible.',
    },
  ];

  const positions = [
    {
      title: 'Développeur Full Stack',
      type: 'CDI',
      location: 'Paris / Cotonou',
      description: 'Rejoignez nos équipes pour concevoir et développer des applications web modernes.',
      tags: ['React', 'Node.js', 'TypeScript', 'Cloud'],
      icon: Code,
    },
    {
      title: 'Product Designer',
      type: 'CDI',
      location: 'Paris',
      description: 'Créez des expériences utilisateur exceptionnelles du concept au produit final.',
      tags: ['Figma', 'UX Research', 'Design System', 'Prototypage'],
      icon: Palette,
    },
    {
      title: 'DevOps Engineer',
      type: 'CDI',
      location: 'Paris / Remote',
      description: 'Construisez et maintenez nos infrastructures cloud et pipelines CI/CD.',
      tags: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      icon: Code,
    },
    {
      title: 'Chef de Projet',
      type: 'CDI',
      location: 'Paris',
      description: 'Pilotez des projets digitaux d\'envergure de bout en bout.',
      tags: ['Agile', 'PMO', 'Stakeholder Management'],
      icon: Briefcase,
    },
  ];

  const process = [
    {
      step: '01',
      icon: Send,
      title: 'Candidature',
      description: 'Envoyez votre CV et lettre de motivation via notre formulaire.',
      duration: '1 jour',
      color: 'from-blue-500 to-blue-600',
    },
    {
      step: '02',
      icon: Phone,
      title: 'Premier échange',
      description: 'Entretien téléphonique pour faire connaissance et comprendre vos motivations.',
      duration: '30 min',
      color: 'from-green-500 to-green-600',
    },
    {
      step: '03',
      icon: FileCode,
      title: 'Test technique',
      description: 'Exercice pratique pour évaluer vos compétences (pour les postes techniques).',
      duration: '2-3h',
      color: 'from-orange-500 to-orange-600',
    },
    {
      step: '04',
      icon: Handshake,
      title: 'Entretien final',
      description: 'Rencontre avec l\'équipe et discussion approfondie sur le poste.',
      duration: '1h',
      color: 'from-purple-500 to-purple-600',
    },
    {
      step: '05',
      icon: PartyPopper,
      title: 'Bienvenue',
      description: 'Onboarding personnalisé et intégration dans votre équipe.',
      duration: '1 semaine',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Carrières chez Beewton
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Rejoins une équipe qui shippe et qui apprend.
            </p>
            <p className="text-lg text-gray-700">
              Grandir dans une tribu produit-tech qui livre des solutions impactantes,
              tout en développant continuellement ses compétences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-xl text-gray-600">
              Notre promesse employeur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-beewton-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Postes ouverts
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez votre prochaine opportunité
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => {
              const Icon = position.icon;
              return (
                <div
                  key={index}
                  onClick={() => onNavigate('job-detail', position.title)}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-beewton-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <span className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {position.type}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {position.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">
                        {position.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {position.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-6 py-3 bg-beewton-primary-400 text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all whitespace-nowrap flex items-center group-hover:scale-105"
                    >
                      Postuler
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas le poste qui vous correspond ?
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-300 font-medium rounded-lg hover:border-beewton-primary-400 transition-all"
            >
              Candidature spontanée
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre processus de recrutement
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours transparent et bienveillant en 5 étapes
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative group">
                    <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-beewton-primary-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="text-center mb-4">
                        <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-3">
                          Étape {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <div className="inline-flex items-center px-3 py-1 bg-beewton-primary-400/10 text-beewton-primary-400 text-xs font-medium rounded-full mb-3">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {item.duration}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm text-center leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-5 h-5 text-beewton-primary-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Processus complet en 2-3 semaines
              </h3>
              <p className="text-gray-600">
                Nous nous engageons à vous donner un retour à chaque étape. Notre objectif : une expérience candidat respectueuse et enrichissante.
              </p>
            </div>
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
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-8 h-8 text-beewton-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à décoller avec nous ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Envoyez-nous votre candidature et commençons la conversation.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Postuler maintenant
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
