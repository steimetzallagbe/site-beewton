<template>
  <div class="bg-white">
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="/gradient-abstract-style-wireframe-background.png"
          alt=""
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Nos réalisations
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 max-w-3xl">
          Découvrez les projets que nous avons menés à bien pour nos clients
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            v-for="project in projects"
            :key="project.title"
            class="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-beewton-primary-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div class="relative h-64 overflow-hidden bg-gradient-to-br from-beewton-primary-400/10 to-beewton-accent-teal/10">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 bg-white text-gray-900 text-sm font-medium rounded-full">
                  {{ project.sector }}
                </span>
              </div>
            </div>

            <div class="p-8">
              <div class="flex items-center gap-3 mb-4">
                <Calendar class="w-5 h-5 text-gray-400" />
                <span class="text-sm text-gray-600">{{ project.date }}</span>
              </div>

              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-beewton-primary-400 transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ project.description }}
              </p>

              <div class="mb-6">
                <h4 class="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle class="w-5 h-5 text-beewton-accent-teal mr-2" />
                  Résultats clés
                </h4>
                <ul class="space-y-2">
                  <li v-for="result in project.results" :key="result" class="text-sm text-gray-600 flex items-start">
                    <TrendingUp class="w-4 h-4 text-beewton-accent-teal mr-2 mt-0.5 flex-shrink-0" />
                    {{ result }}
                  </li>
                </ul>
              </div>

              <div class="border-t pt-6">
                <h4 class="font-semibold text-gray-900 mb-3">Technologies utilisées</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des résultats mesurables
          </h2>
          <p class="text-xl text-gray-600">
            Nos projets génèrent un impact concret pour nos clients
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedStat value="30+" label="Projets livrés" />
          <AnimatedStat value="98%" label="Taux de satisfaction" />
          <AnimatedStat value="6" label="Mois délai moyen" />
          <AnimatedStat value="15k+" label="Utilisateurs actifs" />
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Un projet en tête ?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Discutons de votre besoin et voyons comment nous pouvons vous aider
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 inline-flex items-center justify-center group"
          >
            Démarrer un projet
            <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
          <a
            href="https://calendly.com/beewton"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-beewton-primary-400 transition-all inline-flex items-center justify-center"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Calendar, CheckCircle, TrendingUp, ArrowRight } from 'lucide-vue-next';

const projects = [
  {
    title: 'Plateforme d\'intelligence économique',
    description: 'Solution complète de collecte, analyse et visualisation de données économiques pour une institution publique. Interface intuitive avec tableaux de bord personnalisables.',
    sector: 'Secteur public',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
    date: 'Octobre 2024',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: [
      '15k+ utilisateurs actifs',
      '50+ sources de données intégrées',
      '99.8% de disponibilité',
      '6 mois de livraison'
    ]
  },
  {
    title: 'Application mobile e-commerce',
    description: 'Application mobile native iOS et Android de vente en ligne avec intégration paiement Stripe, gestion d\'inventaire temps réel et système de fidélité.',
    sector: 'Retail',
    technologies: ['Flutter', 'Firebase', 'Stripe', 'Cloud Functions'],
    date: 'Septembre 2024',
    image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: [
      '10k+ téléchargements',
      '4.8/5 sur les stores',
      '+35% de conversions',
      'Temps de chargement < 2s'
    ]
  },
  {
    title: 'Plateforme SaaS B2B',
    description: 'Plateforme collaborative pour la gestion de projets avec équipes distribuées. Fonctionnalités avancées de planification, suivi et reporting.',
    sector: 'Tech',
    technologies: ['Next.js', 'Supabase', 'TailwindCSS', 'Vercel'],
    date: 'Août 2024',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: [
      '5k+ utilisateurs mensuels',
      '100+ entreprises clientes',
      '99.9% uptime',
      'ROI positif en 6 mois'
    ]
  },
  {
    title: 'Dashboard analytics temps réel',
    description: 'Dashboard d\'analyse de données temps réel avec IA générative pour insights automatiques. Intégration multi-sources et alertes intelligentes.',
    sector: 'Finance',
    technologies: ['Vue', 'Python', 'PostgreSQL', 'OpenAI', 'Redis'],
    date: 'Juillet 2024',
    image: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: [
      'Traitement de 1M+ événements/jour',
      'Latence < 100ms',
      '+40% de productivité analystes',
      'Coûts d\'infrastructure -25%'
    ]
  }
];

useHead({
  title: 'Réalisations | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos derniers projets et réalisations clients avec résultats mesurables'
    }
  ]
});
</script>
