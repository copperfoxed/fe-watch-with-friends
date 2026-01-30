<script setup>
import { computed } from "vue";
import { groups } from "../../.mockdata/mockGroups";

const route = useRoute();

const groupId = computed(() => Number(route.params.group_id));

const group = computed(() =>
  groups.find((g) => g.group_id === groupId.value)
);

function joinGroup() {
  console.log("Join group", groupId.value);
}
</script>

<template>
  <div class="page">
    <div v-if="group" class="item">
      <h1>{{ group.group_name }}</h1>

      <p><strong>group_id:</strong> {{ group.group_id }}</p>
      <p><strong>organiser_user_id:</strong> {{ group.organiser_user_id }}</p>
      <p><strong>tmdb_id:</strong> {{ group.tmdb_id }}</p>
      <p><strong>episodes_per_week:</strong> {{ group.episodes_per_week }}</p>

      <button @click="joinGroup">Join Group</button>
    </div>

    <p v-else>Group not found</p>
  </div>
</template>

<style scoped>
.page {
  padding: 2rem;
}

.item {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 12px;
}

button {
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  padding: 10px 12px;
}
</style>
