/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#2B2E3A',
          secondary: '#BFC1CA',
          secondary_variant: '#E6E7F0',
          surface: '#FFFFFF',
          background: '#F0F1FA',
          accent: '#5982FF',
          accent_variant: '#D9E0FB'
        },
      },
      dark: {
        colors: {
          primary: '#FFFFFF',
          secondary: '#4D4E56',
          secondary_variant: '#4D4E56',
          surface: '#1A1C26',
          background: '#11131D',
          accent: '#5982FF',
          accent_variant: '#1C243F'
        },
      },
    },
  },
})
