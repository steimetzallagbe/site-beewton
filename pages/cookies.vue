<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-12">Politique des cookies</h1>

        <div class="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte stocké sur votre ordinateur par votre navigateur. Il nous permet de vous reconnaître lors de vos visites ultérieures.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Types de cookies utilisés</h2>
            <p>
              <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site<br>
              <strong>Cookies analytiques :</strong> Nous aident à comprendre comment vous utilisez le site<br>
              <strong>Cookies de marketing :</strong> Utilisés pour vous proposer du contenu pertinent
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Gestion des cookies</h2>
            <p>
              Vous pouvez contrôler les cookies via les paramètres de votre navigateur. Vous pouvez refuser les cookies non essentiels à tout moment.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p>
              Pour toute question concernant les cookies, contactez-nous à contact@beewton.com
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Politique des cookies | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Politique des cookies de Beewton'
    }
  ]
});
</script>
