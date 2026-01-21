<script setup>
defineProps({
  returnedShows: { 
    type: Array, 
    default: () => [] },
})
</script>

<template>
    <ul class='mediaList' aria-label="TV show results">
        <MediaCard
            v-for="returnedShow in returnedShows"
            :key="returnedShow.id"
            :returnedShow="returnedShow"/>
    </ul>
</template>