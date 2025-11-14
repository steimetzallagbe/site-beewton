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
          À propos de Beewton
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 max-w-3xl">
          Nous accompagnons les entreprises dans leur transformation digitale depuis 2020.
        </p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div class="inline-block px-4 py-2 bg-beewton-primary-400/10 text-beewton-primary-400 rounded-full text-sm font-medium mb-4">
              Notre histoire
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Créer des solutions numériques qui créent de la valeur
            </h2>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              Beewton est un cabinet de conseil en transformation digitale fondé en 2020. Nos équipes pluridisciplinaires (consultants, designers, développeurs) interviennent de la stratégie à la mise en exploitation.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Nous croyons fermement que la technologie doit servir l'humain et créer de la valeur tangible. Notre approche combine rigueur méthodologique et pragmatisme pour livrer des solutions qui fonctionnent vraiment.
            </p>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-beewton-primary-400/20 to-beewton-accent-teal/20 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Équipe Beewton"
              class="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div class="text-center p-8 bg-gray-50 rounded-xl">
            <div class="text-4xl font-bold text-beewton-primary-400 mb-2">15+</div>
            <div class="text-gray-600 font-medium">Clients accompagnés</div>
          </div>
          <div class="text-center p-8 bg-gray-50 rounded-xl">
            <div class="text-4xl font-bold text-beewton-primary-400 mb-2">30+</div>
            <div class="text-gray-600 font-medium">Projets livrés</div>
          </div>
          <div class="text-center p-8 bg-gray-50 rounded-xl">
            <div class="text-4xl font-bold text-beewton-primary-400 mb-2">98%</div>
            <div class="text-gray-600 font-medium">Clients satisfaits</div>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nos valeurs
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-beewton-primary-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap class="w-8 h-8 text-beewton-primary-400" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
              <p class="text-gray-600 text-sm">
                Nous visons l'excellence dans chaque projet, en combinant expertise technique et créativité.
              </p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-beewton-accent-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users class="w-8 h-8 text-beewton-accent-teal" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Collaboration</h3>
              <p class="text-gray-600 text-sm">
                Nous travaillons en étroite collaboration avec nos clients pour garantir leur réussite.
              </p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-beewton-accent-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp class="w-8 h-8 text-beewton-accent-orange" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p class="text-gray-600 text-sm">
                Nous restons à la pointe des technologies pour proposer des solutions modernes.
              </p>
            </div>
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-beewton-accent-lime/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield class="w-8 h-8 text-beewton-accent-lime" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Intégrité</h3>
              <p class="text-gray-600 text-sm">
                Transparence, honnêteté et engagement dans toutes nos relations.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Notre mission
            </h2>
            <p class="text-xl text-gray-700 text-center mb-8 leading-relaxed">
              Créer des solutions numériques qui créent de la valeur, vite et dans la durée.
            </p>
            <p class="text-lg text-gray-600 text-center leading-relaxed">
              Nous mettons l'utilisateur au centre et combinons rigueur méthodologique et pragmatisme pour livrer rapidement. Notre objectif est de transformer vos idées en produits digitaux qui génèrent un impact mesurable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos implantations
          </h2>
          <p class="text-xl text-gray-600">
            Deux bureaux pour vous servir partout dans le monde
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-beewton-primary-400 transition-all">
            <MapPin class="w-12 h-12 text-beewton-primary-400 mb-4" />
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Paris, France</h3>
            <p class="text-gray-600 mb-4">Siège européen</p>
            <p class="text-sm text-gray-500">
              Notre bureau principal où notre équipe de consultants, designers et développeurs travaille sur vos projets les plus stratégiques.
            </p>
          </div>
          <div class="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-beewton-primary-400 transition-all">
            <MapPin class="w-12 h-12 text-beewton-accent-teal mb-4" />
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Cotonou, Bénin</h3>
            <p class="text-gray-600 mb-4">Centre nearshore</p>
            <p class="text-sm text-gray-500">
              Notre centre de développement nearshore qui combine proximité culturelle et excellence technique pour vos projets.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Rejoignez l'aventure
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Nous recherchons des talents passionnés pour rejoindre notre équipe
        </p>
        <NuxtLink
          to="/careers"
          class="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 inline-flex items-center group"
        >
          Voir nos offres
          <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Zap, Users, TrendingUp, Shield, MapPin, ArrowRight } from 'lucide-vue-next';

useHead({
  title: 'À propos | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez Beewton, cabinet de conseil en transformation digitale fondé en 2020'
    }
  ]
});
</script>
