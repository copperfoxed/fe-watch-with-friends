<template>
  <div class="grid">
    <WatchlistCard
      v-for="item in watchlist"
      :key="item.watchlist_id"
      :item="item"
    />
  </div>
</template>

<script setup>
defineProps({
  watchlist: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}
</style>
