<script setup>
const props = defineProps({
  returnedShow: { type: Object, required: true },
})

const poster = props.returnedShow.poster_path
  ? `https://image.tmdb.org/t/p/w342${props.item.poster_path}`
  : null
</script>

<template>
    <li class='mediaCard'>
        <img v-if="poster" :src="poster" :alt="item.name" />
        <h2> {{ returnedShow.name }} </h2>
        <p> {{ returnedShow.overview }}</p>
    </li>
</template>