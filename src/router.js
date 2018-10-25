import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import FicheSalarie from './views/FicheSalarie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/salarie/fiche',
      name: 'ficheSalarie',
      component: FicheSalarie
    }
  ]
})
