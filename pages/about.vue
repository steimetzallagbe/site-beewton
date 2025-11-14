<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">À propos de Beewton</h1>
        <p class="text-xl text-gray-600 mb-12">
          Nous accompagnons les entreprises dans leur transformation digitale depuis 2020.
        </p>

        <div class="prose prose-lg max-w-none">
          <p>
            Beewton est un cabinet de conseil en transformation digitale fondé en 2020. Nos équipes pluridisciplinaires (consultants, designers, développeurs) interviennent de la stratégie à la mise en exploitation.
          </p>

          <h2>Notre mission</h2>
          <p>
            Créer des solutions numériques qui créent de la valeur, vite et dans la durée.
          </p>

          <h2>Notre approche</h2>
          <p>
            Nous mettons l'utilisateur au centre et combinons rigueur méthodologique et pragmatisme pour livrer rapidement.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'À propos | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Découvrez Beewton, cabinet de conseil en transformation digitale'
    }
  ]
});
</script>
