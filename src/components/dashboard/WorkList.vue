<template lang="pug">
  .work-list(v-if="works")
    .work-item(v-for="(work, index) in works"  @click.capture="changeToWork(index)" :class="[index == currentWorkIndex ? 'active' : '']")
      .work-icon-wrapper
        img.work-icon(src="./assets/work.svg")
      .work-name
        span {{ work.name }}
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

    &.active {
      background: $light-blue;
    }

    .work-icon-wrapper {
      margin-left: 10px;
      margin-right: 8px;
    }
  }
</style>
