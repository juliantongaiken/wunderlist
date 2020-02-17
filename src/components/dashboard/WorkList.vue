<template lang="pug">
  .work-list(v-if="works")
    .work-item(v-for="(work, index) in works"  @click.capture="changeToWork(index)" :class="[index == currentWorkIndex ? 'active' : '']")
      .work-icon-wrapper
        img.work-icon(src="./assets/work.svg")
      .work-name
        label.work-name-display {{ work.name }}
        input.work-name-rename(type="text")
      .task-count-wrapper
        span.task-count {{ work.tasks.length }}
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    works () {
      return this.$store.getters.getWorks
    },
    currentWorkIndex () {
      return this.$store.getters.currentWorkIndex
    }
  },
  methods: {
    changeToWork (index) {
      this.$store.dispatch('setCurrentWork', index)
    },
    toggleWorkRename () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .work-item {
    display: flex;
    width: 100%;
    padding: 5px 0;
    cursor: pointer;
    position: relative;

    &.active {
      background: $light-blue;
    }

    .work-icon-wrapper {
      margin-left: 10px;
      margin-right: 8px;
    }

    .work-name {
      .work-name-rename {
        display: none;
      }
    }

    .task-count-wrapper {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translate(0, -50%);
      width: 19px;
      height: 19px;
      background: $red;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 10px;
    }
  }
</style>
