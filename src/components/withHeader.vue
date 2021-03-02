<template>
  <div>
    <div class="vm2__header" v-if="hasDefaultSlot">
      <div>
        <h4 style="margin: 5px 10px" @click="tes()">{{ title }}</h4>
      </div>
      <button
        tabindex="1"
        ref="closeButton"
        aria-label="Close" 
        role="button" 
        aria-pressed="false" 
        class="vm2__close" 
        @click="handleIconClick">
        <span v-html="closeIcon" aria-hidden="true"></span>
      </button>
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
    }
  },
  computed: {
    hasDefaultSlot() {
      return !this.$slots.default;
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
  mounted () {
    this.$nextTick(() => {
      if (this.$refs && this.$refs.closeButton) {
        this.$refs.closeButton.focus(); 
      }
    });
    setTimeout(() => {
      if (this.$refs && this.$refs.closeButton) {
        this.$refs.closeButton.focus(); 
      }
    }, 300);
  }
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
  padding: 0 4px;
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
button[role="button"] {
  border: transparent;
  background-color: transparent;
  font-size: 16px;
}
</style>