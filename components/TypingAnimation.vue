<template>
  <span :class="className">
    {{ staticText }}
    <span class="inline-block">
      <span style="color: #FF8A34">{{ currentText }}</span>
      <span class="animate-pulse" style="color: #FF8A34">|</span>
    </span>
  </span>
</template>

<script setup lang="ts">
interface Props {
  staticText: string;
  rotatingWords: string[];
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
});

const currentWordIndex = ref(0);
const currentText = ref('');
const isDeleting = ref(false);
const isWaiting = ref(false);

watch([currentText, isDeleting, isWaiting, currentWordIndex], () => {
  const currentWord = props.rotatingWords[currentWordIndex.value];

  if (isWaiting.value) {
    setTimeout(() => {
      isWaiting.value = false;
      isDeleting.value = true;
    }, 2000);
    return;
  }

  if (!isDeleting.value && currentText.value === currentWord) {
    setTimeout(() => {
      isWaiting.value = true;
    }, 1000);
    return;
  }

  if (isDeleting.value && currentText.value === '') {
    isDeleting.value = false;
    currentWordIndex.value = (currentWordIndex.value + 1) % props.rotatingWords.length;
    return;
  }

  const typingSpeed = isDeleting.value ? 50 : 100;

  setTimeout(() => {
    if (!isDeleting.value) {
      currentText.value = currentWord.slice(0, currentText.value.length + 1);
    } else {
      currentText.value = currentWord.slice(0, currentText.value.length - 1);
    }
  }, typingSpeed);
}, { deep: true });

onMounted(() => {
  const currentWord = props.rotatingWords[0];
  const updateText = () => {
    if (currentText.value.length < currentWord.length) {
      currentText.value = currentWord.slice(0, currentText.value.length + 1);
    }
  };
  updateText();
});
</script>
