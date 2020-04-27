import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon } from 'element-ui';
import './plugins/element.js'

Vue.component(Icon.name, Icon);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
