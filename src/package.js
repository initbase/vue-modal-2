import ContainerModal from "./components/Container.vue";
import Bus from './Event.js'
import { isVue3, inject } from 'vue-demi';

const optsDefault = {
  componentName: "vue-modal-2"
};

const modalSymbol = Symbol();
const useModal = () => {
  // if (isVue3) {
  //   const vueModal = inject(modalSymbol)
  //   if (!vueModal) throw new Error('No VM2 provided!!!')
  //   return vueModal;
  // }
}

// const AsyncComp = defineAsyncComponent(() =>
//   import('./components/Container.vue')
// )

const plugin = {
  install(app, opts = {}) {

    if (app.config.globalProperties.$vm2) {
      return;
    }

    let options = Object.assign(optsDefault, opts);

    app.component(options.componentName, ContainerModal);
    
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

    app.config.globalProperties.$vm2 = {
      ...api,
      root: root
    };
    app.provide(modalSymbol, api)

  }
};

export {
  useModal
}
export default plugin;
