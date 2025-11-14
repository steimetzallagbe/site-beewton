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
          Contactez-nous
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 max-w-3xl">
          Une question ? Un projet ? Parlons-en ensemble
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div class="mb-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                Plusieurs façons de nous joindre
              </h2>
              <p class="text-gray-600">
                Choisissez le canal qui vous convient le mieux
              </p>
            </div>

            <div class="space-y-6 mb-12">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-beewton-primary-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail class="w-6 h-6 text-beewton-primary-400" />
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:contact@beewton.com" class="text-beewton-primary-400 hover:text-beewton-primary-600">
                    contact@beewton.com
                  </a>
                  <p class="text-sm text-gray-600 mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-beewton-accent-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone class="w-6 h-6 text-beewton-accent-teal" />
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 mb-1">Téléphone</h3>
                  <a href="tel:+33123456789" class="text-beewton-primary-400 hover:text-beewton-primary-600">
                    +33 1 23 45 67 89
                  </a>
                  <p class="text-sm text-gray-600 mt-1">Lun-Ven 9h-18h</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-beewton-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar class="w-6 h-6 text-beewton-accent-orange" />
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 mb-1">Rendez-vous</h3>
                  <a
                    href="https://calendly.com/beewton"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-beewton-primary-400 hover:text-beewton-primary-600"
                  >
                    Réserver un créneau
                  </a>
                  <p class="text-sm text-gray-600 mt-1">Visio ou présentiel</p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl p-8">
              <h3 class="font-bold text-gray-900 mb-4">Nos bureaux</h3>
              <div class="space-y-6">
                <div class="flex items-start">
                  <MapPin class="w-5 h-5 text-beewton-primary-400 mt-1 flex-shrink-0" />
                  <div class="ml-3">
                    <div class="font-semibold text-gray-900">Paris, France</div>
                    <div class="text-sm text-gray-600">Siège européen</div>
                    <div class="text-sm text-gray-500 mt-1">123 Avenue des Champs-Élysées<br>75008 Paris</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <MapPin class="w-5 h-5 text-beewton-accent-teal mt-1 flex-shrink-0" />
                  <div class="ml-3">
                    <div class="font-semibold text-gray-900">Cotonou, Bénin</div>
                    <div class="text-sm text-gray-600">Centre nearshore</div>
                    <div class="text-sm text-gray-500 mt-1">Quartier des Affaires<br>Cotonou</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>

              <div v-if="submitted" class="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <div class="flex items-center gap-3 text-green-700">
                  <CheckCircle class="w-6 h-6" />
                  <div>
                    <div class="font-semibold">Message envoyé !</div>
                    <div class="text-sm">Nous vous répondrons dans les plus brefs délais.</div>
                  </div>
                </div>
              </div>

              <form v-else @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Nom <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Email <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise
                  </label>
                  <input
                    v-model="form.company"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Sujet <span class="text-red-500">*</span>
                  </label>
                  <select
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="project">Nouveau projet</option>
                    <option value="info">Demande d'information</option>
                    <option value="career">Carrière</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Message <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="form.message"
                    required
                    rows="6"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beewton-primary-400 focus:border-transparent transition-all"
                    placeholder="Décrivez votre besoin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 flex items-center justify-center group"
                >
                  Envoyer le message
                  <Send class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Besoin d'une réponse rapide ?
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          Consultez notre FAQ ou réservez directement un créneau avec un expert
        </p>
        <a
          href="https://calendly.com/beewton"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-4 bg-beewton-primary text-white font-medium rounded-lg hover:bg-beewton-primary-600 transition-all transform hover:scale-105 inline-flex items-center group"
        >
          Prendre rendez-vous
          <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Mail, Phone, Calendar, MapPin, CheckCircle, Send, ArrowRight } from 'lucide-vue-next';

const form = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
});

const submitted = ref(false);

const submitForm = async () => {
  submitted.value = true;
  setTimeout(() => {
    submitted.value = false;
    form.name = '';
    form.email = '';
    form.company = '';
    form.subject = '';
    form.message = '';
  }, 5000);
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
