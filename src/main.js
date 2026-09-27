import { ViteSSG } from 'vite-ssg'
import '@fontsource/nunito/latin-800.css'
import '@fontsource/nunito/latin-900.css'
import '@fontsource/nunito-sans/latin-400.css'
import '@fontsource/nunito-sans/latin-600.css'
import '@fontsource/nunito-sans/latin-700.css'
import './style.css'
import App from './App.vue'
import { routes } from './routes.js'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to) {
    return to.hash ? { el: to.hash, top: 24, behavior: 'smooth' } : { top: 0 }
  },
})
