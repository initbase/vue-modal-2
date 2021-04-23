<template>
  <div
    class="vm2_wrapper vm2__animate-opacity"
    :id="`vm2__cover_wrapper_${name}`"
    v-show="visible"
    :class="{ 'vm2__animate-show': blockVisible, 'vm2--dark': darkMode }"
    :style="{ backgroundColor: wrapperBg }"
    tabindex="-1"
    aria-hidden="true"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="`dialog ${name}`"
  >
    <div 
      class="vm2_modal-dialog vm2_settings" 
      :class="`${contentSize? contentSize: ''} ${visible? 'vm2_visible': ''}`" 
      role="document"
    >
      <div
        class="vm2_modal-content"
        :id="`vm2_box_${name}`"
        :style="{ backgroundColor: modalBgColor, color: fontColor }"
      >
        <!-- modal header -->
        <withHeader v-if="!noHeader" @on-icon-click="handleClose" :props="{...headerOptions}">
          <slot name="header" />
        </withHeader>
        <!-- modal body -->
        <div class="vm2_body">
          <div v-if="hasDefaultSlot" style="margin: 15px">
            <p>Content here </p>
          </div>
          <slot v-else />
        </div>
        <!-- modal footer -->
        <WithFooter v-if="!noFooter" :props="{ ...footerOptions }">
          <slot name="footer" />
        </WithFooter>
      </div>
    </div>
  </div>
</template>

<script>
import WithHeader from "./withHeader.vue";
import WithFooter from "./withFooter.vue";
export default {
  props: {
    name: {
      type: String,
      default: "modal-1",
    },
    footerOptions: {
      type: Object,
      default: () => {},
    },
    headerOptions: {
      type: Object,
      default: () => {},
    },
    // visible: {
    //   type: Boolean,
    //   default: false,
    // },
    noFooter: {
      type: Boolean,
      default: false,
    },
    noHeader: {
      type: Boolean,
      default: false,
    },
    wrapperBg: {
      type: String,
      default: `rgba(0, 0, 0, 0.5)`,
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
    lightBg: {
      type: String,
      default: "white",
    },
    darkBg: {
      type: String,
      default: "#06090f",
    },
    fontDark: {
      type: String,
      default: "white",
    },
    fontLight: {
      type: String,
      default: "black",
    },
    modalSize: {
      type: [String, Number]
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.addStyling("open");
      } else {
        this.handleClose();
      }
    },
  },
  data() {
    return {
      blockVisible: false,
      scrollY: 0,
      visible: false,
    };
  },
  methods: {
    handleClose() {
      this.blockVisible = true;
      this.addStyling("close");
      setTimeout(() => {
        this.$emit("on-close", false);
        this.blockVisible = false;
      }, 500);
    },
    addStyling(args) {
      const vm = this;
      var body = document.getElementsByTagName("body")[0];
      if (args == "open") {
        var top = "-" + window.scrollY + "px";
        vm.scrollY = top;
        body.style.overflow = "hidden";
      } else {
        var scrollY = vm.scrollY;
        body.style.overflow = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    },
  },
  computed: {
    modalBgColor() {
      if (this.darkMode) {
        return this.darkBg;
      }
      return this.lightBg;
    },
    fontColor() {
      if (this.darkMode) {
        return this.fontDark;
      }
      return this.fontLight;
    },
    hasDefaultSlot() {
      return !this.$slots.default;
    },
    contentSize () {
      if (this.modalSize) {
        if (this.modalSize === 'md') {
          return 'vm2_md';
        } else if (this.modalSize === 'lg') {
          return 'vm2_lg';
        } else if (this.modalSize === 'xl') {
          return 'vm2_xl';
        } else if (this.modalSize === 'full-w') {
          return 'vm2_fullWidth'
        } else if (this.modalSize === 'full-hw') {
          return 'vm2_full-hw'
        } else if (this.modalSize == 'sidebar-r') {
          return 'vm2_sidebar-r'
        } else if (this.modalSize == 'sidebar-l') {
          return 'vm2_sidebar-l'
        }
      }
      return null
    }
  },
  components: {
    WithHeader,
    WithFooter,
  },
  created() {
    this.$vm2.root.$on("toggle", (status, name) => {
      if (this.name == name) {
        this.visible = status;
      }
    });
  },
  mounted() {
    // this.blockVisible = !this.visible;
    const vm = this;
    document.getElementById(`vm2__cover_wrapper_${vm.name}`).onclick = function (e) {
      if (!document.getElementById(`vm2_box_${vm.name}`).contains(e.target)) {
        // alert("You clicked outside");
        if (document.getElementById(`vm2__cover_wrapper_${vm.name}`).contains(e.target)) {
          // alert("Here");
          vm.handleClose();
        }
      }
    };
    document.addEventListener('keyup', e => {
      e = e || window.event;
      if (e.keyCode == 27) {
        // alert(`Esc key pr/zessed. ${vm.visible} ${vm.name}`);
        if (vm.visible == true) {
          vm.handleClose();
        }
      }  
    })
  },
};
</script>

<style scoped>
.vm2_wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: block;
  padding: 3%;
}
.vm2_modal-dialog {
  display: flex;
  justify-content: center;
  position: fixed;
  max-height: 90vh;
  background-color: transparent;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0.3rem;
}
.vm2_settings {
  width: auto;
  height: auto;
}
.vm2_modal-content {
  position: relative;
  width: 100%;
  border-radius: 5px;
}
.vm2__animate-opacity {
  animation: opac 0.8s;
}

