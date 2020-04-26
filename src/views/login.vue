<template>
  <div class="container">
    <sky></sky>

    <div class="welcome">
      <!-- 原动画平移对象 -->

      <div class="interface leftside">
        <transition mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <div class="working" v-if="isLogin">
          sign in interface
        </div>
        <a id="wanna-signin" v-else @click="changeInterface">
          <div class="notworking">
            sign in
          </div>
        </a>
        </transition>
      </div>

      <div class="interface rightside">
                <transition  mode="out-in">
        <div class="working" v-if="!isLogin">
          sign up interface
        </div>


        <a id="wanna-signup" v-else @click="changeInterface">
          <div class="notworking">
            sign up
          </div>
        </a>
        </transition>
      </div>
      <!-- 注册按钮 -->
      <a id="rightbutton">
        <div class="ball nodisplay"></div>
      </a>

      <!-- 白板上的内容 -->
      <div class="leftbox"></div>
      <div class="rightbox"></div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import sky from "./sky.vue";
//import func from "../../vue-temp/vue-editor-bridge";

export default {
  name: "login",
  prop: {
    msg: "here is data from parent~"
  },
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    changeInterface() {
      this.isLogin=!this.isLogin;
    }
  },
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
.interface {
  position: absolute;
  bottom: -50%;
  border-radius: 10px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
}
.rightside {
  right: 5%;
  background: $first-date;
}
.leftside {
  left: 5%;
  background: $icy-morn;
}

.working {
  width: 320px;
  height: 500px;
  border-radius: 10px;
}
.notworking {
  width: 100px;
  height: 50px;
  border-radius: 25px;
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
