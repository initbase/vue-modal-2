# @burhanahmeed/vue-modal-2

[![npm version](https://badgen.net/npm/v/@burhanahmeed/vue-modal-2)](https://npm.im/@burhanahmeed/vue-modal-2) [![size](https://badgen.net/bundlephobia/minzip/@burhanahmeed/vue-modal-2)](https://bundlephobia.com/result?p=@burhanahmeed/vue-modal-2) ![npm](https://img.shields.io/npm/dt/@burhanahmeed/vue-modal-2) 

A simple and lightweight Vue modal component for __Vue 2.x__.


## Documentation

Docs: https://initbase.github.io/vue-modal-2/


## Demo
[demo codesandbox](https://codesandbox.io/s/vue-modal-2-vue2-forked-rfxwr)

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
    this.$vm2.open('modal-1')
  },
  close () {
    this.$vm2.close('modal-1')
  }
}
```

vue-modal-2 also accept options in `.use()` function as second argument.
### options
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

## Props
vue-modal-2 accept some props

#### `name`
unique name of the modal (__required__).
- type: `String`
- required: `true`
- default: `modal-1`

#### `@on-close` or `v-bind:on-close`
props function using to close the modal (__required__).
- type: `function`
- required: `true`

see example above.

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

__footerOptions key:__

|key|type|default|desc|
|---|---|---|---|
|`footerOptions.justify`|`String`|`flex-end`| determine button position on the left or right|
|`footerOptions.btn1`|`String`|`Button 1`|button one text. Button 1 is the one on the left side.|
|`footerOptions.btn2`|`String`|`Button 2`|button two text. Button 2 is the one on the right side.|
|`footerOptions.btn2`|`String`|`Button 2`|button two text. Button 2 is the one on the right side.|
|`footerOptions.disableBtn2`|`Boolean`|`false`|button 2 (right side) can be disabled.|
|`footerOptions.btn1OnClick`|`Function`|`() => {}`|action when button 1 is clicked.|
|`footerOptions.btn2OnClick`|`Function`|`() => {}`|action when button 2 is clicked.|
|`footerOptions.btn1Style`|`Object`|`{}`|style or css of button 1. eg. `{fontSize: '14px'}`|
|`footerOptions.btn2Style`|`Object`|`{}`|style or css of button 2. eg. `{fontSize: '14px'}`|

#### `noFooter`
used to remove footer
- type: `Boolean`
- default: `false`
#### `noHeader`
Used to remove header
- type: `Boolean`
- default: `false`
#### `wrapperBg`
Background color of modal wrapper (backdrop) (default is dark)
- type: `String`
- default: `rgba(0, 0, 0, 0.5)`
#### `darkMode`
Used to switch color mode
- type: `Boolean`
- default: `false`
#### `lightBg`
background color of modal dialog when mode is light
- type: `String`
- default: `white`
#### `darkBg`
background color of modal dialog when mode is dark
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
#### `modalSize`
size of modal dialog
- type: `String`
- value: `md` | `lg` | `xl` | `full-w` | `full-hw` | `sidebar-l` | `sidebar-r`

## API

#### `open(args)`
accept modal name as `args`

#### `close(args)`
accept modal name as `args`

## Contribution
Feel free to open an issue or pull request. Open an issue if you want discussing something.

## Changelogs

[More logs](https://github.com/burhanahmeed/vue-modal-2/releases)

#### 1.1.6
- Add more `modalSize` options -> [`sidebar-r`, `sidebar-l`]
- Add little A11y

#### 1.1.5
- Add props `modalSize` with value [`md`, `lg`, `xl`, `full-w`, `full-hw`]
- fix reponsiveness problems
- fix body overflow not automatically being scrollable


## License

MIT &copy; [burhanahmeed](https://github.com/burhanahmeed/vue-modal-2) and [Initbase](https://github.com/initbase)
