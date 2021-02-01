import ContainerModal from "./components/Container.vue";
import Bus from './Event.js';

const optsDefault = {
  componentName: "vue-modal-2"
};
const Plugins = {
  install (app, opts = {}) {
    if (app.prototype.$vm2) {
      return;
    }
    let options = Object.assign(optsDefault, opts);

    const root = new Bus();

    const api = {
      open: (name = "modal-1") => {
        root.trigger("toggle", {
          status: true,
          name
        });
        console.log(root.events);
      },
      close: (name = "modal-1") => {
        root.trigger("toggle", {
          status: false,
          name
        });
      },
      logged: () => {
        console.log('Logged');
      }
    }

    app.prototype.$vm2 = {
      ...api,
      root: root
    };

    app.component(options.componentName, ContainerModal);

  }
}

export default Plugins;