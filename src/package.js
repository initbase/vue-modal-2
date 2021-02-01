import ContainerModal from "./components/Container.vue";
import Bus from './Event.js'
import { isVue3, Vue } from 'vue-demi';

const optsDefault = {
  componentName: "vue-modal-2"
};

const modalSymbol = Symbol();
const useModal = () => {
  if (isVue3) {
    const vueModal = inject(modalSymbol)
    if (!vueModal) throw new Error('No VueToasted provided!!!')
    return vueModal;
  }
}

const plugin = {
  install(app, opts = {}) {

    if (app.config.globalProperties.$vm2) {
      return;
    }

    let options = Object.assign(optsDefault, opts);

    const root = new Bus();

    app.component(options.componentName, ContainerModal);

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
