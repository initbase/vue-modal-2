import ContainerModal from "./components/Container.vue";
import $eventBus from './Event.js'

const optsDefault = {
  componentName: "vue-modal-2"
};
const plugin = {
  install(app, opts = {}) {
    if (app.config.globalProperties.$vm2) {
      return;
    }

    const options = Object.assign(optsDefault, opts);

    const root = $eventBus;

    app.component(options.componentName, ContainerModal);

    app.config.globalProperties.$vm2 = {
      open: (name = "modal-1") => {
        root.trigger("toggle", {
          status: true,
          name
        });
      },
      close: (name = "modal-1") => {
        root.trigger("toggle", {
          status: false,
          name
        });
      },
      root: root
    };
  }
};

export default plugin;
