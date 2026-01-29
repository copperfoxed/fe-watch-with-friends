<script setup>
const { data: rows, pending, error } = await useFetch(
  "http://127.0.0.1:8000/api/watchlist"
);


const exampleGroupId = 1;
</script>

<template>
  <div class="page">
    <h1>My Watchlist</h1>

    <!-- Navigation -->
    <NuxtLink to="/group/create" class="item">Create Group</NuxtLink>
    <NuxtLink :to="`/group/${exampleGroupId}`" class="item">View Group</NuxtLink>
    <NuxtLink to="/group/search" class="item">Search Groups</NuxtLink>


    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Failed to load watchlist</p>

    <ul v-else class="list">
      <li v-for="row in rows" :key="row.watchlist_id" class="item">
        <div><strong>tmdb_id:</strong> {{ row.tmdb_id }}</div>
        <div><strong>added_at:</strong> {{ row.added_at }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.page {
  padding: 2rem;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 12px;
}
</style>
