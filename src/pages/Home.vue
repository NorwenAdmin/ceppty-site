<script setup>
import { useLang } from '../useLang.js'
import { pathFor } from '../routes.js'
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
import StoreBadges from '../components/StoreBadges.vue'
import PhoneMock from '../components/PhoneMock.vue'

const { lang, t } = useLang('home')
const stepColors = ['yellow', 'mint', 'pink']
const pointColors = ['yellow', 'mint', 'pink', 'white']
</script>

<template>
  <SiteHeader :t="t" :lang="lang" page="home" />
  <main>
    <section class="hero">
      <div class="blob blob-yellow"></div>
      <div class="blob blob-pink"></div>
      <div class="wrap hero-row">
        <div class="hero-text">
          <h1>{{ t.home.h1 }}</h1>
          <p class="hero-lead">{{ t.home.lead }}</p>
          <StoreBadges :t="t" />
          <ul class="ticks">
            <li v-for="tick in t.home.ticks" :key="tick">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>{{ tick }}
            </li>
          </ul>
        </div>
        <PhoneMock :phone="t.home.phone" />
      </div>
    </section>

    <section id="hoe" class="wrap section">
      <h2 class="section-title">{{ t.home.stepsTitle }}</h2>
      <ol class="steps">
        <li v-for="(step, i) in t.home.steps" :key="step.h" class="step" :class="stepColors[i]">
          <span class="step-num">{{ i + 1 }}</span>
          <h3>{{ step.h }}</h3>
          <p>{{ step.p }}</p>
        </li>
      </ol>
    </section>

    <section class="wrap">
      <div class="privacy-band">
        <div class="privacy-text">
          <h2>{{ t.home.privacyTitle }}</h2>
          <p>{{ t.home.privacyLead }}</p>
          <RouterLink :to="pathFor(lang, 'privacy')" class="more-link">{{ t.home.privacyMore }} →</RouterLink>
        </div>
        <ul class="privacy-points">
          <li v-for="(point, i) in t.home.privacyPoints" :key="point.h">
            <strong :class="'text-' + pointColors[i]">{{ point.h }}</strong>
            <span>{{ point.p }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="wrap ah">
      <span class="ah-icon" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>
      </span>
      <div>
        <h3>{{ t.home.ahTitle }}</h3>
        <p>{{ t.home.ahText }}</p>
      </div>
    </section>
  </main>
  <SiteFooter :t="t" :lang="lang" page="home" />
</template>
