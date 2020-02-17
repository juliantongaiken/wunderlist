<template lang="pug">
  .task-detail-wrapper
    .task-detail-inner(v-if="task")
      .task-detail-toolbar
        input.complete-task-checkbox(type="checkbox")
        h2 Perform Testing
      .task-detail-list
        .task-detail-item
          .task-icon-wrapper
            img.task-icon(src="./assets/calendar.svg")
          .task-detail
            input(type="text" placeholder="Set due date" :value="task.due_date")
        .task-detail-item
          .task-icon-wrapper
            img.task-icon(src="./assets/alarm.svg")
          .task-detail
            input(type="text" placeholder="Remind de" :value="task.reminder")
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
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    task () {
      return this.$store.getters.getCurrentTask
    }
  }
}
</script>

<style lang="scss" scoped>
  .task-detail-wrapper {
    width: 0;
    background: $white;

    &.active {
      width: 280px;

      .task-detail-inner {
        overflow-y: scroll;
      }
    }

    .task-detail-inner {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .task-detail-toolbar {
      height: 55px;
      background: $white;
      display: flex;
      align-items: center;
      padding: 16px 15px 14px 15px;

      .complete-task-checkbox {
        margin-right: 10px;
      }
    }

    .task-detail-list {
      border-top: 1px solid $grey;
      border-bottom: 1px solid $grey;
      background: $light-grey;

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
  }
</style>
