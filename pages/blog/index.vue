<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p class="text-xl text-gray-600 mb-12">
          Découvrez nos articles sur les tendances et bonnes pratiques du digital
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NuxtLink
            v-for="article in articles"
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Clock, UserCircle } from 'lucide-vue-next';

const articles = [
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

useHead({
  title: 'Blog | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Lisez nos articles sur les tendances digitales, l\'IA, le cloud et les bonnes pratiques'
    }
  ]
});
</script>
