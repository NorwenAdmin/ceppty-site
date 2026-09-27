<script setup>
import { pathFor } from '../routes.js'
defineProps({ t: Object, lang: String, page: String })
</script>

<template>
  <footer class="site-footer">
    <div class="wrap footer-row">
      <div class="footer-brand">
        <span class="footer-name">ceppty</span>
        <span>ZixyAero · KvK 97721379 · <a href="mailto:support@ceppty.nl">support@ceppty.nl</a></span>
        <span class="footer-note">© 2026 ZixyAero · {{ t.footer.disclaimer }}</span>
      </div>
      <nav class="footer-nav">
        <RouterLink :to="pathFor(lang, 'privacy')">{{ t.nav.privacy }}</RouterLink>
        <RouterLink :to="pathFor(lang, 'support')">{{ t.nav.support }}</RouterLink>
        <RouterLink :to="pathFor(t.other.lang, page)" :hreflang="t.other.lang">{{ t.other.name }}</RouterLink>
      </nav>
    </div>
  </footer>
</template>
