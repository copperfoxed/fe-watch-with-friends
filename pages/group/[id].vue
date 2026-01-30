<script setup>
  import { computed } from "vue";

  const route = useRoute();

  const groupId = computed(() => Number(route.params.id));

  const {
    data: group,
    pending,
    error,
  } = useFetch(`http://127.0.0.1:8000/groups/${groupId.value}`);
</script>

<template>
  <div class="page">
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">
        Uh Oh! Could not load group...
        <pre> {{ error }}</pre>
    </div>

    <GroupSingleCard v-else-if="group" :group="group"/>

    <div v-else>Group not found</div>
  </div>
</template>

<style scoped>
  .page {
    padding: 1rem;
  }
</style>
