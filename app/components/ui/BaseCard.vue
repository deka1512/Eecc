<script setup lang="ts">
withDefaults(defineProps<{
  as?: 'article' | 'div' | 'section'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  interactive?: boolean
}>(), {
  as: 'div',
  padding: 'md',
  interactive: false
})
</script>

<template>
  <component
    :is="as"
    class="eecc-card"
    :class="[
      {
        'p-0': padding === 'none',
        'p-4 sm:p-5': padding === 'sm',
        'p-5 sm:p-7': padding === 'md',
        'p-7 sm:p-9': padding === 'lg',
        'transition duration-300 hover:-translate-y-1 hover:shadow-xl': interactive
      }
    ]"
  >
    <slot name="media" />
    <div v-if="$slots.header" class="px-5 pt-5 sm:px-7 sm:pt-7">
      <slot name="header" />
    </div>
    <div :class="{ 'p-5 sm:p-7': padding === 'none' && !$slots.header }">
      <slot />
    </div>
    <div v-if="$slots.footer" class="border-t border-[var(--eecc-color-border)] px-5 py-4 sm:px-7">
      <slot name="footer" />
    </div>
  </component>
</template>
