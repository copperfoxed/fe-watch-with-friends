<script setup>
  const props = defineProps({
    id: {
      type: Number,
      required: true,
    },
  });

  const { details, platforms, pending, error } = useTmdbDetails({
    id: props.id,
  });
</script>

<template>
  <p v-if="pending">Loading…</p>
  <p v-else-if="error">Uh Oh...something went wrong <pre> {{ error }}</pre></p>
  

  <div v-else-if="details">
    <h2>{{ details.name }}</h2>

    <img :src="details.posterUrl" :alt="details.name" />

    <h3>Details</h3>
    <p>{{ details.numSeasons }} seasons</p>
    <p>{{ details.numEpisodes }} episodes</p>

    <a :href="details.trailerWatchUrl" target="_blank" rel="noopener"
      >Watch Trailer on YouTube</a
    >

    <h3>Summary</h3>
    <p>{{ details.overview }}</p>

    <div v-if="platforms?.streamLogo">
      <h3>Where to watch</h3>
      <img :src="platforms.streamLogo" :alt="platforms.streamName" />
    </div>
  </div>
</template>
