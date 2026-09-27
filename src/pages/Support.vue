<script setup>
import { useLang } from '../useLang.js'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'

const { lang, t } = useLang('support')
</script>

<template>
  <SiteHeader :t="t" :lang="lang" page="support" />
  <main>
    <section class="page-hero">
      <div class="blob blob-pink blob-small"></div>
      <div class="wrap support-row">
        <div class="page-hero-text">
          <h1>{{ t.support.h1 }}</h1>
          <p class="hero-lead">{{ t.support.lead }}</p>
        </div>
        <div class="mail-card">
          <span class="eyebrow dark">{{ t.support.mailLabel }}</span>
          <a href="mailto:support@ceppty.nl" class="mail-link">support@ceppty.nl</a>
          <span>{{ t.support.mailNote }}</span>
        </div>
      </div>
    </section>
    <section class="wrap section">
      <h2 class="section-title">{{ t.support.faqTitle }}</h2>
      <div class="faq">
        <details v-for="item in t.support.faq" :key="item.q" class="faq-item">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </section>
  </main>
  <SiteFooter :t="t" :lang="lang" page="support" />
</template>
