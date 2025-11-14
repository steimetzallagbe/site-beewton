<template>
  <div class="bg-white">
    <section class="relative py-20 md:py-32">
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
          Nos services
        </h1>
        <p class="text-xl md:text-2xl text-gray-700">
          De la stratégie à l'exploitation, nous accompagnons vos projets digitaux
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="service in services" :key="service.title" class="group">
            <div class="w-14 h-14 bg-beewton-primary-400/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-beewton-primary-400 transition-colors">
              <component :is="service.icon" class="w-8 h-8 text-beewton-primary-400 group-hover:text-white transition-colors" />
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
              {{ service.title }}
            </h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ service.description }}
            </p>
            <ul class="space-y-3">
              <li v-for="feature in service.features" :key="feature" class="flex items-start">
                <CheckCircle class="w-5 h-5 text-beewton-accent-teal mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Prêt à transformer votre entreprise ?
        </h2>
        <NuxtLink
          to="/contact"
          class="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 inline-flex items-center group"
        >
          Contactez-nous
          <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle, Users, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-vue-next';

const services = [
  {
    title: 'Conseil & AMOA',
    description: 'Du besoin au marché : cadrage, CCTP, pilotage et réussite.',
    icon: Users,
    features: [
      'Cadrage & expression des besoins',
      'Rédaction CCTP',
      'PMO & pilotage',
      'Accompagnement changement'
    ],
  },
  {
    title: 'Produit & UX',
    description: 'Construisons le bon produit, puis construisons-le bien.',
    icon: Zap,
    features: [
      'Ateliers discovery',
      'Prototypage Figma',
      'Design system',
      'Recherche utilisateur'
    ],
  },
  {
    title: 'Dév Web & Mobile',
    description: 'Applications modernes, maintenables, performantes.',
    icon: Shield,
    features: [
      'React/Next, Vue, Nuxt',
      'Flutter/React Native',
      'QA automatisée',
      'Performance optimization'
    ],
  },
  {
    title: 'Data & IA',
    description: 'Des données activables, une IA utile et responsable.',
    icon: TrendingUp,
    features: [
      'Modern data stack',
      'BI & gouvernance',
      'IA générative',
      'Analytics avancées'
    ],
  },
  {
    title: 'Cloud, DevOps & Cyber',
    description: 'Accélérez en confiance : Cloud-native, FinOps, Zero Trust.',
    icon: Shield,
    features: [
      'AWS/Azure/GCP',
      'CI/CD',
      'Sécurité applicative',
      'Infrastructure as Code'
    ],
  },
  {
    title: 'TMA & Run',
    description: 'Surveiller, faire évoluer et sécuriser vos applis 24/7.',
    icon: CheckCircle,
    features: [
      'TMA évolutive',
      'Monitoring 24/7',
      'Clients satisfaits 99,9%',
      'Support réactif'
    ],
  },
];

useHead({
  title: 'Nos Services | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos services : Conseil & AMOA, Produit & UX, Développement, Data & IA, Cloud & Cyber'
    }
  ]
});
</script>
