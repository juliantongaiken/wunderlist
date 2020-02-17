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
    works: [
      {
        name: 'Aiken Digital',
        tasks: []
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
    getTasks: (state, getters) => {
      return state.works[getters.currentWorkIndex].tasks
    },
    currentTaskIndex: (state) => {
      return state.currentTaskIndex
    },
    getCurrentTask: (state, getters) => {
      return state.works[getters.currentWorkIndex].tasks[state.currentTaskIndex]
    }
  },
  mutations: {
    chgCurrentWork (state, workIndex) {
      state.currentWorkIndex = workIndex
    },
    chgCurrentTask (state, taskIndex) {
      state.currentTaskIndex = taskIndex
    },
    addTask (state, payload) {
      state.works[payload.workIndex].tasks.push(payload.task)
    }
  },
  actions: {
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
    },
    addTask ({ commit, getters }, task) {
      commit('addTask', {
        workIndex: getters.currentWorkIndex,
        task: task
      })
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
