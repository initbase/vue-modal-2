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

vue-modal-2 also accept options in `.use()` function as second argument.
## options
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