import Vue from "vue";
import App from "./App.vue";
import VM2 from "../src/index.js";

Vue.config.productionTip = false;
Vue.use(VM2, {
  componentName: 'ModalVue'
});
new Vue({
  render: (h) => h(App)
}).$mount("#app");
