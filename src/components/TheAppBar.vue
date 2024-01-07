<template>
  <v-app-bar class="the-app-bar">
    <slot></slot>
  </v-app-bar>
</template>

<script setup>

</script>

<style lang="scss">
  @import 'vuetify/lib/styles/settings/_variables.scss';

  .the-app-bar {

    &.v-app-bar.v-toolbar {
      background: rgb(var(--v-theme-background));

      &::before {
        content: '';
        position: absolute;
        width: 1360px;
        border-bottom: 1px solid rgb(var(--v-theme-secondary_variant));
        left: calc((100% - 1366px) / 2);
        bottom: 0;
      }
    }

    .v-toolbar__content {
      max-width: 1360px;
      margin: auto;

      // @media #{map-get($display-breakpoints, 'lg-and-down')} {

      // }
    }
  }
</style>
