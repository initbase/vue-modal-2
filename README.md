# @burhanahmeed/vue-modal-2

[![npm version](https://badgen.net/npm/v/@burhanahmeed/vue-modal-2)](https://npm.im/@burhanahmeed/vue-modal-2) [![size](https://badgen.net/bundlephobia/minzip/@burhanahmeed/vue-modal-2)](https://bundlephobia.com/result?p=@burhanahmeed/vue-modal-2) ![npm](https://img.shields.io/npm/dt/@burhanahmeed/vue-modal-2) 

A simple and lightweight Vue modal component. For short we call it VM2. (Still experimental)

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
Usage in vue. If you didn't specify [`options.componentName`](#optionscomponentname), by default it will be `<vue-modal-2></vue-modal-2>`
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
    this.$vm2.open('model-1')
  },
  close () {
    this.$vm2.close('model-1')
  }
}
```

vue-modal-2 also accept options in `.use()` function as second argument.
### options
#### `options.componentName`
- type: `String`
- default: `vue-modal-2`
- example: `VueModal`
```javascript
Vue.use(Modal. {
  componentName: 'VueModal'
});
```
### Props
vue-modal-2 accept some props

#### `headerOptions`
options props for vue-modal-2 header
- type: `Object`
- default: `{}`

__headerOptions key:__

|key|type|default|desc|
|---|---|---|---|
|`headerOptions.title`|`String`|Modal title| Modal title on the left side|
|`headerOptions.closeIcon`|`String`|`&#x2715;`|Close button icon on the right side|

#### `footerOptions`
options props for vue-modal-2 footer
- type: `Object`
- default: `{}`

#### `noFooter`
used to remove footer
- type: `Boolean`
- default: `false`
#### `noHeader`
Used to remove header
- type: `Boolean`
- default: `false`
#### `wrapperBg`
Background color of modal wrapper (default is dark)
- type: `String`
- default: `rgba(0, 0, 0, 0.5)`
#### `darkMode`
Used to switch color mode
- type: `Boolean`
- default: `false`
#### `lightBg`
background color of modal container when mode is light
- type: `String`
- default: `white`
#### `darkBg`
background color of modal container when mode is dark
- type: `String`
- default: `#06090f`
#### `fontDark`
text color of modal when mode is dark
- type: `String`
- default: `white`
#### `fontLight`
text color of modal when mode is light
- type: `String`
- default: `black`


## License

MIT &copy; [burhanahmeed](https://github.com/burhanahmeed/vue-modal-2)