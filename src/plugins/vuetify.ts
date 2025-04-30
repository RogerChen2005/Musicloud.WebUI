/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'
import colors from 'vuetify/util/colors'

function createTheme (color:typeof colors.blue):ThemeDefinition{
  return {
    colors: {
      primary: color.darken2,
      secondary: color.darken1,
      accent: color.darken3,
      error: colors.red.base,
      info: color.base,
      success: colors.green.base,
      warning: colors.amber.base,
      background: color.lighten5,
      surface: colors.shades.white,
    },
    dark: false,
    variables: {
      'border-color': color.lighten3,
      // 'theme-colors-opacity': 0.8,
    },
  }
}

function createDarkTheme (color:typeof colors.blue):ThemeDefinition{
  return {
    colors: {
      primary: color.darken2,
      secondary: color.darken1,
      accent: color.darken3,
      error: color.accent2,
      info: color.base,
      success: color.accent3,
      warning: color.base,
    },
    dark: true,
    variables: {
      'border-color': color.lighten3,
      'theme-colors-opacity': 0.8,
    },
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light-blue',
    themes: {
      'light-blue':createTheme(colors.lightBlue),
      'dark-blue':createDarkTheme(colors.blue),
    },
  },
})
