<script setup>
  import { watch } from "vue";
  const route = useRoute();
  const groupID = Number(route.params.id);

  const {
    data: group,
    pending,
    error,
  } = useFetch(`http://127.0.0.1:8000/groups/${groupID}`, {
    headers: {
      Accept: "application/json",
    },
  });
  watch(group, (newGroup) => {
    if (newGroup) {
      console.log("Group loaded:", newGroup);
    }
  });
</script>

<template>
  <div class="page">
    <div v-if="pending">Loading...</div>
    <GroupSingleCard v-else-if="group" :group="group" />
    <div v-else>Group not found</div>
  </div>
</template>

<style scoped>
  .page {
    padding: 1rem;
  }
</style>
