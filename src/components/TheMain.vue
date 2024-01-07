<template>
  <v-main class="the-main">
    <div class="the-main__container mx-auto d-flex flex-column">
      <slot></slot>
    </div>
  </v-main>
</template>

<script setup>

</script>

<style lang="scss">
  .the-main {

    &.v-main {
      padding-top: 168px;
    }

    &__container {
      max-width: 840px;
    }
  }
</style>
