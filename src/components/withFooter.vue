<template>
  <div>
    <hr class="vm2__hr" />
    <div class="vm2__footer">
      <div>
        <button>{{ btn1 }}</button>
        <button class="vm2__green">{{ btn2 }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btn1: {
      type: String,
      default: "Button 1",
    },
    btn2: {
      type: String,
      default: "Button 2",
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
.vm2__hr {
  margin-top: 0.4rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
button {
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
button:hover {
  opacity: 0.8;
}
.vm2__green {
  background-color: green;
  color: white;
}
.vm2__red {
  color: red;
}
</style>