<template>
  <div class="flex">
    <nav>
      <router-link to="/">Welcome</router-link>
      |
      <router-link to="/home">Home</router-link>
    </nav>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>

.flex {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  display: grid;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

nav {
  background-color: #9cabb8;
}

*{
  padding:0;
  margin:0;
}

</style>
<script setup lang="ts">
</script>