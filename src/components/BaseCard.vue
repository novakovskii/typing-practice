<template>
  <v-card class="base-card pa-6" flat>
    <v-card-title class="base-card__title text-body-2 pa-0 text-secondary">
      {{ title }}
    </v-card-title>
    <v-card-text class="base-card__text pa-0 mt-2">
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script setup>
  const props = defineProps({
    title: String
  })
</script>

<style lang="scss">
  .base-card {
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.03) inset !important;
  }
</style>
