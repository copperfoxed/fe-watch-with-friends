<script setup>
const route = useRoute();
const groupId = route.params.group_id;

function joinGroup() {
  console.log("Join group", groupId);
}
</script>

<template>
  <div class="page">
    <h1>Group {{ groupId }}</h1>

    <div class="item">
      <button @click="joinGroup">Join Group</button>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 2rem; }

.item {
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 8px;
  padding: 12px;
}

button {
  border: 1px solid rgba(0,0,0,0.18);
  border-radius: 8px;
  padding: 10px 12px;
}
</style>
