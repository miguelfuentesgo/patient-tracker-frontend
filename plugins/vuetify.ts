import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const customTheme = {
    dark: false,
    colors: {
      primary: '#4CAF50',    // Verde personalizado
      secondary: '#FFC107',  // Amarillo personalizado
      accent: '#9C27B0',     // Morado personalizado
      error: '#F44336',      // Rojo personalizado
      info: '#2196F3',       // Azul personalizado
      success: '#4CAF50',    // Verde
      warning: '#FB8C00',    // Naranja personalizado
      background: '#F5F5F5', // Color de fondo
      surface: '#FFFFFF',    // Color de superficie
    },
  }

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme
        }
        
    }
  })
  nuxtApp.vueApp.use(vuetify)
})
