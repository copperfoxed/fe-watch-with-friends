<!-- FILE: pages/group/create.vue -->
<script setup>
import { ref } from "vue";

const groupName = ref("");
const description = ref("");
const tmdbId = ref("");
const episodesPerWeek = ref("");
</script>

<template>
  <div class="page">
    <h1>Create Group</h1>

    <div class="item">
      <form @submit.prevent>
        <div class="field">
          <label for="groupName"><strong>group_name:</strong></label>
          <input
            id="groupName"
            v-model="groupName"
            type="text"
            placeholder="e.g. Sunday Night TV"
          />
        </div>

        <div class="field">
          <label for="description"><strong>description:</strong></label>
          <input
            id="description"
            v-model="description"
            type="text"
            placeholder="Optional"
          />
        </div>

        <div class="field">
          <label for="tmdbId"><strong>tmdb_id:</strong></label>
          <input
            id="tmdbId"
            v-model="tmdbId"
            type="number"
            inputmode="numeric"
            placeholder="e.g. 1399"
          />
        </div>

        <div class="field">
          <label for="episodesPerWeek"><strong>episodes_per_week:</strong></label>
          <input
            id="episodesPerWeek"
            v-model="episodesPerWeek"
            type="number"
            inputmode="numeric"
            placeholder="e.g. 2"
          />
        </div>

        <button type="submit" disabled>Create group</button>
      </form>
    </div>
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

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

input {
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  padding: 10px;
}

button {
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  padding: 10px 12px;
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
