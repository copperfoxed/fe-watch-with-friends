<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <a>HOME</a>
        <a>MOVIES</a>
        <a>USER</a>
      </nav>
    </header>
  </div>
</template>

<style>
  * {
    background: rgb(41, 41, 41);
    height: 30px;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .navbar a {
    font-family: Arial, Helvetica, sans-serif;
    font-style: bold;
    height: 20px;
    width: 60px;
    padding: 8px 16px;
    margin: 0 4px;
    background-color: rgb(66, 66, 66);
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
  }

  .navbar a:hover {
    background-color: rgb(39, 39, 39);
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
  }
</style>
