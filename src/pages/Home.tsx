import React from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users, Repeat, Lock, Eye, Leaf, Calendar, Clock, User } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';
import AnimatedStat from '../components/AnimatedStat';

interface HomeProps {
  onNavigate: (page: string, postId?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const services = [
    {
      title: 'Conseil & AMOA',
      description: 'Du besoin au marché : cadrage, CCTP, pilotage et réussite.',
      icon: Users,
      features: ['Cadrage & expression des besoins', 'Rédaction CCTP', 'PMO & pilotage'],
    },
    {
      title: 'Produit & UX',
      description: 'Construisons le bon produit, puis construisons-le bien.',
      icon: Zap,
      features: ['Ateliers discovery', 'Prototypage Figma', 'Design system'],
    },
    {
      title: 'Dév Web & Mobile',
      description: 'Applications modernes, maintenables, performantes.',
      icon: Shield,
      features: ['React/Next, Vue', 'Flutter/React Native', 'QA automatisée'],
    },
    {
      title: 'Data & IA',
      description: 'Des données activables, une IA utile et responsable.',
      icon: TrendingUp,
      features: ['Modern data stack', 'BI & gouvernance', 'IA générative'],
    },
    {
      title: 'Cloud, DevOps & Cyber',
      description: 'Accélérez en confiance : Cloud-native, FinOps, Zero Trust.',
      icon: Shield,
      features: ['AWS/Azure/GCP', 'CI/CD', 'Sécurité applicative'],
    },
    {
      title: 'TMA & Run',
      description: 'Surveiller, faire évoluer et sécuriser vos applis 24/7.',
      icon: CheckCircle,
      features: ['TMA évolutive', 'Monitoring 24/7', 'Clients satisfaits 99,9%'],
    },
  ];

  const stats = [
    { label: 'Clients accompagnés', value: '15+' },
    { label: 'Projets livrés', value: '30+' },
    { label: 'Géographies', value: '2' },
    { label: 'Clients satisfaits', value: '98%' },
  ];

  const values = [
    {
      title: 'Méthodes agiles',
      description: 'Cycles itératifs, livraison continue',
      icon: Repeat,
    },
    {
      title: 'Sécurité & RGPD',
      description: 'Conformité et protection des données',
      icon: Lock,
    },
    {
      title: 'Accessibilité RGAA',
      description: 'Conception inclusive pour tous',
      icon: Eye,
    },
    {
      title: 'Engagement RSE',
      description: 'Impact positif et responsable',
      icon: Leaf,
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img
            src="/gradient-abstract-style-wireframe-background.png"
            alt="Innovation technologique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
              Des solutions numériques qui créent de la valeur,
              <br />
              <TypingAnimation
                staticText=""
                rotatingWords={['vite.', 'pour nos clients.', 'dans la durée.']}
                className="block"
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              De l'idée à l'exploitation de votre solution : Conseil métier & AMOA, Design UX/UI créatif et collaboratif, Développement, Data & IA, Cloud & Cyber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <button
                onClick={() => window.open('https://calendly.com/beewton', '_blank')}
                className="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 flex items-center justify-center group"
              >
                Prendre un rendez-vous
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-beewton-primary-400 transition-all"
              >
                Demander une estimation
              </button>
              <button
                onClick={() => onNavigate('cases')}
                className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-beewton-primary-400 transition-all"
              >
                Voir nos réalisations
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-beewton-primary-400/10 text-beewton-primary-400 rounded-full text-sm font-medium mb-4">
                Projet récent
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Plateforme d'intelligence économique pour une institution publique
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nous avons conçu et développé une solution complète de collecte, d'analyse et de visualisation de données économiques, permettant aux décideurs d'accéder à des insights stratégiques en temps réel.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-beewton-primary-400 mb-1">6 mois</div>
                  <div className="text-sm text-gray-600">Délai de livraison</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-beewton-primary-400 mb-1">15k+</div>
                  <div className="text-sm text-gray-600">Utilisateurs actifs</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-beewton-primary-400 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Sources de données</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-3xl font-bold text-beewton-primary-400 mb-1">99.8%</div>
                  <div className="text-sm text-gray-600">Disponibilité</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Technologies clés :</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Python', 'TensorFlow'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('cases')}
                className="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 flex items-center group"
              >
                Découvrir tous nos projets
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-beewton-primary-400/20 to-beewton-accent-teal/20 rounded-2xl transform rotate-3"></div>
                <img
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Dashboard de plateforme d'intelligence économique"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Projet livré</div>
                      <div className="text-sm text-gray-600">Octobre 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos offres
            </h2>
            <p className="text-xl text-gray-600">
              Nous intervenons de la stratégie au run, à l'échelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                  onClick={() => onNavigate('services')}
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-beewton-primary-400 transition-colors">
                    <Icon className="w-6 h-6 text-beewton-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-start">
                        <CheckCircle className="w-4 h-4 text-beewton-accent-teal mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre engagement qualité
            </h2>
            <p className="text-xl text-gray-600">
              Des pratiques éprouvées pour votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-beewton-accent-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
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
              Nos derniers articles
            </h2>
            <p className="text-xl text-gray-600">
              Nos experts partagent leurs connaissances sur les évolutions du digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                id: 'ia-generative-entreprise',
                title: "L'IA générative en entreprise : opportunités et défis",
                excerpt: "Comment les entreprises peuvent tirer parti de l'IA générative tout en gérant les risques.",
                author: 'Sophie Laurent',
                date: '15 Oct 2024',
                readTime: '8 min',
                category: 'Intelligence Artificielle',
                image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                id: 'accessibilite-numerique-rgaa',
                title: 'Accessibilité numérique : au-delà de la conformité RGAA',
                excerpt: "L'accessibilité web est une opportunité d'élargir votre audience et d'améliorer l'UX.",
                author: 'Thomas Bernard',
                date: '10 Oct 2024',
                readTime: '6 min',
                category: 'UX & Design',
                image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                id: 'architecture-cloud-native',
                title: 'Architecture cloud-native : principes et bonnes pratiques',
                excerpt: "Comment concevoir des applications résilientes et scalables pour le cloud.",
                author: 'Marc Dubois',
                date: '5 Oct 2024',
                readTime: '10 min',
                category: 'Cloud & DevOps',
                image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((article, index) => (
              <article
                key={index}
                onClick={() => onNavigate('blog-post', article.id)}
                className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-beewton-primary-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-gray-900 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-beewton-primary-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center pt-4 border-t border-gray-200">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-700">
                      {article.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('blog')}
              className="px-8 py-4 bg-beewton-primary-400 text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 inline-flex items-center group"
            >
              Voir tous les articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/futuristic-dot-wave-abstract-background.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beewton-primary/95 via-beewton-primary/90 to-beewton-primary-600/95"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Discutons de vos besoins et construisons ensemble la solution idéale.
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

export default Home;
