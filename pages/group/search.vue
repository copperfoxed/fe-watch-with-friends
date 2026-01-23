<script setup>
  import { groups } from "../../.mockdata/mockGroups";
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
