<script setup>
  const { data, pending, error } = useTmdbFetch("/discover/tv", {
    query: { page: 1 },
  });
  const returnedShows = computed(() => data.value?.results ?? []);
</script>

<template>
  <main>
    <h1>Search Results</h1>
    <p v-if="pending">Results are loading...</p>
    <p v-else-if="error">Uh oh...</p>
    <MediaList v-else :returnedShows="returnedShows" />
  </main>
</template>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
