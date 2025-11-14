<template>
  <div v-if="compact">
    <h3 class="font-semibold mb-3 text-white">Newsletter</h3>
    <div v-if="submitted" class="flex items-center gap-2 text-purple-200 text-sm">
      <CheckCircle class="w-4 h-4" />
      <span>Merci !</span>
    </div>
    <form v-else @submit.prevent="handleSubmit" class="flex gap-2">
      <input
        type="email"
        required
        v-model="email"
        placeholder="Votre email"
        class="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white text-sm placeholder-purple-200 border border-white/20 focus:border-white focus:outline-none transition-colors"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all"
      >
        <Send class="w-4 h-4" />
      </button>
    </form>
  </div>
  <div v-else class="bg-gradient-to-br from-beewton-primary to-beewton-primary-600 rounded-2xl p-8 md:p-12">
    <div class="max-w-2xl mx-auto text-center">
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
        Restez informé
      </h3>
      <p class="text-purple-100 mb-8">
        Recevez nos dernières actualités, articles et insights tech directement dans votre boîte mail.
      </p>

      <div v-if="submitted" class="flex items-center justify-center gap-3 text-white">
        <CheckCircle class="w-6 h-6" />
        <span class="font-medium">Merci pour votre inscription !</span>
      </div>
      <form v-else @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          v-model="email"
          placeholder="Votre adresse email"
          class="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-purple-200 border-2 border-white/20 focus:border-white focus:outline-none transition-colors"
        />
        <button
          type="submit"
          class="px-8 py-4 bg-white text-beewton-primary font-medium rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
        >
          S'inscrire
          <Send class="w-4 h-4" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Send, CheckCircle } from 'lucide-vue-next';

interface Props {
  compact?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  compact: false
});

const email = ref('');
const submitted = ref(false);

const handleSubmit = () => {
  submitted.value = true;
  setTimeout(() => {
    submitted.value = false;
    email.value = '';
  }, 3000);
};
</script>
