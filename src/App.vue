<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
// @import "@/css/global-color.scss";
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
body {
  // background:$peachy-dust;
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
