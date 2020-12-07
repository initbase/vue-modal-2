<template>
  <div class="vm2_wrapper">
    <div class="vm2_modal-dialog vm2_settings">
      <div class="vm2_modal-content">
        <withHeader />
        <div style="margin: 15px">This is content</div>
        <WithFooter :props="{ ...footerOptions }" />
      </div>
    </div>
  </div>
</template>

<script>
import WithHeader from "./withHeader";
import WithFooter from "./withFooter";
export default {
  props: {
    name: String,
    footerOptions: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    WithHeader,
    WithFooter,
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
  background-color: rgba(0, 0, 0, 0.5) !important;
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
  background-color: white;
  width: 350px;
  border-radius: 5px;
}
</style>