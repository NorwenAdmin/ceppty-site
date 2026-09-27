<script setup>
defineProps({ phone: Object })
const swatches = ['#FFCF4A', '#7FE0C2', '#FF8FB1']
</script>

<template>
  <div class="phone" aria-hidden="true">
    <div class="phone-screen">
      <div class="phone-month">{{ phone.month }}</div>
      <div class="phone-total">€ ··,··</div>
      <div class="phone-label">{{ phone.top }}</div>
      <div v-for="(item, i) in phone.items" :key="item.name" class="phone-row">
        <span class="phone-dot" :style="{ background: swatches[i] }"></span>
        <span class="phone-name"><strong>{{ item.name }}</strong><small>{{ item.times }}</small></span>
        <span class="phone-price">€ ·,··</span>
      </div>
      <div class="phone-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="4"/></svg>
        {{ phone.button }}
      </div>
    </div>
  </div>
</template>
