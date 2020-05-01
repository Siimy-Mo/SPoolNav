<template>
  <div class="container">
    <div class="container_inner">
      <div v-for="(item, index) in circlesCount" :key="index" class="circles" ref="circles"></div>
      <text404 class="text404" />
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";
import text404 from "../components/404text";

export default {
  name: "page404",
  components: {
    text404
  },
  data() {
    return {
      circlesCount: 12,
      distance: 400,
      space: 60,
      is: false,
      colorset: [
        { color1: "#a4b7ee", color2: "#5fc7df" }, // Light Pastel Purple to Blue Radiance
        { color1: "#de7881", color2: "#d89be2" }, // truelove and Pale Plum
        { color1: "#a5e6df", color2: "#edafba" } // Spinnaker and Spinnaker
      ]
    };
  },
  mounted() {
    document.body.style.background = "#fff";
    this.initial_position();
    this.initial_color();
  },
  methods: {
    initial_position() {
      let _this = this;
      let circlesArr = _this.$refs.circles;
      let positionx = 12;
      let space;
      let maxH = Math.floor(innerHeight * 0.65) - 10;
      let maxW = Math.floor(innerWidth * 0.5) - 130;
      circlesArr.forEach(item => {
        var size = 30 + Math.random() * 100;
        var during = 1 + Math.random() * 3;
        var colors = this.initial_color();
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;
        item.style.right = `${positionx}px`;

        item.style.background = `linear-gradient(to bottom, ${colors.color1}, ${colors.color2})`;
        let totop = maxH - size;
        space = _this.space / 2 - Math.random() * _this.space;
        positionx = positionx + size + space + Math.random() * 5;
        if (positionx > maxW) positionx = positionx - Math.random() * 300;
        new TweenMax(item, during, {
          y: -totop,
          repeat: -1,
          yoyo: true
        });
      });
    },
    initial_color() {
      let index = Math.floor(Math.random() * 3);
      return this.colorset[index];
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh; // 单位一定是vh才有效
  overflow: hidden;

  &_inner {
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
  box-shadow: 5px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 3;
}
</style>