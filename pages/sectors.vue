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
          Secteurs d'activité
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 max-w-3xl">
          Nous intervenons dans plusieurs secteurs clés de l'économie avec une expertise approfondie
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="sector in sectors"
            :key="sector.name"
            class="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-beewton-primary-400 hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div class="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors"
              :class="sector.colorClass">
              <component :is="sector.icon" class="w-8 h-8 transition-colors" :class="sector.iconClass" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-beewton-primary-400 transition-colors">
              {{ sector.name }}
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ sector.description }}
            </p>
            <ul class="space-y-2">
              <li v-for="expertise in sector.expertises" :key="expertise" class="text-sm text-gray-500 flex items-start">
                <CheckCircle class="w-4 h-4 text-beewton-accent-teal mr-2 mt-0.5 flex-shrink-0" />
                {{ expertise }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Une expertise transverse
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Quelle que soit votre industrie, nous apportons notre savoir-faire en transformation digitale
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-6 bg-white rounded-xl">
            <div class="text-4xl font-bold text-beewton-primary-400 mb-2">6</div>
            <div class="text-gray-600 font-medium">Secteurs couverts</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl">
            <div class="text-4xl font-bold text-beewton-primary-400 mb-2">50+</div>
            <div class="text-gray-600 font-medium">Experts métiers</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl">
            <div class="text-4xl font-bold text-beewton-primary-400 mb-2">100%</div>
            <div class="text-gray-600 font-medium">Conformité RGPD</div>
          </div>
          <div class="text-center p-6 bg-white rounded-xl">
            <div class="text-4xl font-bold text-beewton-primary-400 mb-2">24/7</div>
            <div class="text-gray-600 font-medium">Support disponible</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Votre secteur n'est pas listé ?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Parlons de votre projet et voyons comment nous pouvons vous aider
        </p>
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
import { Building2, Landmark, ShoppingBag, Factory, Wifi, Heart, CheckCircle, ArrowRight } from 'lucide-vue-next';

const sectors = [
  {
    name: 'Secteur public',
    description: 'Modernisation des services publics et transformation numérique de l\'État',
    icon: Building2,
    colorClass: 'bg-blue-100 group-hover:bg-beewton-primary-400',
    iconClass: 'text-blue-600 group-hover:text-white',
    expertises: [
      'Dématérialisation des démarches',
      'Portails citoyens',
      'Conformité RGAA obligatoire'
    ]
  },
  {
    name: 'Finance',
    description: 'Fintech, gestion des risques et conformité réglementaire',
    icon: Landmark,
    colorClass: 'bg-green-100 group-hover:bg-beewton-primary-400',
    iconClass: 'text-green-600 group-hover:text-white',
    expertises: [
      'Open Banking',
      'KYC/AML automatisé',
      'Plateformes de paiement'
    ]
  },
  {
    name: 'Retail',
    description: 'Omnicanal, e-commerce et expérience client',
    icon: ShoppingBag,
    colorClass: 'bg-orange-100 group-hover:bg-beewton-primary-400',
    iconClass: 'text-orange-600 group-hover:text-white',
    expertises: [
      'E-commerce headless',
      'Personnalisation IA',
      'Gestion d\'inventaire'
    ]
  },
  {
    name: 'Industrie',
    description: 'Industry 4.0, IoT et optimisation des processus',
    icon: Factory,
    colorClass: 'bg-gray-100 group-hover:bg-beewton-primary-400',
    iconClass: 'text-gray-600 group-hover:text-white',
    expertises: [
      'Jumeau numérique',
      'Maintenance prédictive',
      'Traçabilité supply chain'
    ]
  },
  {
    name: 'Télécom',
    description: 'Réseaux, 5G et services digitaux',
    icon: Wifi,
    colorClass: 'bg-purple-100 group-hover:bg-beewton-primary-400',
    iconClass: 'text-purple-600 group-hover:text-white',
    expertises: [
      'OSS/BSS modernisation',
      'Portails self-service',
      'Analytics réseau'
    ]
  },
  {
    name: 'Santé',
    description: 'Dossiers électroniques et plateformes de e-santé',
    icon: Heart,
    colorClass: 'bg-red-100 group-hover:bg-beewton-primary-400',
    iconClass: 'text-red-600 group-hover:text-white',
    expertises: [
      'Dossier patient informatisé',
      'Télémédecine',
      'Conformité HDS'
    ]
  },
];

useHead({
  title: 'Secteurs | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les secteurs d\'activité dans lesquels nous intervenons avec expertise'
    }
  ]
});
</script>
