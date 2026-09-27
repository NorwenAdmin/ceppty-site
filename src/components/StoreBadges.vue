<script setup>
// Места под официальные значки App Store и Google Play: файлы значков
// ставит владелец, когда приложение появится в магазинах (US-112).
defineProps({ t: Object })
</script>

<template>
  <div class="badges">
    <div class="badge-slot" role="img" :aria-label="t.storeSoon + ' App Store'">
      <span class="badge-label">{{ t.storeBadge.apple }}</span>
    </div>
    <div class="badge-slot" role="img" :aria-label="t.storeSoon + ' Google Play'">
      <span class="badge-label">{{ t.storeBadge.google }}</span>
    </div>
  </div>
</template>
