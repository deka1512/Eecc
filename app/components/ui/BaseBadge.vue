<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  variant?: 'solid' | 'outline' | 'soft' | 'subtle'
  size?: 'sm' | 'md' | 'lg'
}>(), {
  color: 'neutral',
  variant: 'soft',
  size: 'md'
})
</script>

<template>
  <UBadge :color="color" :variant="variant" :size="size" class="font-semibold tracking-wide">
    <slot />
  </UBadge>
</template>
