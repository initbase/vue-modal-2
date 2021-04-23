<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <p v-for="i in 10" :key="i">scroll down</p>

    <modal-vue
      name="modal1"
      :headerOptions="{
        title: 'Delete?'
      }"
      :footerOptions="{
        btn1OnClick: () => hell(),
        justify: 'flex-start',
      }"
      :darkMode="false"
      @on-close="handleClose"
    >
      <template v-slot:header>
        <!-- <div>Header Name</div> -->
      </template>
      <template v-slot:footer>
        <!-- <div>Footer Name</div> -->
      </template>
      <div>content</div>
    </modal-vue>
    <button @click="open" class="button">Click Here</button>

    <modal-vue
      name="modal2"
      :headerOptions="{
        title: 'Delete?'
      }"
      :footerOptions="{
        btn1OnClick: () => hell(),
        justify: 'flex-start',
      }"
      :darkMode="false"
      @on-close="handleClose2"
      modalSize="md"
    >
      <div>content</div>
    </modal-vue>
    <button @click="open2" class="button">Click Here 2</button>

    <p v-for="i in 10" :key="i">scroll up</p>
  </div>
</template>

<script>
// import ContainerModal from "./components/Container";
export default {
  name: "App",
  components: {
    // ContainerModal,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    hell() {
      alert("111");
      this.handleClose()
      this.handleClose2()
    },
    handleClose() {
      this.isVisible = false;
      this.$vm2.close("modal1");
    },
    open() {
      this.isVisible = true;
      this.$vm2.open("modal1");
    },
    handleClose2() {
      this.isVisible = false;
      this.$vm2.close("modal2");
    },
    open2() {
      this.isVisible = true;
      this.$vm2.open("modal2");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
.button {
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
</style>
