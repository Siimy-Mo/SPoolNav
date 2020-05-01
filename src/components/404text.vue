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

.items {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &__inner {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 800px;
    background: transparent;
  }
  &__layer &__item {
    position: absolute;
    box-shadow: 0 32px 40px -20px rgba(0, 0, 0, 0.25);
    &:after {
      content: attr(data-title);
      position: absolute;
      line-height: 20px;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: all 0.5s ease;
      visibility: hidden;
      opacity: 0;
    }
    &:hover {
      &:after {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  &__layer:nth-child(1) &__item {
    $color: #2e385c;
    top: 200px;
    left: 120px;
    width: 340px;
    height: 340px;
    background: $color;
    &:after {
      top: -23px;
      left: 0;
      color: $color;
    }
  }
  &__layer:nth-child(2) &__item {
    $color: #5a5050;
    top: 440px;
    left: 400px;
    width: 240px;
    height: 200px;
    background: $color;
    &:after {
      bottom: -23px;
      right: 0;
      color: $color;
    }
  }
  &__layer:nth-child(3) &__item {
    $color: #366c6f;
    top: 400px;
    left: 160px;
    width: 300px;
    height: 300px;
    background: $color;
    &:after {
      bottom: -23px;
      left: 0;
      color: $color;
    }
  }
  &__layer:nth-child(4) &__item {
    $color: #e9edea;
    top: 100px;
    left: 400px;
    width: 350px;
    height: 480px;
    background: $color;
    &:after {
      top: -23px;
      right: 0;
      color: darken($color, 9%);
    }
  }
  &__layer:nth-child(5) &__item {
    $color: #dbbeb9;
    top: 300px;
    left: 300px;
    width: 200px;
    height: 200px;
    background: $color;
    &:after {
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20px;
      line-height: 20px;
      margin: auto;
      text-align: center;
      color: darken($color, 12%);
    }
  }
}
</style>