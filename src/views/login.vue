<template>
  <div class="container">
    <sky></sky>

    <div class="welcome">
      <!-- 原动画平移对象 -->

      <div class="interface leftside working" id="login-field">
        <div class="interfacebox" v-if="isLogin">
          <!-- <test/> -->
          <!-- Login Interface -->
          <transition appear appear-active-class="animated fadeIn">
            <h2 class="title speeddown">Login</h2>
          </transition>
          <transition appear appear-active-class="animated fadeIn">
            <form class="speeddown">
              <div class="input-field usernameinput">
                <i class="el-icon-user-solid" style="color:#afd2d3;"></i>

                <input type="text" placeholder="Username" tabindex ="0" />
              </div>

              <div class="input-field passwordinput">
                <i class="el-icon-lock" style="color:#afd2d3;"></i>

                <input type="password" placeholder="Password" />
              </div>

              <div class="input-field checkbox">
                <input type="checkbox" id="remember"/>

                <label for="remember"></label>
                <label id="labeltext">Remember me</label>
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
        <div class="interfacebox" v-if="isRegister">
          <!-- Login Interface -->
          <transition appear enter-active-class="animated fadeIn">
            <h2 class="title speeddown">Register</h2>
          </transition>
          <transition appear enter-active-class="animated fadeIn">
            <form>
              <div class="input-field usernameinput" onfocus="alert('hi')">
                <i class="el-icon-user" style="color:#f4b09e;"></i>
                <input type="text" placeholder="Username" />
              </div>

              <div class="input-field passwordinput">
                <i class="el-icon-lock" style="color:#f4b09e;"></i>

                <input type="password" placeholder="Password" />
              </div>
              <div class="input-field passwordinput">
                <i class="el-icon-s-check" style="color:#f4b09e;"></i>

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

  font-family: $serif;
  color: $white;
  font-size: 1em;
  letter-spacing: 1.5px;
  font-weight: 300;
}
.speeddown {
  animation-duration: 2s;
}
.title {
  text-align: center;
  width: 100%;
  margin-top: 20%;
  margin-bottom: 10%;
  color: $white;
  font-family: $serif;
  letter-spacing: 5px;
}
.input-field {
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 10px;
  margin: 5% 10%;
  border-radius: 10px;
  background: $white;
}

input {
  border: 0;
  height: 60%;

  font-family: $sans-serif;
  font-size: 15px;
  background: $white;
  padding: 5px;
  margin: 2px 10px;
}
// input[type="checkbox"] {
  
//     background: rgba(240, 84, 77, 1);
//   border: 1px solid $lucy-shamrock;
//   background: $tropical-splash;
// }
// input[type="checkbox"]::before {
//   background: $tropical-splash;
// }
input[type=checkbox]{
  display: none;
}

.input-field .checkbox {
  background: red;
}
#remember +label{
    display: block;
    white-space: nowrap;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    cursor: pointer;
    top: 2px;
    background: $icy-morn;
}
 
#remember:checked +label::before{
    display: block;
    content: "\2714";
    text-align: center;
    font-size: 8px;
    color: $white;
}
#labeltext {
  color: $tropical-splash;
  margin-left: 10px;
  font-size: 10px;
  letter-spacing: 1px;
}

.rightside input {
  color: $first-date;
  &::placeholder {
    color: $first-date;
  }
}
.leftside input {
  color: $tropical-splash;
  &::placeholder {
    color: $tropical-splash;
  }
}

button {
  padding: 12px;
  margin: 20px auto;
  font-family: $sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 11px;
  border-radius: 10px;
  outline: none;
  display: block;
}
.rightside button {
  border: 1px solid $first-date;
  color: $peachy-dust;
  &:hover {
    transform: translateY(-20%);
    background: $tropical-splash;
    border: 1px solid $icy-morn;
    box-shadow: 2px 0 10px $lucy-shamrock;
    color: $white;
  }
}
.leftside button {
  border: 1px solid $icy-morn;
  color: $tropical-splash;
  &:hover {
    transform: translateY(-20%);
    background: $peachy-dust;
    border: 1px solid $first-date;
    box-shadow: 2px 0 10px $pale-beach;
    color: $white;
  }
}
</style>
