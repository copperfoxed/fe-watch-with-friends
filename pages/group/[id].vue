<script setup>
  import { groups } from "../../.mockdata/mockGroups";
  import { computed } from "vue";
  const route = useRoute();

  const group = computed(() =>
    groups.find((g) => g.group_id === Number(route.params.id)),
  );
  console.log("group:", group.value);
</script>

<template>
  <div class="page">
    <h1 v-if="group">{{ group.group_name }}</h1>
    <h1 v-else>Group not found</h1>
  </div>
</template>

<style scoped>
  .page {
    padding: 1rem;
  }
</style>
