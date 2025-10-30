import React from 'react';
import { Target, Award, Heart, Lightbulb, MapPin, Users } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string, postId?: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Audace & curiosité',
      description: 'Nous explorons de nouvelles approches et technologies pour créer des solutions innovantes.',
    },
    {
      icon: Award,
      title: 'Excellence technique',
      description: 'Notre engagement pour la qualité du code et des architectures robustes.',
    },
    {
      icon: Users,
      title: 'Performance collective',
      description: 'La force de notre équipe réside dans la collaboration et le partage des connaissances.',
    },
    {
      icon: Target,
      title: 'Impact client',
      description: 'Nous mesurons notre succès à travers la valeur créée pour nos clients.',
    },
  ];

  const locations = [
    {
      city: 'Paris',
      country: 'France',
      description: 'Siège européen et centre d\'expertise',
      icon: MapPin,
    },
    {
      city: 'Cotonou',
      country: 'Bénin',
      description: 'Centre de livraison nearshore',
      icon: MapPin,
    },
  ];

  const stats = [
    { value: '15+', label: 'Clients accompagnés' },
    { value: '30+', label: 'Projets livrés' },
    { value: '2', label: 'Pays' },
    { value: '98%', label: 'Clients satisfaits' },
  ];

  const commitments = [
    {
      title: 'RSE & Impact',
      description: 'Nous intégrons des pratiques responsables dans tous nos projets et soutenons l\'écosystème tech africain.',
    },
    {
      title: 'Accessibilité',
      description: 'Conformité RGAA et conception inclusive pour garantir l\'accès à tous.',
    },
    {
      title: 'Diversité & Inclusion',
      description: 'Une équipe diverse est une équipe plus forte. Nous valorisons toutes les perspectives.',
    },
    {
      title: 'Formation continue',
      description: 'Investissement constant dans la montée en compétences de nos équipes.',
    },
  ];

  const team = [
    {
      name: 'Sophie Laurent',
      role: 'CEO & Co-fondatrice',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Stratégie & Innovation',
    },
    {
      name: 'Marc Dubois',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Architecture & Cloud',
    },
    {
      name: 'Aminata Diallo',
      role: 'Head of Delivery',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Agile & PMO',
    },
    {
      name: 'Thomas Bernard',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'UX/UI & Produit',
    },
    {
      name: 'Koffi Mensah',
      role: 'Data & AI Lead',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'ML & Analytics',
    },
    {
      name: 'Claire Martin',
      role: 'Head of DevOps',
      image: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Infrastructure & Sécurité',
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              À propos de Beewton
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              L'ESN produit-first qui transforme vos ambitions digitales en réalité.
            </p>
            <p className="text-lg text-gray-700">
              Beewton, l'exigence produit au service de vos résultats. Nous combinons expertise technique,
              méthodologie agile et vision produit pour créer des solutions digitales qui génèrent de la valeur
              métier mesurable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-beewton-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
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
              Nos implantations
            </h2>
            <p className="text-xl text-gray-600">
              Une présence locale pour un service global
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => {
              const Icon = location.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-beewton-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {location.city}
                      </h3>
                      <p className="text-gray-600">
                        {location.country}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    {location.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Chiffres clés
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-beewton-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre équipe d'experts
            </h2>
            <p className="text-xl text-gray-600">
              Des talents passionnés au service de votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-beewton-primary-400 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-beewton-primary via-beewton-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-beewton-primary-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos engagements
            </h2>
            <p className="text-xl text-gray-600">
              Au-delà de la technologie, nos responsabilités
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600">
                  {commitment.description}
                </p>
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
            Rejoignez l'aventure
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nous recherchons des talents passionnés pour grandir avec nous.
          </p>
          <button
            onClick={() => onNavigate('careers')}
            className="px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Voir les opportunités
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
