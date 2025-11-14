<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-12">Politique de confidentialité</h1>

        <div class="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Collecte de données</h2>
            <p>
              Beewton collecte certaines données personnelles lorsque vous utilisez notre site. Ces données incluent votre adresse email, votre nom et votre message si vous remplissez notre formulaire de contact.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Utilisation des données</h2>
            <p>
              Vos données sont utilisées pour vous contacter et vous fournir les services demandés. Nous ne partagerons jamais vos données avec des tiers sans votre consentement.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Droits de l'utilisateur</h2>
            <p>
              Conformément au RGPD, vous avez le droit d'accéder, modifier ou supprimer vos données personnelles. Contactez-nous pour exercer ces droits.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité pour protéger vos données contre l'accès non autorisé.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Politique de confidentialité | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Politique de confidentialité de Beewton'
    }
  ]
});
</script>
