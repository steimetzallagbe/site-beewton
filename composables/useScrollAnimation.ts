export const useScrollAnimation = (threshold = 0.1) => {
  const ref = ref<HTMLDivElement | null>(null);
  const isVisible = ref(false);

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold }
    );

    if (ref.value) {
      observer.observe(ref.value);
    }

    onBeforeUnmount(() => {
      if (ref.value) {
        observer.unobserve(ref.value);
      }
    });
  });

  return { ref, isVisible };
};
