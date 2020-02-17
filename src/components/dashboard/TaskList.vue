<template lang="pug">
  .tasklist(v-if="tasks.length > 0")
    .task-item(v-for="(task, index) in tasks" :class="[currentTaskIndex !== false && currentTaskIndex === index ? 'active' : '']" :key="'task-'+index" v-on:dblclick="viewTaskDetails(index)")
      input.task-item-checkbox(type="checkbox")
      label.task-item-name {{ task.name }}
  .no-task-msg(v-else) No tasks inserts yet.
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    tasks () {
      return this.$store.getters.getTasks
    },
    currentTaskIndex () {
      return this.$store.getters.currentTaskIndex
    }
  },
  methods: {
    viewTaskDetails (taskIndex) {
      this.$store.dispatch('setCurrentTask', taskIndex)
      this.$parent.$emit('open-task-detail')
    }
  }
}
</script>

<style lang="scss" scoped>
  .tasklist {
    margin-top: 10px;

    .task-item {
      border-radius: 3px;
      background: $white;
      padding: 10px;
      display: flex;
      align-items: center;
      margin-bottom: 2px;
      cursor: pointer;

      &.active {
        background: $light-blue;
      }

      .task-item-checkbox {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        padding: 0;
      }

      .task-item-name {
        line-height: 20px;
      }
    }
  }

  .no-task-msg {
    color: $white;
    background: $green;
    padding: 5px 15px;
    display: inline-block;
    margin-top: 10px;
    border-radius: 3px;
  }
</style>
