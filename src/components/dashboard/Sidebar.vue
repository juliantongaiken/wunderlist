<template lang="pug">
  .sidebar
    .toolbar
      a.sidebar-toggler(href="javascript: void(0);")
        img.hamburger-icon(src="./assets/hamburger.svg")
      input.search-input(type="text")
      a.search-btn(href="#")
        img.search-icon(src="./assets/magnify.svg")
        img.cancel-icon(src="./assets/cross.svg")
    .user-toolbar
      a.user(href="#")
        .user-profile
        .user-name
          | Julian Tong
      a.notifications(href="#")
        img(src="./assets/bell.svg")
      a.messages(href="#")
        img(src="./assets/conversation.svg")
    .work-list-wrapper
      WorkList
</template>

<script>
import WorkList from './WorkList.vue'

export default {
  data () {
    return {}
  },
  components: {
    WorkList
  }
}
</script>

<style lang="scss" scoped>
$toolbar-height: 45px;
$user-toolbar-height: 51px;

.sidebar {
  width: 280px;

  .toolbar {
    width: 100%;
    height: $toolbar-height;
    background: $dark-green;
    display: flex;
    align-items: center;

    .sidebar-toggler {
      width: 42px;
      height: $toolbar-height;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search-input {
      width: calc(100% - 84px);
      height: $toolbar-height;
      color: $white;
    }

    .search-btn {
      width: 42px;
      height: $toolbar-height;
      display: flex;
      justify-content: center;
      align-items: center;

      .cancel-icon {
        display: none;
      }
    }
  }

  .user-toolbar {
    width: 100%;
    height: $user-toolbar-height;
    display: flex;
    justify-content: center;
    align-items: center;

    .user {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: calc(100% - 80px);
      padding-left: 5px;
      text-decoration: none;

      .user-profile {
        display: inline-block;
        background: $red;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }

      .user-name {
        display: inline-block;
      }
    }

    .notifications,
    .messages {
      width: 40px;
      ddisplay: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
