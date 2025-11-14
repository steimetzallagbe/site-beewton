<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/blog" class="text-beewton-primary-400 hover:text-beewton-primary-600 mb-8 inline-flex items-center">
          <ArrowLeft class="w-4 h-4 mr-2" />
          Retour au blog
        </NuxtLink>

        <article>
          <div class="mb-8">
            <div class="inline-block px-3 py-1 bg-beewton-primary-400/10 text-beewton-primary-400 rounded-full text-sm font-medium mb-4">
              {{ article?.category }}
            </div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
              {{ article?.title }}
            </h1>
            <div class="flex items-center gap-6 text-gray-600">
              <span class="flex items-center">
                <Calendar class="w-4 h-4 mr-2" />
                {{ article?.date }}
              </span>
              <span class="flex items-center">
                <Clock class="w-4 h-4 mr-2" />
                {{ article?.readTime }}
              </span>
              <span class="flex items-center">
                <User class="w-4 h-4 mr-2" />
                {{ article?.author }}
              </span>
            </div>
          </div>

          <img
            v-if="article?.image"
            :src="article.image"
            :alt="article.title"
            class="w-full h-96 object-cover rounded-lg mb-12"
          />

          <div class="prose prose-lg max-w-none mb-12">
            <div v-for="(paragraph, idx) in article?.content" :key="idx" class="mb-6">
              <p v-if="!paragraph.startsWith('##')" class="text-gray-700 leading-relaxed">
                {{ paragraph }}
              </p>
              <h2 v-else class="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {{ paragraph.replace('## ', '') }}
              </h2>
            </div>
          </div>

          <div class="border-t pt-8">
            <h3 class="text-xl font-bold text-gray-900 mb-4">À propos de l'auteur</h3>
            <p class="text-gray-600">
              {{ article?.author }} partage ses insights et expériences sur {{ article?.category }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          Découvrez autres articles
        </h2>
        <NuxtLink
          to="/blog"
          class="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all inline-flex items-center group"
        >
          Voir tous les articles
          <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-vue-next';

const route = useRoute();
const id = route.params.id as string;

const blogArticles = [
  {
    id: 'ia-generative-entreprise',
    title: "L'IA générative en entreprise : opportunités et défis",
    excerpt: "Comment les entreprises peuvent tirer parti de l'IA générative tout en gérant les risques liés à la sécurité et l'éthique.",
    author: 'Sophie Laurent',
    date: '15 Oct 2024',
    readTime: '8 min',
    category: 'Intelligence Artificielle',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      "L'intelligence artificielle générative représente une révolution majeure dans le monde de l'entreprise. Des outils comme ChatGPT, Midjourney ou GitHub Copilot transforment la façon dont nous travaillons, créons et innovons.",
      "## Les opportunités de l'IA générative",
      "L'IA générative offre des possibilités sans précédent pour automatiser des tâches créatives et augmenter la productivité des équipes.",
      "**1. Génération de contenu** : Création de textes marketing, documentation technique.",
      "**2. Assistance au développement** : Génération de code, détection de bugs.",
      "## Les défis à relever",
      "Malgré son potentiel, l'IA générative soulève des questions importantes.",
      "**Sécurité des données** : Comment garantir que les données confidentielles ne fuient pas ?",
      "## Conclusion",
      "L'IA générative n'est pas une mode passagère, c'est une transformation profonde de nos façons de travailler."
    ]
  },
  {
    id: 'accessibilite-numerique-rgaa',
    title: 'Accessibilité numérique : au-delà de la conformité RGAA',
    excerpt: "L'accessibilité web n'est pas qu'une contrainte légale.",
    author: 'Thomas Bernard',
    date: '10 Oct 2024',
    readTime: '6 min',
    category: 'UX & Design',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      "L'accessibilité numérique est souvent perçue comme une contrainte réglementaire.",
      "## Pourquoi l'accessibilité est importante",
      "Plus de 15% de la population mondiale vit avec un handicap.",
      "## Conclusion",
      "L'accessibilité numérique n'est pas un coût, c'est un investissement."
    ]
  },
  {
    id: 'architecture-cloud-native',
    title: 'Architecture cloud-native : principes et bonnes pratiques',
    excerpt: "Comment concevoir des applications résilientes et scalables.",
    author: 'Marc Dubois',
    date: '5 Oct 2024',
    readTime: '10 min',
    category: 'Cloud & DevOps',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      "Le cloud computing a profondément transformé la façon dont nous concevons des applications.",
      "## Qu'est-ce que le cloud-native ?",
      "Une application cloud-native est conçue spécifiquement pour exploiter les avantages du cloud.",
      "## Conclusion",
      "L'architecture cloud-native n'est pas qu'une question de technologie."
    ]
  }
];

const article = computed(() => blogArticles.find(a => a.id === id));

watch(article, (newArticle) => {
  if (newArticle) {
    useHead({
      title: `${newArticle.title} | Beewton`,
      meta: [
        {
          name: 'description',
          content: newArticle.excerpt
        },
        {
          property: 'og:title',
          content: newArticle.title
        },
        {
          property: 'og:description',
          content: newArticle.excerpt
        },
        {
          property: 'og:image',
          content: newArticle.image
        }
      ]
    });
  }
}, { immediate: true });
</script>
