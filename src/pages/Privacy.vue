<script setup>
import { useLang } from '../useLang.js'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import PrivacyNl from '../content/PrivacyNl.vue'
import PrivacyEn from '../content/PrivacyEn.vue'

const { lang, t } = useLang('privacy')
</script>

<template>
  <SiteHeader :t="t" :lang="lang" page="privacy" />
  <main>
    <section class="page-hero">
      <div class="blob blob-yellow blob-small"></div>
      <div class="wrap page-hero-text">
        <span class="eyebrow">{{ t.privacy.eyebrow }} · {{ t.privacy.updated }}</span>
        <h1>{{ t.privacy.h1 }}</h1>
        <p class="hero-lead">{{ t.privacy.short }}</p>
      </div>
    </section>
    <article class="wrap legal-wrap">
      <PrivacyNl v-if="lang === 'nl'" />
      <PrivacyEn v-else />
    </article>
  </main>
  <SiteFooter :t="t" :lang="lang" page="privacy" />
</template>
