<template>
  <div class="container">
    <div ref="js_scene">
      <div class="title" data-depth="0.2">
        <p class="p404">
          4
          <span>0</span>4
        </p>
        <div class="line"></div>
      </div>

      <div class="title" data-depth="1">
        <p class="p404">
          4
          <span>0</span>4
        </p>
        <div class="line"></div>
      </div>
    </div>
    <div class="opps">
      <p>Opp! Looks like you got lost.</p>
    </div>
  </div>
</template>

<script>
import Parallax from "parallax-js";

export default {
  name: "textOf404",
  mounted() {
    var scene = this.$refs.js_scene;
    new Parallax(scene);
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0%;
  width: 100%;
  text-align: center;
}

.title {
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100%;
  font-family: $titleOf404;
  font-size: 200px;
  font-weight: 700;
  letter-spacing: 4px;
  text-shadow: 0 32px 40px -20px rgba(0, 0, 0, 0.25);
  color: $tropical-splash;
  z-index: 2;
  .p404 {
    margin: 0;
  }
  span {
    color: $first-date;
  }

  &:nth-of-type(2) {
    color: $lucy-shamrock;
    z-index: 1;
    filter: blur(10px);
    opacity: 0.8;

    span {
      color: $peachy-dust;
    }
  }
}
.line {
  margin: 0 auto;
  padding: 0;
  height: 10px;
  width: 50%;
  background: $tropical-splash;
  border-radius: 10px;
}

.opps {
  position: absolute;
  width: 100%;
  font-family: $textOf404;
  letter-spacing: 5px;
  color: $tropical-splash;
  top: 250px;
  z-index: -2;
}

</style>