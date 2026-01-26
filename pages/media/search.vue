<script setup>
  const route = useRoute ()

  const q = computed(() => (route.query.q ?? '').toString().trim())

  const { tvShows, pending, error } = useTmdbSearch ({ q });
</script>

<template>
  <main>
    <h1>Search Results</h1>

    <p v-if="pending">Results are loading...</p>
    <p v-else-if="error">Uh oh...</p>
    <MediaList v-else :tvShows="tvShows" />
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
