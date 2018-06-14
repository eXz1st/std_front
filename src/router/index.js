import Vue from 'vue'
import Router from 'vue-router'
import AddsList from '@/components/AddsList'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AddForm from '@/components/AddForm'
import ProductPage from '@/components/ProductPage'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/page/1',
      name: 'Index'
    },
    {
      path: '/page/:id(\\d+)',
      name: 'AddsList',
      component: AddsList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/add',
      name: 'AddForm',
      component: AddForm
    },
    {
      path: '/:id(\\d+)',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})
