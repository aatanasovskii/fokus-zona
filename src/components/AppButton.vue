<template>
  <button
    :class="[
      'py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out',
      variantClasses,
      { 'w-full': fullWidth }
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String as () => 'primary' | 'secondary',
    default: 'primary',
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-accent text-primary hover:bg-gold hover:text-primary';
    case 'secondary':
      return 'bg-transparent text-accent hover:bg-accent hover:text-primary border border-accent';
    default:
      return 'bg-accent text-primary hover:bg-gold hover:text-primary';
  }
});
</script>
