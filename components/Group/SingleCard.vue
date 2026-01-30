<script setup>
  console.log(props.group);
  const props = defineProps({
    group: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <div class="page">
    <h1 v-if="group">{{ group.group_name }}</h1>
    <h1 v-else>Group not found</h1>

    <h2>Owner: {{ group.organiser_user_id }}</h2>

    <h2>What we're watching:</h2>
      
    <MediaItemDetails
    v-if="group.tmdb_id > 0" 
    :id="group.tmdb_id"
    />

    <p v-else>This group has not yet selected a show</p>
    
    <!-- <h2>Group Members: "GET Users where group_id = "groupid""</h2>
    <h2>Group Schedule: "GET groupsschedule via ID"</h2>
    <h2 class="JoinButton">!Join Group! <<< add button function</h2>
    <h5 class="DeleteButton">
      !Delete Group! <<< add button function for owner
    </h5> -->
  </div>
</template>

<style scoped></style>
