import ContainerModal from "./components/Container.vue";
import $eventBus from './Event.js'
import { isVue2 } from "vue-demi";

const optsDefault = {
  componentName: "vue-modal-2"
};
const plugin = {
  install(app, opts = {}) {
    if (isVue2) {
      if (app.prototype.$vm2) {
        return;
      }
    } else {
      if (app.config.globalProperties.$vm2) {
        return;
      }
    }

    let options = Object.assign(optsDefault, opts);

    const root = $eventBus;

    app.component(options.componentName, ContainerModal);

    const api = {
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
    }

    if (isVue2) {
      app.prototype.$vm2 = {
        ...api,
        root: root
      };
    } else {
      app.config.globalProperties.$vm2 = {
        ...api,
        root: root
      };
    }
  }
};

export default plugin;
