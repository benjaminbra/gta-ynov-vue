import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import FicheSalarie from './views/FicheSalarie'
import PlanningSalarie from './views/PlanningSalarie'
import DemandeSalarie from './views/DemandeSalarie'
import NotFound from './views/NotFound'

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
    },
    {
      path: '/salarie/planning',
      name: 'planningSalarie',
      component: PlanningSalarie
    },
    {
      path: '/salarie/demande',
      name: 'demandeSalarie',
      component: DemandeSalarie
    },
    {
      path: '/*',
      name: '404',
      component: NotFound
    }
  ]
})
