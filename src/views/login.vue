<template>
  <div class="container">
    <sky></sky>Hellow, here is login part
    <input id="beball" type="button" value="变球" />

    <div class="welcome">
      <!-- 原动画平移对象 -->

      <div class="pinkbox">
        <!-- 伸展 -->
        <div class="renc">Login interface</div>

        <!-- 折叠 -->
        <a id="leftbutton">
          <div class="ball nodisplay">sign in</div>
        </a>
      </div>
      <!-- 注册按钮 -->
      <a id="rightbutton">
        <div class="ball nodisplay">sign in</div>
      </a>

      <!-- 白板上的内容 -->
      <div class="leftbox">leftbox</div>
      <div class="rightbox">rightbox</div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import sky from "./sky.vue";
//import func from "../../vue-temp/vue-editor-bridge";


$(function() {
  $("#beball").click(function() {
    //   $('.pinkbox').css('transform', 'translateX(80%)');
    $(".pinkbox").removeClass("renc");
    $(".pinkbox").addClass("ball");

    $(".renc").addClass("nodisplay");
    $(".ball").removeClass("nodisplay");
  });

  $("#leftbutton").click(function() {
    $(".pinkbox").removeClass("ball");
    $(".pinkbox").addClass("renc");
    //$('.pinkbox').css('transform', 'translateX(0%)');

    $(".ball").addClass("nodisplay");
    $(".renc").removeClass("nodisplay");
  });
});

export default {
  name: "login",
  prop: {
    msg: "here is data from parent~"
  },
  data() {
    return {
      flag: true
    };
  },
  methods: {},
  components: {
    sky
  }
};
</script>

<style scoped lang="scss">
@import "../css/global-color.scss";

.container {
  margin: auto;
  width: 650px;
  height: 550px;
  position: relative;
}
.welcome {
  background: $white;
  width: 650px;
  height: 50px;
  position: absolute;
  top: 90%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  //opacity: 50%;
}
.pinkbox {
  position: absolute;
  bottom: -50%;
  left: 5%;
  background: $icy-morn;
  border-radius: 10px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  z-index: 1;
}
.renc {
  width: 320px;
  height: 500px;
  border-radius: 10px;
}
.ball {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 25px;
}
.leftbox,
.rightbox {
  position: absolute;
  width: 50%;
}
.leftbox {
  left: -2%;
}
.rightbox {
  right: -2%;
}

.nodisplay {
  display: none;
  transition: all 0.5s ease;
}
</style>