.vm2_fullWidth, .vm2_full-hw {
  width: auto;
}
.vm2_body {
  overflow-y: auto;
}
.vm2_full-hw .vm2_modal-content,
.vm2_sidebar-r .vm2_modal-content,
.vm2_sidebar-l .vm2_modal-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.vm2_full-hw .vm2_body,
.vm2_sidebar-r .vm2_body,
.vm2_sidebar-l .vm2_body {
  flex: 1 1 auto;
  position: relative;
}
.vm2_full-hw.vm2_modal-dialog {
  max-height: unset;
}
.vm2_full-hw.vm2_settings,
.vm2_sidebar-r.vm2_settings,
.vm2_sidebar-l.vm2_settings {
  height: unset;
  margin: 0rem;
}

.vm2_sidebar-r.vm2_modal-dialog {
  max-height: unset;
  left: unset;
  width: 100%;
}
.vm2_sidebar-l.vm2_modal-dialog {
  max-height: unset;
  right: unset;
  width: 100%;
}
.vm2_sidebar-r.vm2_modal-dialog {
  right: -10000px;
  transition: right .7s ease;
}
.vm2_visible.vm2_sidebar-r.vm2_modal-dialog {
  right: 0;
}


@media screen and (min-width: 370px) {
  .vm2_settings {
    max-width: 350px;
  }
  .vm2_modal-dialog {
    margin: 1.75rem auto;
  }
  .vm2_settings.vm2_xl,
  .vm2_settings.vm2_lg, 
  .vm2_settings.vm2_fullWidth, 
  .vm2_settings.vm2_full-hw {
    width: auto !important;
    max-width: unset;
  }
}

@media screen and (min-width: 580px) {
  .vm2_settings.vm2_md, .vm2_settings.vm2_lg {
    max-width: 500px;
  }
  .vm2_settings.vm2_xl {
    width: auto;
    max-width: unset;
  }
}

@media screen and (min-width: 880px) {
  .vm2_settings.vm2_lg, .vm2_settings.vm2_xl {
    max-width: 800px;
  }
}

@media screen and (min-width: 1300px) {
  .vm2_settings.vm2_xl {
    max-width: 1200px;
  }
}

@keyframes opac {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.vm2__animate-show {
  animation: show 0.3s;
  animation-fill-mode: forwards;
}

@keyframes show {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
