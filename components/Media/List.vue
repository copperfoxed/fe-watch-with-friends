<script setup>
  defineProps ({
    tvShows: { type: Array, required: true }
  })
</script>

<template>
  <ul class="media-list" aria-label="TV show results">
    <MediaCard
      v-for="tvShow in tvShows"
      :key="tvShow.id"
      :tvShow="tvShow" />
  </ul>
</template>

<style scoped>
  .media-list {
    list-style: none;
    margin: 0;
    padding: 1;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
