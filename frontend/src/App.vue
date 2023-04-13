<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <FormImage msg="Welcome to Your Vue.js App"/>
  <LeafButton text="Click me"/>
</template>

<script>
import FormImage from './components/FormImage.vue';
import LeafButton from './components/LeafButton.vue';

export default {
  name: 'App',
  components: {
    FormImage,
    LeafButton
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
