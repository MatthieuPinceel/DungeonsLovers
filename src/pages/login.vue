<template>
  <div>
    <h1>Login</h1>
    <form>
      <div>
        <label for="username">Username : </label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label for="password">Password : </label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Connect</button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  border: 1px solid #ccc;
  padding: 20px;
  line-height: 2.5;
}

label {
  text-align: right;
}
</style>
