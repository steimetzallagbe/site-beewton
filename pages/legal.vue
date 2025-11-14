<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-12">Mentions légales</h1>

        <div class="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Informations légales</h2>
            <p>
              <strong>Dénomination sociale :</strong> Beewton<br>
              <strong>Forme juridique :</strong> SARL<br>
              <strong>SIREN :</strong> XXX XXX XXX<br>
              <strong>Siège social :</strong> Paris, France
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Responsable éditorial</h2>
            <p>
              Le présent site est édité par Beewton.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments de ce site (textes, images, graphismes, logo, icônes, sons, logiciels) sont protégés par les droits d'auteur.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Limitation de responsabilité</h2>
            <p>
              Beewton ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mentions légales | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Mentions légales de Beewton'
    }
  ]
});
</script>
