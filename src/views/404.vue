<template>
  <div class="container">
    <div class="container_inner">
      <div v-for="(item, index) in circlesCount" :key="index" class="circles" ref="circles"></div>
      <!-- <div class="parallax_renc id="parallax-obj""></div> -->
    </div>
    <!-- <div class="items__inner" id="js-scene">
      <div class="items__layer layer" data-depth="0.85">
        <div class="items__item" data-title="no.1"></div>
      </div>
      <div class="items__layer layer" data-depth="0.70">
        <div class="items__item" data-title="no.2"></div>
      </div>
      <div class="items__layer layer" data-depth="0.65">
        <div class="items__item" data-title="no.3"></div>
      </div>
      <div class="items__layer layer" data-depth="1.20">
        <div class="items__item" data-title="no.4"></div>
      </div>
      <div class="items__layer layer" data-depth="0.00">
        <div class="items__item" data-title="no.5"></div>
      </div>
    </div>-->
  </div>
</template>

<script>
// import Parallax from "parallax-js";
import {TweenMax} from 'gsap';

export default {
  name: "page404",
  data() {
    return {
      circlesCount: 8,
      distance: 400,
      is:false,
    };
  },
  mounted() {
    // var scene = document.getElementById("js-scene");
    // new Parallax(scene);
    document.body.style.background = "#fff";
    let _this = this;
    let circlesArr = _this.$refs.circles;
    circlesArr.forEach(item => {
      var size = 20 + Math.random() * 100;
      console.log(size);
      //   var theDistance = _this.distance + Math.random() * 200;
      item.style.width = `${size}px`;
      item.style.height = `${size}px`;
      TweenMax.to(item, 2, {y:-500,});
      //   item.style.transformOrigin=`0 0 ${theDistance}px`;
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: red;
  width: 100%;
  height: 100vh; // 单位一定是vh才有效
  overflow: hidden;
  &_inner {
    background: yellowgreen;
    display: flex;
    align-items: flex-end;
    position: relative;
    top: 20%;
    left: 25%;
    width: 50%;
    min-width: 600px;
    max-width: 1000px;
    height: 65%;
    overflow: hidden;
  }
}

.circles {
  //   display: inline-block;
  background: blue;
  border-radius: 100%;
  vertical-align: bottom;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}
.parallax_renc {
  position: absolute;
  left: 35%;
  top: 10%;
  width: 30%;
  height: 80%;
  min-width: 150px;
  min-height: 300px;
  background: $first-date;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.items {
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &__inner {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 800px;
    background: #fff;
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