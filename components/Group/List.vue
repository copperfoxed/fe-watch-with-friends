<template>
  <div class="grid">
    <GroupCard v-for="group in groups" :key="group.group_id" :group="group" />
  </div>
</template>

<script setup>
  defineProps({
    groups: {
      type: Array,
      required: true,
    },
  });
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.25rem;
  }
</style>
