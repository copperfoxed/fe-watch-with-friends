<script setup>
const props = defineProps({
  returnedShow: { type: Object, required: true },
})

const posterPath = computed (() => {
    const path = props.returnedShow.poster_path
    return path ? `https://image.tmdb.org/t/p/w342${path}` : null
})
</script>

<template>
    <li class='mediaCard'>
        <img v-if="posterPath" :src="posterPath" :alt="returnedShow.name" />
        <h2> {{ returnedShow.name }} </h2>
        <p> {{ returnedShow.overview }}</p>
    </li>
</template>

<style>
  .mediaCard {
    
  }
</style>