<script setup>
  const route = useRoute();
  const id = computed(() => Number(route.params.id));
</script>

<template>
  <MediaItemDetails v-if="id" :id="id" />
</template>
