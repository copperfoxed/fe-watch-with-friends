<script setup>
const route = useRoute();

const q = computed(() => (route.query.q ?? "").toString().trim());

const { data: groups, pending, error } = await useFetch(() => {
  if (!q.value) return null;
  const url = `http://127.0.0.1:8000/api/groups/search?q=${encodeURIComponent(q.value)}`;
  return url;
});
</script>

<template>
  <div class="page">
    <h1>Group Results</h1>
    <p class="hint"><strong>query:</strong> {{ q || "—" }}</p>

    <p v-if="!q" class="item">Enter a search term on the search page.</p>
    <p v-else-if="pending">Loading...</p>
    <p v-else-if="error">Failed to load group results</p>

    <ul v-else class="list">
      <li v-for="group in groups" :key="group.group_id" class="item">
        <NuxtLink :to="`/group/${group.group_id}`" class="link">
          <div><strong>group_name:</strong> {{ group.group_name }}</div>
          <div><strong>group_id:</strong> {{ group.group_id }}</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.page { padding: 2rem; }

.hint { margin: 0 0 1rem 0; }

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 8px;
  padding: 12px;
}

.link {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>
