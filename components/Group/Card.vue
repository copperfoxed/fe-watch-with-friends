<script setup>
  import { computed } from "vue";

  const props = defineProps({
    group: {
      type: Object,
      required: true,
    },
  });

  const { data, pending, error } = useTmdbFetch(`/tv/${props.group.tmdb_id}`);
  const loading = computed(() => pending.value);
  const showName = computed(() => data.value?.name ?? "Unknown");
  const posterUrl = computed(() => {
    const path = data.value?.poster_path;
    return path ? `https://image.tmdb.org/t/p/w185${path}` : null;
  });
</script>

<template>
  <NuxtLink :to="`/group/${group.group_id}`" class="card-link">
    <div class="card">
      <div class="card-content">
        <img v-if="posterUrl" :src="posterUrl" :alt="showName" class="poster" />

        <div class="info">
          <h2 class="group-title">{{ group.group_name }}</h2>
          <p class="show-name">
            <strong>What we're watching: </strong>
            <span v-if="loading">Loading…</span>
            <span v-else-if="error">Unavailable</span>
            <span v-else>{{ showName }}</span>
          </p>

          <ul class="meta">
            <li><strong>Start: </strong> {{ group.start_date }}</li>
            <li>
              <strong>Episodes / week: </strong> {{ group.episodes_per_week }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
  .card {
    background: #3a3a3a;
    border: 1px solid #fd5000;
    border-radius: 10px;
    height: 150px;
    width: 500px;
    padding: 1rem;
    cursor: pointer;
    transition:
      transform 0.15s ease,
      box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(15, 15, 15, 0.5);
  }

  .card-link {
    text-decoration: none;
    color: inherit;
  }

  .card-content {
    display: flex;
    gap: 1rem;
  }

  .poster {
    width: 92px;
    height: 150px;
    border-radius: 6px;
    object-fit: cover;
    flex-shrink: 0;
  }

  .info {
    flex: 1;
  }

  .group-title {
    margin: 0 0 0.25rem;
  }

  .meta {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.9rem;
  }
</style>
