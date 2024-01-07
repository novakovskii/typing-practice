<template>
  <v-app>
    <TheNavigationDrawer
      v-model="drawer"
      location="right"
      width="480"
      class="px-10 py-8"
      permanent
    >
      <div class="d-flex align-center">
        <v-btn
          variant="text"
          icon="mdi-chevron-double-right"
          @click="drawer = !drawer"
        ></v-btn>
      </div>

      <span>Max text length</span>
      <v-slider
        v-model="slider"
        class="align-center"
        :max="100"
        :min="10"
        :step="1"
        hide-details
      >
        <template v-slot:prepend>
          <v-text-field
            v-model="slider"
            hide-details
            single-line
            density="compact"
            type="number"
            style="width: 70px"
          ></v-text-field>
        </template>
      </v-slider>

      <span>Categories</span>
      <v-chip-group
        v-model="categories"
        column
        multiple
      >
        <v-chip
          filter
          variant="outlined"
        >
          Business
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Entertainment
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Environment
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Food
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Health
        </v-chip>
        <v-chip
          filter
          variant="outlined"
        >
          Politics
        </v-chip>
      </v-chip-group>

      <span>Language</span>
      <v-select
        v-model="language"
        :items="['Russian', 'English']"
      ></v-select>

      <span>Country</span>
      <v-select
        v-model="country"
        :items="['All', 'Russia']"
      ></v-select>

      <v-btn>Reset settings</v-btn>
    </TheNavigationDrawer>

    <TheAppBar
      flat
      height="48"
      class="pt-8 pb-6"
    >
      <v-app-bar-title class="ma-0 d-flex align-center text-primary">
        <v-icon icon="mdi-keyboard" />
        Typing Practice
      </v-app-bar-title>
      <v-btn
        :icon="theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        class="text-secondary"
        @click="toggleTheme"
      />
      <v-btn
        v-show="!drawer"
        prepend-icon="mdi-chevron-double-left"
        class="ma-0"
        @click="drawer = !drawer"
      >Settings</v-btn>
    </TheAppBar>

    <TheMain>
      <div class="d-flex ga-2">
        <BaseChip
          variant="flat"
        >
          Politics
        </BaseChip>
        <BaseChip
          variant="flat"
        >
          Sport
        </BaseChip>
      </div>

      <a href="#" class="text-h2 text-decoration-none mt-3 d-inline-block text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dicta?
        <v-icon
          icon="mdi-open-in-new"
          class="text-secondary"
          size="24"
        />
      </a>
      <div class="body-2 mt-2 text-secondary">Publication date: 23.12.2023 13:05</div>

      <BaseCard
        title="Source text"
        class="mt-8"
      >
        <span class="text-body-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo, consequatur sequi officia nulla voluptate dolor atque. Soluta, consectetur eaque nemo fugit doloribus saepe est a harum quae molestias accusantium expedita illum eius vel deserunt aut voluptate numquam tempora, commodi beatae magni pariatur placeat error! Cumque illo sapiente ad molestiae.</span>
      </BaseCard>
      <BaseCard
        title="Typed text"
        class="mt-6"
      >
        <BaseTextarea
          class="text-body-1 text-secondary"
          placeholder="Type here"
        ></BaseTextarea>
      </BaseCard>

      <v-btn
        variant="text"
        prepend-icon="mdi-reload"
        class="mt-6 align-self-end"
      >
        Reload
        <template v-slot:append>
          <span>
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </span>
        </template>
      </v-btn>
    </TheMain>
    <TheFooter
      app
      class="py-0"
    >
      <span>{{ new Date().getFullYear() }} — uymuct</span>
      <span>Designed by <a href="#">spolysa</a></span>
    </TheFooter>
  </v-app>
</template>

<script setup>
  import { useTheme } from 'vuetify'
  import { ref } from 'vue'
  import TheAppBar from '@/components/TheAppBar.vue';
  import TheMain from '@/components/TheMain.vue';
  import TheNavigationDrawer from '@/components/TheNavigationDrawer.vue';
  import TheFooter from '@/components/TheFooter.vue';
  import BaseChip from '@/components/BaseChip.vue';
  import BaseCard from '@/components/BaseCard.vue';
  import BaseTextarea from '@/components/BaseTextarea.vue';

  const theme = useTheme()

  // theme.global.name.value = 'dark'

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  const drawer = ref(true)
  const slider = ref(20)
  const categories = ref([1])
  const language = ref('Russian')
  const country = ref('All')
</script>
