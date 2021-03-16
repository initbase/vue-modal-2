<template>
  <div>
    <div class="vm2__header" v-if="hasDefaultSlot">
      <div>
        <h4 style="margin: 5px 10px">{{ title }}</h4>
      </div>
      <div class="vm2__close" @click="handleIconClick" v-html="closeIcon"></div>
    </div>
    <slot v-else />
    <hr class="vm2__hr" />
  </div>
</template>

<script>
export default {
  props: ['props'],
  methods: {
    handleIconClick() {
      this.$emit("on-icon-click");
    },
  },
  computed: {
    hasDefaultSlot() {
      return !(this.$slots.default()[0] && this.$slots.default()[0].children.length);
    },
    title () {
      if (this.props && this.props.title) {
        return this.props.title;
      }
      return "Modal title";
    },
    closeIcon () {
      if (this.props && this.props.closeIcon) {
        return this.props.closeIcon;
      }
      return "&#x2715;";
    }
  },
};
</script>

<style scoped>
.vm2__header {
  padding: 10px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
}
.vm2__close {
  margin: 5px;
  cursor: pointer;
}
.vm2__close:hover {
  opacity: 0.7;
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