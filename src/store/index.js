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
      let dt = data
      state.categories = dt
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
      if (params.item.id === undefined || params.item.id === 0) {
        let formData = new FormData()
        formData.append('image', params.item.image)
        formData.append('name', params.item.name)
        formData.append('description', params.item.description)
        formData.append('price', params.item.price)
        formData.append('published', params.item.published)
        formData.append('user_id', context.state.user.id)
        formData.append('category', params.item.category)
        return axios.post(API.createProduct, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'X-Auth': context.state.user.token
          }
        })
          .then(response => {
            if (response.data === true) {
              alert('Product added successfully!')
              axios.get(API.products)
                .then(response => {
                  context.commit('updateAddsList', response.data)
                })
                .catch(e => {
                  console.log(e)
                })
            }
          })
      } else {
        context.state.addsList.forEach(item => {
          if (item.id === params.item.id) {
            item.name = params.item.name
            item.description = params.item.description
            item.price = params.item.price
            item.published = params.item.published
            item.category = params.item.category
            let formData = new FormData()
            formData.append('image', params.item.image)
            formData.append('name', params.item.name)
            formData.append('description', params.item.description)
            formData.append('price', params.item.price)
            formData.append('published', params.item.published)
            formData.append('category', params.item.category)
            return axios.post(API.editProduct + params.item.id, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'X-Auth': context.state.user.token
              }
            })
              .then(response => {
                if (response.data === true || response.data === 1) {
                  if (item.image !== params.item.image) {
                    axios.get(API.products)
                      .then(response => {
                        console.log(context.state.addItem)
                        context.commit('updateAddsList', response.data)
                      })
                      .catch(e => {
                        console.log(e)
                      })
                  }
                  alert('Product edited successfully!')
                }
              })
          }
        })
        context.commit('updateAddsList', context.state.addsList)
      }
    },
    delete (context, params) {
      axios.get(API.deleteProduct + params.id, {
        headers: {
          'X-Auth': context.state.user.token
        }
      })
        .then(response => {
          if (response.data === true || response.data === 1) {
            context.state.addsList.forEach(item => {
              if (item.id === params.id) {
                context.state.addsList.splice(context.state.addsList.indexOf(item), 1)
              }
            })
            alert('Product deleted successfully!')
          }
        })
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
