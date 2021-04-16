# Installation

Vue Modal 2 currently is only available in __Vue 2x__. We are working to make it available for __Vue 3x__.

```bash
yarn add @burhanahmeed/vue-modal-2
```
or
```bash
npm install @burhanahmeed/vue-modal-2
```

## Usage
How to use it in Vue 2.x

### CLI

```javascript
import Vue from "vue";
import App from "./App.vue";

import Modal from "@burhanahmeed/vue-modal-2";

Vue.use(Modal);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
```

Usage in vue. If you didn't specify [`options.componentName`](#options-componentname), by default it will be `<vue-modal-2></vue-modal-2>`
```html
<template>
  <vue-modal-2 name="modal-1" @on-close="close">
    Hello From Inside Modal Component
  </vue-modal-2>
</template>
```

__API usage__
```javascript
methods: {
  open () {
    this.$vm2.open('modal-1')
  },
  close () {
    this.$vm2.close('modal-1')
  }
}
```

::: tip Typescript
For typescript you can use `(this as any)`.
Please refer to this [issue](https://github.com/burhanahmeed/vue-modal-2/issues/2).
:::

### Nuxt

For Nuxtjs, use it as plugin with client mode.

::: tip Required
As of now, you need wrap `<vue-modal-2/>` with `<client-only/>`. It will avoid you from unrendered modal component during `build` or `generate` process.
:::

### Browser module

If you are using browser ESM feature you can use it as javascript module.

```html
<script type="module">
  import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";
  import VueModal from "https://unpkg.com/@burhanahmeed/vue-modal-2/dist/vue-modal-2.esm.js";

  Vue.use(VueModal, {
    componentName: "ModalVue"
  });
  var app = new Vue({
    el: "#app",
    data: {
      message: "Hello Vue!"
    }
  });
</script>
```

## options

vue-modal-2 also accept options in `.use()` function as second argument.

#### `options.componentName`
- type: `String`
- default: `vue-modal-2`

```javascript
Vue.use(Modal. {
  componentName: 'MyModal'
});
```
```html
<template>
  <my-modal name="modal-1" @on-close="close">
    Hello From Inside Modal Component
  </my-modal>
</template>
```

