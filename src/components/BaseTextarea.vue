<template>
  <v-textarea
    variant="plain"
    hide-details
    no-resize
    class="base-textarea"
  >
    <slot></slot>
  </v-textarea>
</template>

<script setup>

</script>

<style lang="scss">
  .base-textarea {

    .v-field {
      font-size: unset;
    }

    .v-field__input {
      letter-spacing: normal;
    }

    textarea.v-field__input {
      padding: 0;
      mask-image: none;
    }
  }
</style>
