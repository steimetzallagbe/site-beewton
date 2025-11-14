<template>
  <div class="bg-white">
    <section class="relative py-20 md:py-32 overflow-hidden bg-white">
      <div class="absolute inset-0">
        <img
          src="/gradient-abstract-style-wireframe-background.png"
          alt="Innovation technologique"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Des solutions numériques qui créent de la valeur,
            <br />
            <TypingAnimation
              static-text=""
              :rotating-words="['vite.', 'pour nos clients.', 'dans la durée.']"
              class="block"
            />
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up" style="animation-delay: 0.1s; opacity: 0">
            De l'idée à l'exploitation de votre solution : Conseil métier & AMOA, Design UX/UI créatif et collaboratif, Développement, Data & IA, Cloud & Cyber.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="animation-delay: 0.2s; opacity: 0">
            <a
              href="https://calendly.com/beewton"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 flex items-center justify-center group"
            >
              Prendre un rendez-vous
              <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <NuxtLink
              to="/contact"
              class="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-beewton-primary-400 transition-all"
            >
              Demander une estimation
            </NuxtLink>
            <NuxtLink
              to="/cases"
              class="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-300 hover:border-beewton-primary-400 transition-all"
            >
              Voir nos réalisations
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2 order-2 lg:order-1">
            <div class="inline-block px-4 py-2 bg-beewton-primary-400/10 text-beewton-primary-400 rounded-full text-sm font-medium mb-4">
              Projet récent
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Plateforme d'intelligence économique pour une institution publique
            </h2>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Nous avons conçu et développé une solution complète de collecte, d'analyse et de visualisation de données économiques, permettant aux décideurs d'accéder à des insights stratégiques en temps réel.
            </p>

            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="bg-white p-4 rounded-lg border border-gray-200">
                <div class="text-3xl font-bold text-beewton-primary-400 mb-1">6 mois</div>
                <div class="text-sm text-gray-600">Délai de livraison</div>
              </div>
              <div class="bg-white p-4 rounded-lg border border-gray-200">
                <div class="text-3xl font-bold text-beewton-primary-400 mb-1">15k+</div>
                <div class="text-sm text-gray-600">Utilisateurs actifs</div>
              </div>
              <div class="bg-white p-4 rounded-lg border border-gray-200">
                <div class="text-3xl font-bold text-beewton-primary-400 mb-1">50+</div>
                <div class="text-sm text-gray-600">Sources de données</div>
              </div>
              <div class="bg-white p-4 rounded-lg border border-gray-200">
                <div class="text-3xl font-bold text-beewton-primary-400 mb-1">99.8%</div>
                <div class="text-sm text-gray-600">Disponibilité</div>
              </div>
            </div>

            <div class="mb-8">
              <h3 class="font-semibold text-gray-900 mb-3">Technologies clés :</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in technologies" :key="tech" class="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>

            <NuxtLink
              to="/cases"
              class="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 flex items-center group w-fit"
            >
              Découvrir tous nos projets
              <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>

          <div class="lg:w-1/2 order-1 lg:order-2">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-beewton-primary-400/20 to-beewton-accent-teal/20 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Dashboard de plateforme d'intelligence économique"
                class="relative rounded-2xl shadow-2xl w-full h-auto"
              />
              <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div class="font-bold text-gray-900">Projet livré</div>
                    <div class="text-sm text-gray-600">Octobre 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos offres
          </h2>
          <p class="text-xl text-gray-600">
            Nous intervenons de la stratégie au run, à l'échelle.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
          >
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-beewton-primary-400 transition-colors">
              <component :is="service.icon" class="w-6 h-6 text-beewton-primary-400 group-hover:text-white transition-colors" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ service.description }}
            </p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="text-sm text-gray-500 flex items-start">
                <CheckCircle class="w-4 h-4 text-beewton-accent-teal mr-2 mt-0.5 flex-shrink-0" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat v-for="stat in stats" :key="stat.label" :value="stat.value" :label="stat.label" />
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre engagement qualité
          </h2>
          <p class="text-xl text-gray-600">
            Des pratiques éprouvées pour votre réussite
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="value.icon" class="w-8 h-8 text-beewton-accent-teal" />
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              {{ value.title }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos derniers articles
          </h2>
          <p class="text-xl text-gray-600">
            Nos experts partagent leurs connaissances sur les évolutions du digital
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <NuxtLink
            v-for="article in latestArticles"
            :key="article.id"
            :to="`/blog/${article.id}`"
            class="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-beewton-primary-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-white text-gray-900 text-xs font-medium rounded-full">
                  {{ article.category }}
                </span>
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span class="flex items-center">
                  <Calendar class="w-4 h-4 mr-1" />
                  {{ article.date }}
                </span>
                <span class="flex items-center">
                  <Clock class="w-4 h-4 mr-1" />
                  {{ article.readTime }}
                </span>
              </div>

              <h3 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-beewton-primary-400 transition-colors">
                {{ article.title }}
              </h3>

              <p class="text-gray-600 mb-4 text-sm line-clamp-2">
                {{ article.excerpt }}
              </p>

              <div class="flex items-center pt-4 border-t border-gray-200">
                <UserCircle class="w-4 h-4 text-gray-400 mr-2" />
                <span class="text-sm text-gray-700">
                  {{ article.author }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="text-center">
          <NuxtLink
            to="/blog"
            class="px-8 py-4 bg-beewton-primary-400 text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 inline-flex items-center group"
          >
            Voir tous les articles
            <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="/futuristic-dot-wave-abstract-background.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-beewton-primary/95 via-beewton-primary/90 to-beewton-primary-600/95"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Prêt à lancer votre projet ?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Discutons de vos besoins et construisons ensemble la solution idéale.
        </p>
        <NuxtLink
          to="/contact"
          class="px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center group shadow-xl"
        >
          Contactez-nous
          <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users, Repeat, Lock, Eye, Leaf, Calendar, Clock, UserCircle } from 'lucide-vue-next';

const blogArticles = [
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
];

const technologies = ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Python', 'TensorFlow'];

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

const latestArticles = blogArticles.slice(0, 3);

useHead({
  title: 'Beewton - Solutions numériques qui créent de la valeur',
  meta: [
    {
      name: 'description',
      content: 'Conseil & AMOA, Design UX/UI, Développement Web & Mobile, Data & IA, Cloud & Cyber pour transformer votre entreprise.'
    },
    {
      property: 'og:title',
      content: 'Beewton - Solutions numériques qui créent de la valeur'
    },
    {
      property: 'og:description',
      content: 'De l\'idée à l\'exploitation : solutions digitales complètes pour transformer votre entreprise.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
});
</script>
