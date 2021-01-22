# @burhanahmeed/vue-modal-2

[![npm version](https://badgen.net/npm/v/@burhanahmeed/vue-modal-2)](https://npm.im/@burhanahmeed/vue-modal-2) [![size](https://badgen.net/bundlephobia/minzip/@burhanahmeed/vue-modal-2)](https://bundlephobia.com/result?p=@burhanahmeed/vue-modal-2) ![npm](https://img.shields.io/npm/dt/@burhanahmeed/vue-modal-2) 

A simple and lightweight Vue modal component. For short we call it VM2

## Install
```bash
yarn add @burhanahmeed/vue-modal-2
```
or
```bash
npm install @burhanahmeed/vue-modal-2
```

## Usage
__Vue-modal-2__ usage for Vue 2.x
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
Usage in vue. If you didn't specify `options.componentName`, by default it will be `<vue-modal-2></vue-modal-2>`
```javascript
<template>
  <vue-modal-2 name="modal-1"> Component </vue-modal-2>
</template>
```

vue-modal-2 also accept options in `.use()` function as second argument.
### options
#### `options.componentName`
- __type__: `String`
- __example__: `VueModal`
```javascript
Vue.use(Modal. {
  componentName: 'VueModal'
});
```

## License

MIT &copy; [burhanahmeed](https://github.com/burhanahmeed/vue-modal-2)