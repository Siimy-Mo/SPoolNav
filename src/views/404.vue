<template>
  <div class="container">
    <div class="container_inner">
      <div v-for="(item, index) in circlesCount" :key="index" class="circles" ref="circles"></div>
      <div class="text">
          404
        <article>
          <p>Opp! Looks like you got lost.</p>
        </article>
      </div>
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
import { TweenMax } from "gsap";
    //     var scene = document.getElementById("parallax_obj");
    // new Parallax(scene);
export default {
  name: "page404",
  data() {
    return {
      circlesCount: 12,
      distance: 400,
      space: 60,
      is: false
    };
  },
  mounted() {
    document.body.style.background = "#fff";


        let _this = this;
    let circlesArr = _this.$refs.circles;
    console.log(this.$refs.contain__inner);
    let positionx = 0;
    let space;
    let maxH = Math.floor(innerHeight * 0.65)-10;
    let maxW = Math.floor(innerWidth * 0.5) - 130;
    circlesArr.forEach(item => {
      var size = 30 + Math.random() * 100;
      var during = 1 + Math.random() * 3;
      item.style.width = `${size}px`;
      item.style.height = `${size}px`;
      item.style.right = `${positionx}px`;
      let totop = maxH - size;
      console.log(during);
      space = _this.space / 2 - Math.random() * _this.space;
      positionx = positionx + size + space + Math.random() * 5;
      if (positionx > maxW) positionx = positionx - Math.random() * 300;
      new TweenMax(item, during, {
        y: -totop,
        repeat: -1,
        yoyo: true
      });
    })

  },
};
</script>

<style lang="scss" scoped>
.container {
//   background: red;
  width: 100%;
  height: 100vh; // 单位一定是vh才有效
  overflow: hidden;
  &_inner {
    // background: yellowgreen;
    // display: flex;
    // align-items: flex-end;
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
  background: $first-date;
  position: absolute;
  bottom: 10px;
  border-radius: 100%;
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

</style>