<script setup>
    const {searchFunction} = defineProps ({
        searchFunction: {type: Function, required: true},
        routeLink: {type: String, required: true}
    })

    const search = ref('')

    function onSearch (){
        const q = search.value.trim()
        if (!q) return
        searchFunction(q, routeLink)
    }
</script>

<template>
    <UFieldGroup class="search-bar">
      <UInput
        class="search-input"
        v-model="search"
        color="neutral" 
        highlight 
        variant="subtle" 
        placeholder="Search..."
        @keydown.enter="onSearch"
      />
      <UButton
        class="search-button"
        color="neutral"
        variant="outline"
        icon="i-lucide-search" 
        @click="onSearch"
      />
    </UFieldGroup>
</template>

<style scoped>
    .search-bar {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>