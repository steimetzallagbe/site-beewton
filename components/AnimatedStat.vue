<template>
  <div ref="ref" class="text-center">
    <div class="text-4xl md:text-5xl font-bold text-beewton-primary-400 mb-2">
      {{ count }}
    </div>
    <div class="text-gray-600 font-medium">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string;
  label: string;
}

const props = defineProps<Props>();

const parseValue = (val: string) => {
  const hasPlus = val.includes('+');
  const hasPercent = val.includes('%');

  let numericValue = parseFloat(val.replace(/[+%,]/g, '').replace(',', '.'));
  let suffix = '';

  if (hasPlus) suffix += '+';
  if (hasPercent) suffix = '%';

  const decimals = hasPercent ? 1 : 0;

  return { numericValue, suffix, decimals };
};

const { numericValue, suffix, decimals } = parseValue(props.value);
const { count, ref } = useCountUp({
  end: numericValue,
  duration: 2000,
  suffix,
  decimals
});
</script>
