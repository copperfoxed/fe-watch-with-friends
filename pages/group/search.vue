<!-- FILE: pages/group/search.vue -->
<script setup>
import { ref, computed } from "vue";
import { groups as allGroups } from "../../.mockdata/mockGroups";

const query = ref("");

const filteredGroups = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return allGroups;

  return allGroups.filter((g) => {
    const name = (g.group_name ?? "").toLowerCase();
    const id = String(g.group_id ?? "");
    return name.includes(q) || id.includes(q);
  });
});
</script>

<template>
  <div class="page">
    <h1>Available Groups</h1>

    <div class="item">
      <form @submit.prevent>
        <div class="field">
          <label for="q"><strong>search:</strong></label>
          <input
            id="q"
            v-model="query"
            type="text"
            placeholder="Search by group name or id"
          />
        </div>
      </form>
    </div>

    <ul class="list">
      <li v-for="group in filteredGroups" :key="group.group_id" class="item">
        <NuxtLink :to="`/group/${group.group_id}`" class="link">
          <div><strong>{{ group.group_name }}</strong></div>
          <div>Group ID: {{ group.group_id }}</div>
        </NuxtLink>
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
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

input {
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  padding: 10px;
}

.link {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>

