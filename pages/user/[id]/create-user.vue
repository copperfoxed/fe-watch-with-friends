<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
</script>

<template>
  <div class="page">
    <h1>Create User</h1>

    <div class="item">
      <form @submit.prevent>
        <div class="field">
          <label for="username"><strong>username:</strong></label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Choose a username"
          />
        </div>

        <div class="field">
          <label for="password"><strong>password:</strong></label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Create a password"
          />
        </div>

        <div class="field">
          <label for="confirmPassword"><strong>confirm password:</strong></label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="Repeat your password"
          />
        </div>

        <button type="submit" disabled>Create account</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.page {
  padding: 2rem;
}

.item {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

input {
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  padding: 10px;
}

button {
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  padding: 10px 12px;
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
