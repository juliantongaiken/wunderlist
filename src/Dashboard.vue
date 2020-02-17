<template lang="pug">
  .dashboard(@toggleTaskDetail="toggleTaskDetail")
    Sidebar.sidebar
    DashBody.dash-body#dash-body
    TaskDetail.task-detail.active#task-detail
</template>

<script>
import Sidebar from './components/dashboard/Sidebar.vue'
import DashBody from './components/dashboard/DashBody.vue'
import TaskDetail from './components/dashboard/TaskDetails.vue'

export default {
  data () {
    return {
      taskDetailOpen: false
    }
  },
  components: {
    Sidebar,
    DashBody,
    TaskDetail
  },
  methods: {
    toggleTaskDetail () {
      var dashBody = document.getElementById('dash-body')
      var taskDetail = document.getElementById('task-detail')

      dashBody.classList.toggle('active')
      taskDetail.classList.toggle('active')
      this.taskDetailOpen = !this.taskDetailOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100vh;
  display: flex;

  .sidebar {
    height: 100vh;
  }

  .dash-body {
    width: calc(100% - 280px);

    &.active {
      width: calc(100% - 540px);
    }
  }

  .task-detail {
    height: 100vh;
  }
}
</style>
