<template>
  <div>
    <div class="vm2__header">
      <div>
        <h4 style="margin: 5px 10px">{{ title }}</h4>
      </div>
      <div class="vm2__close" v-html="closeIcon"></div>
    </div>
    <hr class="vm2__hr" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Modal title",
    },
    closeIcon: {
      type: String,
      default: "&#x2715;",
    },
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
.vm2__hr {
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>