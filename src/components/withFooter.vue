<template>
  <div>
    <hr class="vm2__hr" />
    <div
      class="vm2__footer"
      :style="{ justifyContent: justify }"
      v-if="hasDefaultSlot"
    >
      <div>
        <button @click="btn1OnClick" :style="btn1Style" class="vm2__btn">
          {{ btn1 }}
        </button>
        <button
          v-if="!disableBtn2"
          @click="btn2OnClick"
          class="vm2__green vm2__btn"
          :style="btn2Style"
        >
          {{ btn2 }}
        </button>
      </div>
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: ["props"],
  computed: {
    justify() {
      if (this.props && this.props.justify) {
        return this.props.justify;
      }
      return "flex-end";
    },
    btn2Style() {
      if (this.props && this.props.btn2Style) {
        return this.props.btn2Style;
      }
      return {};
    },
    btn1Style() {
      if (this.props && this.props.btn1Style) {
        return this.props.btn1Style;
      }
      return {};
    },
    btn1OnClick() {
      if (this.props && this.props.btn1OnClick) {
        return this.props.btn1OnClick;
      }
      return () => {};
    },
    btn2OnClick() {
      if (this.props && this.props.btn2OnClick) {
        return this.props.btn2OnClick;
      }
      return () => {};
    },
    disableBtn2() {
      if (this.props && this.props.disableBtn2) {
        return this.props.disableBtn2;
      }
      return false;
    },
    btn1() {
      if (this.props && this.props.btn1) {
        return this.props.btn1;
      }
      return "Button 1";
    },
    btn2() {
      if (this.props && this.props.btn2) {
        return this.props.btn2;
      }
      return "Button 2";
    },
    hasDefaultSlot() {
      return !this.$slots.default;
    },
  },
};
</script>

<style scoped>
.vm2__footer {
  justify-content: flex-end;
  display: flex;
  margin: 10px;
}
.vm2__btn {
  margin: 0 5px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
}
.vm2__btn:hover {
  opacity: 0.8;
}
.vm2__green {
  background-color: green;
  color: white;
}
.vm2__red {
  color: red;
}
.vm2--dark .vm2__hr {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.vm2__hr {
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>