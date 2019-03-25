<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Counter :multiplier="4" />
    <Form @submission-succeeded="nextScreen" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import Form from "./components/Form.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Counter,
    Form
  },
  methods: {
    nextScreen() {
      console.log('nextScreen called in App');
    }
  }
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
}
</style>
