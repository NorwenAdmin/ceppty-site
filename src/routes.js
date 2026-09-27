import Home from './pages/Home.vue'
import Privacy from './pages/Privacy.vue'
import Support from './pages/Support.vue'

// Одинаковые страницы на двух языках: `/…` — nl, `/en/…` — en.
const pages = [
  { path: '', component: Home, page: 'home' },
  { path: 'privacy/', component: Privacy, page: 'privacy' },
  { path: 'support/', component: Support, page: 'support' },
]

export const routes = [
  ...pages.map((p) => ({ path: `/${p.path}`, component: p.component, meta: { lang: 'nl', page: p.page } })),
  ...pages.map((p) => ({ path: `/en/${p.path}`, component: p.component, meta: { lang: 'en', page: p.page } })),
]

/// Адрес той же страницы на языке [lang].
export function pathFor(lang, page) {
  const base = lang === 'en' ? '/en/' : '/'
  return base + (pages.find((p) => p.page === page)?.path ?? '')
}
