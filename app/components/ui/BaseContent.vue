<script setup lang="ts">
defineProps<{ html: string }>()
</script>

<template>
  <div class="eecc-prose" v-html="html" />
</template>
