<script setup>
  const {
    data: groups,
    pending,
    error,
  } = useFetch("http://127.0.0.1:8000/groups/");
</script>

<template>
  <div class="page">
    <h1>Available Groups</h1>
    <GroupList :groups="groups" />
  </div>
</template>

<style scoped>
  .page {
    padding: 2rem;
  }
</style>
