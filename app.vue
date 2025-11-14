<template>
  <div class="min-h-screen bg-white">
    <AppHeader />
    <main class="pt-16">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
