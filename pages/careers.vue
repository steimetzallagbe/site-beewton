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
          Rejoignez l'aventure Beewton
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 max-w-3xl">
          Construisez votre carrière dans une entreprise qui place l'humain et l'innovation au centre
        </p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div class="inline-block px-4 py-2 bg-beewton-primary-400/10 text-beewton-primary-400 rounded-full text-sm font-medium mb-4">
              Pourquoi nous rejoindre
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Une culture d'entreprise unique
            </h2>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Chez Beewton, nous croyons que les meilleures solutions naissent de la collaboration, de la diversité des perspectives et de l'épanouissement de chacun.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start">
                <CheckCircle class="w-6 h-6 text-beewton-accent-teal mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div class="font-semibold text-gray-900">Projets stimulants</div>
                  <div class="text-gray-600">Travaillez sur des projets variés avec les dernières technologies</div>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-6 h-6 text-beewton-accent-teal mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div class="font-semibold text-gray-900">Formation continue</div>
                  <div class="text-gray-600">Budget formation et temps dédié pour votre montée en compétences</div>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-6 h-6 text-beewton-accent-teal mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div class="font-semibold text-gray-900">Équilibre vie pro/perso</div>
                  <div class="text-gray-600">Télétravail flexible, horaires adaptables</div>
                </div>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-6 h-6 text-beewton-accent-teal mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div class="font-semibold text-gray-900">Évolution rapide</div>
                  <div class="text-gray-600">Opportunités d'évolution dans une structure en croissance</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-beewton-primary-400/20 to-beewton-accent-teal/20 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Équipe Beewton"
              class="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>

        <div class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos avantages
            </h2>
            <p class="text-xl text-gray-600">
              Ce que nous offrons à nos collaborateurs
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <Laptop class="w-12 h-12 text-beewton-primary-400 mx-auto mb-4" />
              <h3 class="font-bold text-gray-900 mb-2">Équipement premium</h3>
              <p class="text-sm text-gray-600">MacBook Pro, écrans, accessoires</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <GraduationCap class="w-12 h-12 text-beewton-primary-400 mx-auto mb-4" />
              <h3 class="font-bold text-gray-900 mb-2">Formation</h3>
              <p class="text-sm text-gray-600">3000€/an de budget formation</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <Home class="w-12 h-12 text-beewton-primary-400 mx-auto mb-4" />
              <h3 class="font-bold text-gray-900 mb-2">Télétravail</h3>
              <p class="text-sm text-gray-600">Jusqu'à 3 jours/semaine</p>
            </div>
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <Heart class="w-12 h-12 text-beewton-primary-400 mx-auto mb-4" />
              <h3 class="font-bold text-gray-900 mb-2">Mutuelle</h3>
              <p class="text-sm text-gray-600">Prise en charge à 100%</p>
            </div>
          </div>
        </div>

        <div>
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Postes ouverts
            </h2>
            <p class="text-xl text-gray-600">
              Trouvez le poste qui correspond à vos aspirations
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="job in jobs"
              :key="job.id"
              class="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-beewton-primary-400 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-beewton-primary-400/10 rounded-lg flex items-center justify-center group-hover:bg-beewton-primary-400 transition-colors">
                  <component :is="job.icon" class="w-6 h-6 text-beewton-primary-400 group-hover:text-white transition-colors" />
                </div>
                <span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  {{ job.type }}
                </span>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-beewton-primary-400 transition-colors">
                {{ job.title }}
              </h3>

              <p class="text-gray-600 mb-4">
                {{ job.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center">
                  <MapPin class="w-3 h-3 mr-1" />
                  {{ job.location }}
                </span>
                <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center">
                  <Briefcase class="w-3 h-3 mr-1" />
                  {{ job.experience }}
                </span>
              </div>

              <div class="mb-4">
                <h4 class="font-semibold text-gray-900 mb-2 text-sm">Compétences clés :</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in job.skills"
                    :key="skill"
                    class="px-2 py-1 bg-beewton-primary-400/10 text-beewton-primary-400 text-xs rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>

              <button class="text-beewton-primary-400 hover:text-beewton-primary-600 font-medium flex items-center group">
                En savoir plus
                <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Candidature spontanée
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Vous ne trouvez pas le poste idéal ? Envoyez-nous votre candidature spontanée
        </p>
        <NuxtLink
          to="/contact"
          class="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 inline-flex items-center group"
        >
          Envoyer ma candidature
          <Send class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle, Laptop, GraduationCap, Home, Heart, Code, Palette, Database, Cloud, MapPin, Briefcase, ArrowRight, Send } from 'lucide-vue-next';

const jobs = [
  {
    id: 1,
    title: 'Développeur Full-Stack React/Next.js',
    description: 'Nous recherchons un développeur full-stack passionné avec une expérience React pour rejoindre notre équipe produit.',
    location: 'Paris',
    type: 'CDI',
    experience: '3-5 ans',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: 2,
    title: 'Designer UX/UI Senior',
    description: 'Rejoignez notre équipe de design pour créer des expériences utilisateur exceptionnelles et des interfaces modernes.',
    location: 'Paris',
    type: 'CDI',
    experience: '5+ ans',
    icon: Palette,
    skills: ['Figma', 'Design System', 'Prototypage', 'Recherche UX', 'RGAA']
  },
  {
    id: 3,
    title: 'Data Engineer',
    description: 'Construisez notre infrastructure data moderne et scalable pour traiter des millions d\'événements par jour.',
    location: 'Paris / Cotonou',
    type: 'CDI',
    experience: '3-5 ans',
    icon: Database,
    skills: ['Python', 'SQL', 'Airflow', 'dbt', 'AWS']
  },
  {
    id: 4,
    title: 'Consultant Cloud Senior',
    description: 'Consultant expérimenté en architectures cloud pour accompagner nos clients dans leur transformation.',
    location: 'Paris',
    type: 'CDI',
    experience: '5+ ans',
    icon: Cloud,
    skills: ['AWS/GCP/Azure', 'Kubernetes', 'Terraform', 'DevOps', 'FinOps']
  }
];

useHead({
  title: 'Carrières | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos opportunités de carrière et rejoignez une équipe passionnée'
    }
  ]
});
</script>
