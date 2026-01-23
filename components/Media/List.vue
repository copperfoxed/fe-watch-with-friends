<script setup>
  defineProps({
    returnedShows: {
      type: Array,
      default: () => [],
    },
  });
</script>

<template>
  <ul class="media-list media-grid--list" aria-label="TV show results">
    <MediaCard
      v-for="returnedShow in returnedShows"
      :key="returnedShow.id"
      :returnedShow="returnedShow" />
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
