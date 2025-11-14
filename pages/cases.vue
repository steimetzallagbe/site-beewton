<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">Nos réalisations</h1>
        <p class="text-xl text-gray-600 mb-12">
          Découvrez les projets que nous avons menés à bien
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div v-for="project in projects" :key="project.title" class="border border-gray-200 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <h4 class="font-semibold text-gray-900 mb-2">Technologies :</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>
            <p class="text-sm text-gray-500">{{ project.date }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Plateforme d\'intelligence économique',
    description: 'Solution complète de collecte, analyse et visualisation de données économiques pour une institution publique.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    date: 'Octobre 2024'
  },
  {
    title: 'Application mobile e-commerce',
    description: 'Application mobile de vente en ligne avec intégration paiement et gestion d\'inventaire.',
    technologies: ['Flutter', 'Firebase', 'Stripe'],
    date: 'Septembre 2024'
  },
  {
    title: 'Plateforme SaaS B2B',
    description: 'Plateforme collaborative pour la gestion de projets avec équipes distribuées.',
    technologies: ['Next.js', 'Supabase', 'TailwindCSS'],
    date: 'Août 2024'
  },
  {
    title: 'Dashboard analytics temps réel',
    description: 'Dashboard d\'analyse de données temps réel avec IA générative.',
    technologies: ['Vue', 'Python', 'PostgreSQL', 'OpenAI'],
    date: 'Juillet 2024'
  }
];

useHead({
  title: 'Réalisations | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos derniers projets et réalisations'
    }
  ]
});
</script>
