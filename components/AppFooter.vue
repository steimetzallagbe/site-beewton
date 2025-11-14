<template>
  <footer class="bg-beewton-primary text-white mt-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div class="md:col-span-4">
          <img src="/Huge@2x.svg" alt="Beewton" class="h-8 w-auto mb-4 brightness-0 invert" />
          <p class="text-purple-200 text-sm mb-6">
            Des solutions numériques qui créent de la valeur, vite.
          </p>
          <div class="mb-6">
            <Newsletter compact />
          </div>
          <div class="mb-4">
            <h4 class="font-semibold mb-3 text-white">Suivez-nous</h4>
            <SocialLinks variant="light" />
          </div>
        </div>

        <div class="md:col-span-2">
          <h3 class="font-semibold mb-4 text-white">Offres</h3>
          <ul class="space-y-2 text-sm text-purple-200">
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Conseil & AMOA</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Produit & UX</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Développement</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Data & IA</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-white transition-colors">Cloud & Cyber</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h3 class="font-semibold mb-4 text-white">Secteurs</h3>
          <ul class="space-y-2 text-sm text-purple-200">
            <li><NuxtLink to="/sectors" class="hover:text-white transition-colors">Secteur public</NuxtLink></li>
            <li><NuxtLink to="/sectors" class="hover:text-white transition-colors">Finance</NuxtLink></li>
            <li><NuxtLink to="/sectors" class="hover:text-white transition-colors">Retail</NuxtLink></li>
            <li><NuxtLink to="/sectors" class="hover:text-white transition-colors">Industrie</NuxtLink></li>
            <li><NuxtLink to="/sectors" class="hover:text-white transition-colors">Télécom</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h3 class="font-semibold mb-4 text-white">Entreprise</h3>
          <ul class="space-y-2 text-sm text-purple-200">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">À propos</NuxtLink></li>
            <li><NuxtLink to="/careers" class="hover:text-white transition-colors">Carrières</NuxtLink></li>
            <li><NuxtLink to="/cases" class="hover:text-white transition-colors">Réalisations</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h3 class="font-semibold mb-4 text-white">Implantations</h3>
          <ul class="space-y-3 text-sm text-purple-200">
            <li>
              <p class="font-medium text-white">Paris, France</p>
              <p class="text-xs">Siège européen</p>
            </li>
            <li>
              <p class="font-medium text-white">Cotonou, Bénin</p>
              <p class="text-xs">Centre nearshore</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-purple-200">
          &copy; {{ new Date().getFullYear() }} Beewton. Tous droits réservés.
        </p>
        <div class="flex gap-6 text-sm text-purple-200">
          <NuxtLink to="/legal" class="hover:text-white transition-colors">Mentions légales</NuxtLink>
          <NuxtLink to="/privacy" class="hover:text-white transition-colors">Politique de confidentialité</NuxtLink>
          <NuxtLink to="/cookies" class="hover:text-white transition-colors">Cookies</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
