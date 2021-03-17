# Props

vue-modal-2 accept some props

## `name`
unique name of the modal (__required__).
- type: `String`
- required: `true`
- default: `modal-1`


## `@on-close` or `v-bind:on-close`
props function using to close the modal (__required__).
- type: `function`
- required: `true`

see example above.

## `headerOptions`
options props for vue-modal-2 header
- type: `Object`
- default: `{}`

__headerOptions key:__

|key|type|default|desc|
|---|---|---|---|
|`headerOptions.title`|`String`|Modal title| Modal title on the left side|
|`headerOptions.closeIcon`|`String`|`&#x2715;`|Close button icon on the right side|

## `footerOptions`
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

## `noFooter`
used to remove footer
- type: `Boolean`
- default: `false`
## `noHeader`
Used to remove header
- type: `Boolean`
- default: `false`
## `wrapperBg`
Background color of modal wrapper (backdrop) (default is dark)
- type: `String`
- default: `rgba(0, 0, 0, 0.5)`
## `darkMode`
Used to switch color mode
- type: `Boolean`
- default: `false`
## `lightBg`
background color of modal dialog when mode is light
- type: `String`
- default: `white`
## `darkBg`
background color of modal dialog when mode is dark
- type: `String`
- default: `#06090f`
## `fontDark`
text color of modal when mode is dark
- type: `String`
- default: `white`
## `fontLight`
text color of modal when mode is light
- type: `String`
- default: `black`
## `modalSize`
size of modal dialog
- type: `String`
- value: `md` | `lg` | `xl` | `full-w` | `full-hw` | `sidebar-l` | `sidebar-r`