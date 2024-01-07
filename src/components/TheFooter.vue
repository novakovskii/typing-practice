<template>
  <v-footer class="the-footer">
    <div class="the-footer__container d-flex w-100 justify-space-between">
      <slot></slot>
    </div>
  </v-footer>
</template>

<script setup>

</script>

<style lang="scss">
  @import 'vuetify/lib/styles/settings/_variables.scss';

  .the-footer {

    &.v-footer {
      background: none;
      justify-content: center;
      position: static !important;
      max-height: 48px;
    }

    &__container {
      max-width: 1360px;
      padding: 16px 0;
      border-top: 1px solid rgb(var(--v-theme-secondary_variant));

      @media #{map-get($display-breakpoints, 'lg-and-down')} {

      }
    }
  }
</style>
