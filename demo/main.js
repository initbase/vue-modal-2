import Vue, { createApp } from "vue";
import App from "./App.vue";
import {VueModal} from "../src/index.js";

// Vue.config.productionTip = false;
// Vue.use(VueModal, {
//   componentName: 'ModalVue'
// });
// new Vue({
//   render: (h) => h(App)
// }).$mount("#app");

createApp(App)
.use(VueModal, {
  componentName: 'ModalVue'
})
.mount('#app')