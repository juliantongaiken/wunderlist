<template lang="pug">
  .dashboard(@click="closeTaskDetail")
    Sidebar.sidebar
    DashBody.dash-body#dash-body(:class="[isTaskDetailOpen ? 'active' : '']")
    TaskDetail.task-detail#task-detail(:class="[isTaskDetailOpen ? 'active' : '']")
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
  computed: {
    isTaskDetailOpen () {
      return this.$store.getters.getTaskDetailOpen
    }
  },
  methods: {
    closeTaskDetail (e) {
      var taskDetail = document.getElementById('task-detail')
      if (!taskDetail.contains(e.target)) {
        this.$store.dispatch('closeTaskDetail')
      }
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
