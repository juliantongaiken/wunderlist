<template lang="pug">
  .dashboard-body
    .dash-toolbar
      label Work
    .dash-content
      .add-todo-wrapper
        img.add-todo-icon(src="./assets/add.svg")
        input.add-todo-input(type="text" @keydown.enter="addTask($event)" placeholder="Add a to-do")
      TaskList
</template>

<script>
import TaskList from './TaskList.vue'

export default {
  data () {
    return {}
  },
  components: {
    TaskList
  },
  methods: {
    addTask (e) {
      this.$store.dispatch('addTask', {
        name: e.target.value
      })
      e.target.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-body {
    width: calc(100% - 280px);
    height: 100vh;
    background: url('./assets/06.jpg');
    background-position: bottom right;

    .dash-toolbar {
      background: $green;
      height: 45px;
      width: 100%;
    }

    .dash-content {
      padding: 10px;

      .add-todo-wrapper {
        position: relative;
        padding-left: 40px;
        height: 47px;
        background: $green;
        border-radius: 3px;

        .add-todo-icon {
          position: absolute;
          width: 20px;
          height: 20px;
          left: 10px;
          top: 50%;
          transform: translate(0, -50%);
        }

        .add-todo-input {
          width: 100%;
          height: 47px;
          color: $white;

          &::placeholder {
            color: $white;
          }
        }
      }
    }
  }
</style>
