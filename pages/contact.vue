<template>
  <div class="bg-white">
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
        <p class="text-xl text-gray-600 mb-12">
          Une question ? Un projet ? Parlons-en !
        </p>

        <form @submit.prevent="submitForm" class="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent"
              />
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
            <input
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent"
            />
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              v-model="form.message"
              required
              rows="6"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            class="px-8 py-3 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = async () => {
  console.log('Form submitted:', form);
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
};

useHead({
  title: 'Contact | Beewton',
  meta: [
    {
      name: 'description',
      content: 'Contactez Beewton pour discuter de vos projets digitaux'
    }
  ]
});
</script>
