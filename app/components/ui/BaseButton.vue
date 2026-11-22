<script setup lang="ts">
defineOptions({ inheritAttrs: false })

withDefaults(defineProps<{
  to?: string
  href?: string
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'
  variant?: 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  leadingIcon?: string
  trailingIcon?: string
}>(), {
  color: 'primary',
  variant: 'solid',
  size: 'md',
  block: false,
  loading: false,
  disabled: false,
  type: 'button'
})
</script>

<template>
  <UButton
    v-bind="$attrs"
    :to="to"
    :href="href"
    :color="color"
    :variant="variant"
    :size="size"
    :block="block"
    :loading="loading"
    :disabled="disabled"
    :type="type"
    :leading-icon="leadingIcon"
    :trailing-icon="trailingIcon"
    class="font-semibold"
  >
    <slot />
  </UButton>
</template>
