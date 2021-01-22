import ContainerModal from "./components/Container.vue";
// import Vue from "vue";

const optsDefault = {
  componentName: "vue-modal-2"
};
const plugin = {
  install(Vue, opts = {}) {
    if (Vue.prototype.$vm2) {
      return;
    }

    const options = Object.assign(optsDefault, opts);

    const root = new Vue();

    Vue.prototype.$vm2 = {
      open: (name = "modal-1") => {
        root.$emit("toggle", true, name);
      },
      close: (name = "modal-1") => {
        root.$emit("toggle", false, name);
      },
      root: root
    };

    Vue.component(options.componentName, ContainerModal);
  }
};

export default plugin;
