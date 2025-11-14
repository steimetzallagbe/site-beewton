<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">Carrières chez Beewton</h1>
        <p class="text-xl text-gray-600 mb-12">
          Rejoignez notre équipe de talents
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="job in jobs" :key="job.id" class="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ job.title }}</h3>
            <p class="text-gray-600 mb-4">{{ job.description }}</p>
            <div class="flex gap-2 mb-4">
              <span class="px-3 py-1 bg-beewton-primary-400/10 text-beewton-primary-400 text-sm rounded-full">
                {{ job.location }}
              </span>
              <span class="px-3 py-1 bg-beewton-accent-teal/10 text-beewton-accent-teal text-sm rounded-full">
                {{ job.type }}
              </span>
            </div>
            <button class="text-beewton-primary-400 hover:text-beewton-primary-600 font-medium">
              En savoir plus →
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const jobs = [
  {
    id: 1,
    title: 'Développeur React/Next.js',
    description: 'Nous recherchons un développeur full-stack avec expérience React pour rejoindre notre équipe.',
    location: 'Paris',
    type: 'CDI'
  },
  {
    id: 2,
    title: 'Designer UX/UI',
    description: 'Rejoignez notre équipe de design pour créer des expériences exceptionnelles.',
    location: 'Paris',
    type: 'CDI'
  },
  {
    id: 3,
    title: 'Data Engineer',
    description: 'Nous cherchons un Data Engineer pour construire notre infrastructure data.',
    location: 'Paris / Cotonou',
    type: 'CDI'
  },
  {
    id: 4,
    title: 'Consultant Cloud',
    description: 'Consultant expérimenté en architectures cloud AWS/GCP/Azure.',
    location: 'Paris',
    type: 'CDI'
  }
];

useHead({
  title: 'Carrières | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos opportunités de carrière chez Beewton'
    }
  ]
});
</script>
