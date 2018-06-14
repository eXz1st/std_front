import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import API from './api'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    addsList: {
      type: Array,
      required: true
    },
    addItem: {},
    arrayCategories: [],
    user: {},
    isAuth: false,
    withCredentials: true,
    pageNumber: 0,
    size: 10
  },
  mutations: {
    updateAddsList (state, data) {
      state.addsList = data
    },
    updateAddItem (state, data) {
      state.addItem = data
    },
    updateCategories (state, data) {
      data.forEach(element => {
        state.arrayCategories.push(element.name)
      })
    },
    updateAuth (state, data) {
      state.isAuth = data
    },
    updateUser (state, data) {
      state.user = data
    }
  },
  actions: {
    setList (context, params) {
      context.commit('updateAddsList', params.data)
    },
    setCategoriesList (context, params) {
      context.commit('updateCategories', params.data)
    },
    loadById (context, params) {
      context.state.addsList.forEach(item => {
        if (item.id === params.id) {
          let editedItem = {}
          Object.assign(editedItem, item)
          context.commit('updateAddItem', editedItem)
        }
      })
    },
    save (context, params) {
      context.state.addsList.forEach(item => {
        if (item.id === params.item.id) {
          item.name = params.item.name
        }
      })

      context.commit('updateAddsList', context.state.addsList)
    },
    login (context, params) {
      return axios.post(API.login, params, context.state.withCredentials)
        .then(response => {
          context.commit('updateUser', response.data)
          context.commit('updateAuth', true)
        })
    },
    logout (context) {
      return axios.post(API.logout, {'token': context.state.user.token}, this.withCredentials)
        .then(response => {
          context.commit('updateUser', {})
          context.commit('updateAuth', false)
        })
    },
    register (context, params) {
      return axios.post(API.register, params, context.state.withCredentials)
        .then(response => {
          alert('Your profile was successfully created, please login')
        })
    }
  }
})

export default Store
