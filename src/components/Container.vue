<template>
  <div
    class="vm2_wrapper vm2__animate-opacity"
    id="vm2__cover_wrapper"
    v-show="visible"
    :class="{ 'vm2__animate-show': blockVisible, 'vm2--dark': darkMode }"
    :style="{ backgroundColor: wrapperBg }"
  >
    <div class="vm2_modal-dialog vm2_settings">
      <div
        class="vm2_modal-content"
        id="vm2_box"
        :style="{ backgroundColor: modalBgColor, color: fontColor }"
      >
        <withHeader v-if="!noHeader" @on-icon-click="handleClose" :props="{...headerOptions}">
          <slot name="header" />
        </withHeader>
        <div v-if="hasDefaultSlot" style="margin: 15px">This is content</div>
        <slot v-else />
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
  },
  watch: {
    visible(val) {
      if (val) {
        this.addStyling("open");
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
    document.getElementById("vm2__cover_wrapper").onclick = function (e) {
      if (!document.getElementById("vm2_box").contains(e.target)) {
        // alert("You clicked outside");
        if (document.getElementById("vm2__cover_wrapper").contains(e.target)) {
          // alert("Here");
          vm.handleClose();
        }
      }
    };
    document.onkeyup = function (e) {
      e = e || window.event;
      if (e.keyCode == 27) {
        // alert(`Esc key pr/zessed. ${vm.visible}`);
        if (vm.visible == true) {
          vm.handleClose();
        }
      }
    };
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
  margin: 1.75rem auto;
}
.vm2_settings {
  width: 90%;
  height: auto;
}
.vm2_modal-content {
  position: relative;
  width: 350px;
  border-radius: 5px;
}
.vm2__animate-opacity {
  animation: opac 0.8s;
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
