<script setup>
  const userID = 1;
</script>

<template>
  <div class="ButtonStorage">
    <a class="primarybutton" href="group/search">Avaliable Groups</a>
    <p class="smallbutton" href="group/create">Create Group</p>
    <NuxtLink class="primarybutton" to="media/search">
      Search Shows
    </NuxtLink>
    <a class="primarybutton" :href="`user/${userID}/watchlist`">My Watchlist</a>
  </div>
</template>

<style>
  .ButtonStorage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .primarybutton {
    display: inline-block;
    padding: 10px 20px;
    width: 150px;
    height: 20px;
    background-color: #222222;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .primarybutton:hover {
    background-color: #2b2b2b;
  }

  .smallbutton {
    display: inline-block;
    padding: 10px 20px;
    width: 70px;
    font-size: 10px;
    height: 10px;
    background-color: #2b2222;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }

  .smallbutton:hover {
    background-color: #332c2c;
  }

  .primarybutton + .smallbutton {
    margin-top: 5px;
  }

  .smallbutton + .primarybutton {
    margin-top: 20px;
  }

  .primarybutton + .primarybutton {
    margin-top: 20px;
  }
</style>
