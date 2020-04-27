<template>
  <div id="app">

    <!-- <router-link to="/header">header</router-link>
    <router-link to="/container">container</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
body {
    background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    $tropical-splash,
    #1b2947
  );
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    $tropical-splash 75%,
    $icy-morn 96%
  );
  background-attachment: fixed;
  overflow: hidden;
}
</style>
