<template>
  <div class="container">
    <sky></sky>

    <div class="welcome">
      <!-- 原动画平移对象 -->

      <div class="interface leftside working" id="signin-field">
        <div v-if="isLogin">Signin Interface</div>

        <a @click="wannaSignin" v-else>
          <div class="clickarea" >Sign in</div>
        </a>
      </div>

      <!-- 右边的框 -->
      <div class="interface rightside notworking" id="signup-field">
          <div class="working" v-if="!isLogin">Sign up interface</div>

          <a @click="wannaSignup" v-else>
            <div class="clickarea">sign up</div>
          </a>
      </div>



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
import $ from "jquery";

export default {
  name: "login",
  prop: {
    msg: "here is data from parent~"
  },
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    wannaSignin() {
      this.isLogin = !this.isLogin;
      $("#signin-field").addClass("working");
      $("#signin-field").removeClass("notworking");

      $("#signup-field").addClass("notworking");
      $("#signup-field").removeClass("working");
    },
    wannaSignup() {
      this.isLogin = !this.isLogin;
      $("#signup-field").addClass("working");
      $("#signup-field").removeClass("notworking");

      $("#signin-field").addClass("notworking");
      $("#signin-field").removeClass("working");
    }
  },
  components: {
    sky
  }
};
</script>

<style scoped lang="scss">
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
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
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
.clickarea {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
}
</style>
