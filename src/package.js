import ContainerModal from "./components/Container.vue";
import Testing from "./components/Testing.vue";

import Bus from './Event.js'
import {inject} from 'vue';

const optsDefault = {
  componentName: "vue-modal-2"
};

const modalSymbol = Symbol();
const useModal = () => {
  const vueModal = inject(modalSymbol);
  if (!vueModal) throw new Error('No VM2 provided!!!')
  return vueModal;
}

const plugin = {
  install(App, opts = {}) {

    if (App.config.globalProperties.$vm2) {
      return;
    }

    let options = Object.assign(optsDefault, opts);

    App.component(options.componentName, ContainerModal);
    
    const root = new Bus();

    const api = {
      open: (name = "modal-1") => {
        root.trigger("toggle", {
          status: true,
          name
        });
        // console.log(root.events);
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

    App.config.globalProperties.$vm2 = {
      ...api,
      root: root
    };
    App.provide(modalSymbol, api)

  }
};

export {
  useModal
}
export default plugin;
