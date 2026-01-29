<script setup>
  import { groups } from "../../.mockdata/mockGroups";
  const route = useRoute();

  const group = computed(() =>
    groups.find((g) => g.group_id === Number(route.params.id)),
  );
  console.log("group:", group.value);
</script>

<template>
  <div class="page">
    <GroupSingleCard v-if="group" :group="group" />
    <div v-else>Group not found</div>
  </div>
</template>

<style scoped>
  .page {
    padding: 1rem;
  }
</style>
