<script setup>
  const userID = 1;
</script>

<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <a href="/">
          <img class="logo" src="../../assets/icons/icons8-home.svg" />
        </a>
        <h1>Watch with friends!</h1>
        <a :href="`user/${userID}/profile`"> USER </a>
      </nav>
    </header>
  </div>
</template>

<style>
  .header {
    background-color: #1a1919;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .navbar h1 {
    background-color: #222222;
    padding: 10px 10px 10px;
    border-radius: 10px;
  }

  .navbar a {
    background-color: #444444;
    color: white;
    border-radius: 10px;
    height: 60px;
    width: 60px;
    align-content: center;
    justify-content: center;
    text-decoration: none;
  }

  .navbar img {
    border-radius: 10px;
  }

  .logo {
    height: 40px;
    width: 40px;
  }
</style>
