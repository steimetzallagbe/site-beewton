<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">Secteurs d'activité</h1>
        <p class="text-xl text-gray-600 mb-12">
          Nous intervenons dans plusieurs secteurs clés de l'économie
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="sector in sectors" :key="sector.name" class="p-6 border border-gray-200 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ sector.name }}</h3>
            <p class="text-gray-600">{{ sector.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const sectors = [
  { name: 'Secteur public', description: 'Modernisation des services publics et transformation numérique de l\'État' },
  { name: 'Finance', description: 'Fintech, gestion des risques et conformité réglementaire' },
  { name: 'Retail', description: 'Omnicanal, e-commerce et expérience client' },
  { name: 'Industrie', description: 'Industry 4.0, IoT et optimisation des processus' },
  { name: 'Télécom', description: 'Réseaux, 5G et services digitaux' },
  { name: 'Santé', description: 'Dossiers électroniques et plateformes de e-santé' },
];

useHead({
  title: 'Secteurs | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les secteurs d\'activité dans lesquels nous intervenons'
    }
  ]
});
</script>
