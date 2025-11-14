<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="flex items-center">
          <img src="/Huge@2x.svg" alt="Beewton" class="h-8 w-auto" />
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-8">
          <div
            v-for="item in navigation"
            :key="item.name"
            class="relative group"
            @mouseenter="item.hasSubmenu ? (knowledgeMenuOpen = true) : null"
            @mouseleave="item.hasSubmenu ? (knowledgeMenuOpen = false) : null"
          >
            <NuxtLink
              v-if="!item.hasSubmenu"
              :to="`/${item.href}`"
              :class="getNavLinkClasses(item.href)"
            >
              {{ item.name }}
            </NuxtLink>
            <button
              v-else
              :class="getNavLinkClasses(item.href)"
            >
              {{ item.name }}
            </button>
            <div
              v-if="item.hasSubmenu"
              :class="`absolute top-full left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                knowledgeMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`"
            >
              <NuxtLink
                v-for="subItem in item.submenu"
                :key="subItem.name"
                :to="`/${subItem.href}`"
                class="block w-full text-left px-4 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-50"
                :class="$route.path === `/${subItem.href}` ? 'text-beewton-primary-400 bg-purple-50' : ''"
              >
                {{ subItem.name }}
              </NuxtLink>
            </div>
          </div>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 bg-beewton-primary text-white text-sm font-medium rounded-lg hover:bg-beewton-primary-600 transition-colors"
          >
            Prendre rendez-vous
          </a>
        </div>

        <button
          class="md:hidden p-2"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <component :is="mobileMenuOpen ? X : Menu" class="w-6 h-6 text-gray-900" />
        </button>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
        <div v-for="item in navigation" :key="item.name">
          <template v-if="item.hasSubmenu">
            <NuxtLink
              v-for="subItem in item.submenu"
              :key="subItem.name"
              :to="`/${subItem.href}`"
              class="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              :class="$route.path === `/${subItem.href}` ? 'text-beewton-primary-400 bg-purple-50' : ''"
              @click="mobileMenuOpen = false"
            >
              {{ subItem.name }}
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink
              :to="`/${item.href}`"
              class="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              :class="$route.path === `/${item.href}` ? 'text-beewton-primary-400 bg-purple-50' : ''"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </template>
        </div>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full mt-4 mx-4 px-4 py-2 bg-beewton-primary text-white text-sm font-medium rounded-lg hover:bg-beewton-primary-600 transition-colors text-center"
          style="width: calc(100% - 2rem)"
        >
          Prendre rendez-vous
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next';

const route = useRoute();
const mobileMenuOpen = ref(false);
const knowledgeMenuOpen = ref(false);

const navigation = [
  { name: 'Offres', href: 'services' },
  {
    name: 'Nous connaître',
    href: 'about',
    hasSubmenu: true,
    submenu: [
      { name: 'À propos', href: 'about' },
      { name: 'Secteurs', href: 'sectors' },
    ]
  },
  { name: 'Réalisations', href: 'cases' },
  { name: 'Blog', href: 'blog' },
  { name: 'Carrières', href: 'careers' },
  { name: 'Contact', href: 'contact' },
];

const getNavLinkClasses = (href: string) => {
  const baseClasses = 'text-sm font-medium transition-colors py-2';
  const isActive = route.path === `/${href}` || route.path.startsWith(`/${href}/`);
  return isActive
    ? `${baseClasses} text-beewton-primary-400`
    : `${baseClasses} text-gray-700 hover:text-beewton-primary-400`;
};
</script>
