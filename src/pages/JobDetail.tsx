import React from 'react';
import { ArrowLeft, MapPin, Briefcase, Clock, Calendar, Check, Users, Rocket, Send } from 'lucide-react';

interface JobDetailProps {
  jobId?: string;
  onNavigate: (page: string) => void;
}

const JobDetail: React.FC<JobDetailProps> = ({ onNavigate }) => {
  const job = {
    title: 'Développeur Full Stack',
    type: 'CDI',
    location: 'Paris / Cotonou',
    experience: '3-5 ans',
    published: 'Publié il y a 2 jours',
    description: 'Nous recherchons un développeur full stack passionné pour rejoindre notre équipe et participer au développement de solutions digitales innovantes pour nos clients.',

    missions: [
      'Concevoir et développer des applications web modernes et performantes',
      'Participer aux choix techniques et architecturaux des projets',
      'Collaborer avec les équipes design et produit pour créer des expériences utilisateur exceptionnelles',
      'Assurer la qualité du code via les tests automatisés et les revues de code',
      'Maintenir et faire évoluer les applications existantes',
      'Participer aux cérémonies agiles et contribuer à l\'amélioration continue',
      'Mentorer les développeurs juniors et partager vos connaissances'
    ],

    requirements: [
      'Expérience significative en développement web (minimum 3 ans)',
      'Maîtrise de React, TypeScript et Node.js',
      'Bonne connaissance des bases de données SQL et NoSQL',
      'Expérience avec les architectures cloud (AWS, GCP ou Azure)',
      'Pratique des méthodologies agiles (Scrum, Kanban)',
      'Capacité à travailler en équipe et excellente communication',
      'Curiosité technique et envie d\'apprendre en continu',
      'Niveau d\'anglais professionnel'
    ],

    niceToHave: [
      'Expérience avec Docker et Kubernetes',
      'Connaissance de Next.js ou d\'autres frameworks React',
      'Pratique de GraphQL',
      'Contributions open source',
      'Expérience en CI/CD et DevOps',
      'Certification cloud'
    ],

    offer: [
      'Salaire attractif selon profil et expérience',
      'Télétravail flexible (2-3 jours/semaine)',
      'Budget formation de 3000€/an',
      'Participation à des conférences tech',
      'Mutuelle entreprise premium',
      'Tickets restaurant',
      'RTT et congés supplémentaires',
      'Équipement de travail haut de gamme (MacBook Pro, écrans...)',
      'Salle de sport et activités d\'équipe',
      'Ambiance startup avec café et snacks à volonté'
    ],

    team: {
      size: '15 personnes',
      description: 'Vous intégrerez une équipe produit composée de développeurs, designers et product managers travaillant sur des projets innovants pour des clients grands comptes.'
    },

    stack: [
      { category: 'Frontend', tools: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'] },
      { category: 'Backend', tools: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'] },
      { category: 'DevOps', tools: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Terraform'] },
      { category: 'Tools', tools: ['Git', 'Figma', 'Jira', 'Slack', 'Notion'] }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gradient-to-br from-blue-50 to-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => onNavigate('careers')}
            className="flex items-center text-gray-600 hover:text-beewton-primary-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux offres
          </button>

          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-beewton-primary-400" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-beewton-primary-400" />
                {job.type}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-beewton-primary-400" />
                {job.experience}
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-beewton-primary-400" />
                {job.published}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-beewton-primary-400 text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 shadow-lg flex items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Postuler maintenant
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-300 font-medium rounded-lg hover:border-beewton-primary-400 transition-all"
              >
                Poser une question
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Description du poste
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {job.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Vos missions
              </h2>
              <ul className="space-y-4">
                {job.missions.map((mission, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="ml-3 text-gray-700">{mission}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Profil recherché
              </h2>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Compétences requises
                </h3>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="ml-3 text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Un plus si vous avez
                </h3>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="ml-3 text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Stack technique
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {job.stack.map((category, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Ce que nous offrons
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.offer.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-beewton-primary-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-beewton-primary-400" />
                    </div>
                    <span className="ml-3 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gradient-to-br from-beewton-primary-400 to-beewton-primary-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Prêt à nous rejoindre ?
                </h3>
                <p className="text-white/90 mb-6">
                  Envoyez-nous votre candidature et démarrons la conversation.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-6 py-3 bg-white text-beewton-primary-400 font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  Postuler à cette offre
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-beewton-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 ml-3">
                    L'équipe
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold text-gray-900">Taille :</span> {job.team.size}
                </p>
                <p className="text-sm text-gray-600">
                  {job.team.description}
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Processus de recrutement
                </h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold text-beewton-primary-400 mr-2">1.</span>
                    <span>Candidature en ligne</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-beewton-primary-400 mr-2">2.</span>
                    <span>Entretien téléphonique (30 min)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-beewton-primary-400 mr-2">3.</span>
                    <span>Test technique (2-3h)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-beewton-primary-400 mr-2">4.</span>
                    <span>Entretien avec l'équipe (1h)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-beewton-primary-400 mr-2">5.</span>
                    <span>Bienvenue chez Beewton !</span>
                  </li>
                </ol>
                <p className="mt-4 text-xs text-gray-600">
                  Durée totale : 2-3 semaines
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">
                  Questions sur ce poste ?
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Notre équipe RH est là pour vous répondre.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 font-medium rounded-lg hover:border-beewton-primary-400 transition-all text-sm"
                >
                  Nous contacter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
