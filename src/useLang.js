import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { texts } from './content/texts.js'
import { pathFor } from './routes.js'

const origin = 'https://ceppty.nl'

/// Язык и тексты страницы по адресу; заголовок, описание и hreflang — в <head>.
export function useLang(page) {
  const route = useRoute()
  const lang = computed(() => route.meta.lang ?? 'nl')
  const t = computed(() => texts[lang.value])
  const meta = computed(() => t.value[page])
  useHead({
    htmlAttrs: { lang },
    title: () => meta.value.title,
    meta: [
      { name: 'description', content: () => meta.value.description },
      { property: 'og:title', content: () => meta.value.title },
      { property: 'og:description', content: () => meta.value.description },
    ],
    link: [
      { rel: 'canonical', href: () => origin + pathFor(lang.value, page) },
      { rel: 'alternate', hreflang: 'nl', href: origin + pathFor('nl', page) },
      { rel: 'alternate', hreflang: 'en', href: origin + pathFor('en', page) },
    ],
  })
  return { lang, t, page }
}
