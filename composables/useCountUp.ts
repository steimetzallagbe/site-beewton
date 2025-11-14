interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export const useCountUp = ({ end, duration = 2000, suffix = '', decimals = 0 }: UseCountUpOptions) => {
  const count = ref(0);
  const isVisible = ref(false);
  const elementRef = ref<HTMLDivElement | null>(null);

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true;
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.value) {
      observer.observe(elementRef.value);
    }

    onBeforeUnmount(() => {
      if (elementRef.value) {
        observer.unobserve(elementRef.value);
      }
    });
  });

  watch(isVisible, (newVal) => {
    if (!newVal) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;

      count.value = currentCount;

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        count.value = end;
      }
    };

    requestAnimationFrame(updateCount);
  });

  const formattedCount = computed(() => {
    const value = decimals > 0
      ? count.value.toFixed(decimals)
      : Math.floor(count.value).toString();
    return value + suffix;
  });

  return {
    count: formattedCount,
    ref: elementRef
  };
};
