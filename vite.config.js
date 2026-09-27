import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Страницы собираются заранее в готовый HTML (`/privacy/index.html` …):
  // nginx отдаёт файлы, Vue оживляет их в браузере (D-290).
  ssgOptions: { dirStyle: 'nested', formatting: 'none' },
})
