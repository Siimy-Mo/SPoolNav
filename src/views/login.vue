<template>
  <div class="container">
    <sky></sky>

    <div class="welcome">
      <!-- 原动画平移对象 -->

      <div class="interface leftside working" id="login-field">
        <div v-if="isLogin">
          <!-- <test/> -->
          <!-- Login Interface -->
          <transition appear appear-active-class="animated fadeIn">
            <h2 class="titile speeddown">Login</h2>
          </transition>
          <transition appear appear-active-class="animated fadeIn">
            <form class="speeddown">
              <div class="input-field usernameinput">

                <i class="el-icon-user-solid"></i>
                
                <input type="text" placeholder="Username" />
              </div>

              <div class="input-field passwordinput">
                <span>Icon</span>
                <input type="password" placeholder="Password" />
              </div>

              <div class="checkbox">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>

              <button class="button submit">Login</button>
            </form>
          </transition>
        </div>

        <a @click="wannaLogin" v-else>
          <div class="clickarea">Login</div>
        </a>
      </div>

      <!-- 右边的框 -->
      <div class="interface rightside notworking" id="register-field">
        <div class="working" v-if="isRegister">
          <!-- Login Interface -->
          <transition appear enter-active-class="animated fadeIn">
            <h2 class="titile">Register</h2>
          </transition>
          <transition appear enter-active-class="animated fadeIn">
            <form>
              <div class="input-field usernameinput">
                <span>Icon</span>
                <input type="text" placeholder="Username" />
              </div>

              <div class="input-field emailinput">
                <span>Icon</span>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field passwordinput">
                <span>Icon</span>
                <input type="password" placeholder="Password" />
              </div>
              <div class="input-field passwordinput">
                <span>Icon</span>
                <input type="password" placeholder="Confirm Password" />
              </div>

              <button class="button submit">Register</button>
            </form>
          </transition>
        </div>

        <a @click="wannaRegister" v-else>
          <div class="clickarea">Register</div>
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

// import test from "./test";

export default {
  name: "login",
  prop: {
    msg: "here is data from parent~"
  },
  data() {
    return {
      isLogin: true,
      isRegister: false
    };
  },
  methods: {
    wannaLogin() {
      this.isRegister = false;
      let _this = this;
      setTimeout(function() {
        _this.isLogin = true;
      }, 200);
      $("#login-field").addClass("working");
      $("#login-field").removeClass("notworking");

      $("#register-field").addClass("notworking");
      $("#register-field").removeClass("working");
    },
    wannaRegister() {
      this.isLogin = false;
      let _this = this;
      setTimeout(function() {
        _this.isRegister = true;
      }, 200);
      $("#register-field").addClass("working");
      $("#register-field").removeClass("notworking");

      $("#login-field").addClass("notworking");
      $("#login-field").removeClass("working");
    }
  },
  components: {
    sky
    // test
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
.speeddown {
  animation-duration: 2s;
}
.input-field {
    height: 50px;
  margin: 5px 10%;
  border-radius: 5px;
  background: white;


}
input {
  border: 0;
  font-size: 16px;
  color: white;
}
</style>
