<template lang="pug">
  #app
    Dashboard
</template>

<script>
import Dashboard from './Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato","Geneva CY","Lucida Grande","Arial Unicode MS","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: $black;

  * {
    box-sizing: border-box;
  }
}

input[type="text"] {
  border: 0;
  background: transparent;

  &:focus {
    outline: none;
  }
}
</style>
