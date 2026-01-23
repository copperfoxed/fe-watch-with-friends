<script setup>
  import { computed } from "vue";

  const props = defineProps({
    returnedShow: { type: Object, required: true },
  });

  const posterPath = computed(() => {
    const path = props.returnedShow.poster_path;
    return path ? `https://image.tmdb.org/t/p/w342${path}` : null;
  });
</script>

<template>
    <li class='media-card'>
      <NuxtLink :to="`/media/${returnedShow.id}`">
          <img
              class="media-card__image"
              :src="posterPath"
              :alt="returnedShow.name"
              loading="lazy"
          />

          <div class="media-card__content">
              <h3 class="media-card__title">{{ returnedShow.name }}</h3>
              <p class="media-card__description">
              {{ returnedShow.overview }}
              </p>
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
    max-width: 900px;
    margin: 0 auto;
  }

  .media-card__image {
    width: 120px;
    height: 180px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 4px;
  }

  .media-card__content {
    display: flex;
    flex-direction: column;
  }

  .media-card__title {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: #f9fafb;
  }

  .media-card__description {
    margin: 0;
    color: #d1d5db;
    line-height: 1.4;
  }

  .media-card__description {
    max-height: 4.2em;
    overflow: hidden;
  }
</style>
