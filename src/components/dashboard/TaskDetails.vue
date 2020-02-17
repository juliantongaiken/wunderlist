<template lang="pug">
  .task-detail-wrapper
    .task-detail-inner(v-if="task")
      .task-detail-toolbar
        input.complete-task-checkbox(type="checkbox")
        h2.task-name {{ task.name }}
      .task-detail-list
        .task-detail-item
          .task-icon-wrapper
            img.task-icon(src="./assets/calendar.svg")
          .task-detail
            input(type="text" placeholder="Set due date" v-model="dueDate")
        .task-detail-item
          .task-icon-wrapper
            img.task-icon(src="./assets/alarm.svg")
          .task-detail
            input(type="text" placeholder="Remind de" v-model="reminder")
        .task-detail-item
          .task-icon-wrapper
            img.task-icon(src="./assets/cross.svg")
          .task-detail
            input(type="text" placeholder="Add a subtask" value="")
        .task-detail-item
          .task-icon-wrapper
            img.task-icon(src="./assets/pencil.svg")
          .task-detail
            input(type="text" placeholder="Add a note..." :value="task.note")
        .task-detail-item
          .task-icon-wrapper
            img.task-icon(src="./assets/paperclip.svg")
          .task-detail
            input(type="text" placeholder="Add a file")
      .task-detail-footer
        a.close-right-btn(href="javascript: void(0);" @click="closeTaskDetail")
          img.close-right-icon(src="./assets/close-right.svg")
        a.delete-task-btn(href="javascript: void(0);" @click="deleteTask")
          img.delete-icon(src="./assets/trash.svg")
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    closeTaskDetail () {
      this.$store.dispatch('closeTaskDetail')
    },
    deleteTask () {
      this.$store.dispatch('deleteTask')
    }
  },
  computed: {
    task () {
      return this.$store.getters.getCurrentTask
    },
    dueDate: {
      get () {
        return this.$store.getters.getTaskDueDate
      },
      set (value) {
        this.$store.dispatch('setTaskDueDate', value)
      }
    },
    reminder: {
      get () {
        return this.$store.getters.getTaskReminder
      },
      set (value) {
        this.$store.dispatch('setTaskReminder', value)
      }
    },
    note: {
      get () {
        return this.$store.getters.getTaskNote
      },
      set (value) {
        this.$store.dispatch('setTaskNote', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .task-detail-wrapper {
    width: 0;
    background: $white;
    padding-bottom: 43px;
    position: relative;
    overflow: hidden;

    &.active {
      width: 280px;
    }

    .task-detail-inner {
      width: 100%;
      height: 100%;
    }

    .task-detail-toolbar {
      min-height: 55px;
      background: $white;
      display: flex;
      align-items: center;
      padding: 16px 15px 14px 15px;

      .complete-task-checkbox {
        margin-right: 10px;
      }

      .task-name {
        margin: 0;
      }
    }

    .task-detail-list {
      border-top: 1px solid $grey;
      border-bottom: 1px solid $grey;
      background: $light-grey;
      height: calc(100vh - 98px);

      .task-detail-item {
        padding: 8px 10px;
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;

        &::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          height: 1px;
          width: calc(100% - 36px);
          background: $grey;
        }

        &:last-child {
          &::after {
            display: none;
          }
        }

        .task-icon-wrapper {
          margin: 6px;

          .task-icon {
            width: 16px;
            height: 16px;
          }
        }
      }
    }

    .task-detail-footer {
      height: 43px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;

      .delete-task-btn {
        .delete-icon {
          width: 20px;
          height: 20px;
        }
      }

      .close-right-btn {
        .close-right-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
</style>
