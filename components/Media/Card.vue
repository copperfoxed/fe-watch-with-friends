<script setup>
  const props = defineProps({
    tvShow: { type: Object, required: true },
  });
</script>

<template>
    <li class='media-card'>
      <NuxtLink :to="`/media/${tvShow.id}`" class="nuxt-link">
          <img
              v-if="tvShow.posterUrl"
              class="media-card-poster"
              :src="tvShow.posterUrl"
              :alt="tvShow.name"
              loading="lazy"
          />

          <div class="media-card-content">
              <h3 class="media-card-title">{{ tvShow.name }}</h3>
          </div>
        </NuxtLink>
    </li>
</template>

<style scoped>
  .media-card {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #222222;
    border-left: 4px solid #f14c00;
    border-radius: 5px;
    width: 900px;
    margin: 0 auto; 
  }

  .media-card-poster {
    width: 120px;
    height: 180px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 4px;
  }

  .media-card-content {
    display: flex;
    flex-direction: column;
  }

  .media-card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: #f9fafb;
  }

  .nuxt-link {
    text-decoration: none;
    color: inherit
  }
</style>
