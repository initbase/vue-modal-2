<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <p v-for="i in 10">AKAKAKAKAKAAKAKAK</p>
    <ContainerModal
      name="modal1"
      :footerOptions="{
        btn1OnClick: () => hell(),
        justify: 'flex-start',
      }"
      :visible="isVisible"
      :darkMode="true"
      @on-close="handleClose"
    >
      <template v-slot:header>
        <!-- <div>Header Name</div> -->
      </template>
      <template v-slot:footer>
        <!-- <div>Footer Name</div> -->
      </template>
      <div>content</div>
    </ContainerModal>
    <button @click="open">Click Here</button>
    <p v-for="i in 10">HOHOHO</p>
  </div>
</template>

<script>
import ContainerModal from "./components/Container";
export default {
  name: "App",
  components: {
    ContainerModal,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    hell() {
      alert("111");
    },
    handleClose(args) {
      this.isVisible = false;
    },
    open() {
      this.isVisible = true;
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
</style>
