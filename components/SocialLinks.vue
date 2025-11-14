<template>
  <div class="flex gap-3">
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
      :class="`${baseClasses} ${variantClasses}`"
      :aria-label="social.label"
    >
      <component :is="social.icon" class="w-5 h-5" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-vue-next';

interface Props {
  variant?: 'light' | 'dark';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'dark'
});

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'Github' },
];

const baseClasses = 'w-10 h-10 rounded-full flex items-center justify-center transition-all transform hover:scale-110';
const variantClasses = computed(() =>
  props.variant === 'light'
    ? 'bg-white/10 hover:bg-white/20 text-white'
    : 'bg-gray-100 hover:bg-beewton-primary-400 text-gray-700 hover:text-white'
);
</script>
