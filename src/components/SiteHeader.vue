<script setup>
import { pathFor } from '../routes.js'
import Logo from './Logo.vue'
defineProps({ t: Object, lang: String, page: String })
</script>

<template>
  <header class="site-header">
    <div class="wrap header-row">
      <RouterLink :to="t.base" class="brand"><Logo />ceppty</RouterLink>
      <nav>
        <RouterLink :to="t.base + '#hoe'" class="nav-link hide-sm">{{ t.nav.how }}</RouterLink>
        <RouterLink :to="pathFor(lang, 'privacy')" class="nav-link" :class="{ active: page === 'privacy' }">{{ t.nav.privacy }}</RouterLink>
        <RouterLink :to="pathFor(lang, 'support')" class="nav-link" :class="{ active: page === 'support' }">{{ t.nav.support }}</RouterLink>
        <RouterLink :to="pathFor(t.other.lang, page)" :hreflang="t.other.lang" class="lang-pill" :aria-label="t.other.name">{{ t.other.label }}</RouterLink>
      </nav>
    </div>
  </header>
</template>

