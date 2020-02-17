// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({ /* eslint-disable-line no-unused-vars */
  strict: true,
  state: {
    currentWorkIndex: 1,
    currentTaskIndex: null,
    taskDetailOpen: false,
    works: [
      {
        name: 'Aiken Digital',
        tasks: [
          {
            name: 'Get design from designers',
            due_date: '20.02.2020',
            reminder: '20.02.2020',
            subtasks: [],
            note: ''
          }
        ]
      },
      {
        name: 'Mastercard MMX',
        tasks: [
          {
            name: 'Setup Vue Webpack CLI',
            due_date: '19.02.2020',
            reminder: '19.02.2020',
            subtasks: [],
            note: ''
          },
          {
            name: 'Code global stylings',
            due_date: '20.02.2020',
            reminder: '20.02.2020',
            subtasks: [],
            note: ''
          },
          {
            name: 'Code Navigation Bar',
            due_date: '',
            reminder: '',
            subtasks: [],
            note: ''
          }
        ]
      },
      {
        name: 'OrangeClove',
        tasks: []
      },
      {
        name: 'WeCognition',
        tasks: []
      }
    ]
  },
  getters: {
    getWorks: (state) => {
      return state.works
    },
    currentWorkIndex: (state) => {
      return state.currentWorkIndex
    },
    getWorkName: (state) => {
      return state.works[state.currentWorkIndex].name
    },
    getTasks: (state, getters) => {
      return state.works[getters.currentWorkIndex].tasks
    },
    getTaskDueDate: (state, getters) => {
      return state.works[getters.currentWorkIndex].tasks[state.currentTaskIndex].due_date
    },
    getTaskReminder: (state, getters) => {
      return state.works[getters.currentWorkIndex].tasks[state.currentTaskIndex].reminder
    },
    getTaskNote: (state, getters) => {
      return state.works[getters.currentWorkIndex].tasks[state.currentTaskIndex].note
    },
    currentTaskIndex: (state) => {
      return state.currentTaskIndex
    },
    getCurrentTask: (state, getters) => {
      return state.works[getters.currentWorkIndex].tasks[state.currentTaskIndex]
    },
    getTaskDetailOpen: (state) => {
      return state.taskDetailOpen
    }
  },
  mutations: {
    chgCurrentWork (state, workIndex) {
      state.currentWorkIndex = workIndex
      state.currentTaskIndex = null
      state.taskDetailOpen = false
    },
    chgCurrentTask (state, taskIndex) {
      state.currentTaskIndex = taskIndex
    },
    addTask (state, payload) {
      state.works[payload.workIndex].tasks.push(payload.task)
    },
    openTaskDetails (state) {
      state.taskDetailOpen = true
    },
    closeTaskDetail (state) {
      state.taskDetailOpen = false
    },
    setTaskDueDate (state, payload) {
      state.works[payload.workIndex].tasks[payload.taskIndex].due_date = payload.dueDate
    },
    setTaskReminder (state, payload) {
      state.works[payload.workIndex].tasks[payload.taskIndex].reminder = payload.reminder
    },
    setTaskNote (state, payload) {
      state.works[payload.workIndex].tasks[payload.taskIndex].note = payload.note
    },
    deleteTask (state, payload) {
      state.works[payload.workIndex].tasks.splice(payload.taskIndex, 1)
    }
  },
  actions: {
    deleteTask ({ commit, getters }) {
      commit('deleteTask', {
        workIndex: getters.currentWorkIndex,
        taskIndex: getters.currentTaskIndex
      })
    },
    setTaskDueDate ({ commit, getters }, dueDate) {
      commit('setTaskDueDate', {
        workIndex: getters.currentWorkIndex,
        taskIndex: getters.currentTaskIndex,
        dueDate: dueDate
      })
    },
    setTaskReminder ({ commit, getters }, reminder) {
      commit('setTaskReminder', {
        workIndex: getters.currentWorkIndex,
        taskIndex: getters.currentTaskIndex,
        reminder: reminder
      })
    },
    setTaskNote ({ commit, getters }, note) {
      commit('setTaskNote', {
        workIndex: getters.currentWorkIndex,
        taskIndex: getters.currentTaskIndex,
        note: note
      })
    },
    setCurrentWork ({ commit, state }, workIndex) {
      commit('chgCurrentWork', workIndex)
      if (state.works[this.getters.currentWorkIndex].tasks.length < 1) {
        commit('chgCurrentTask', null)
      } else {
        commit('chgCurrentTask', 0)
      }
    },
    setCurrentTask ({ commit }, taskIndex) {
      commit('chgCurrentTask', taskIndex)
      commit('openTaskDetails')
    },
    addTask ({ commit, getters }, task) {
      commit('addTask', {
        workIndex: getters.currentWorkIndex,
        task: task
      })
    },
    closeTaskDetail ({ commit }) {
      commit('closeTaskDetail')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
