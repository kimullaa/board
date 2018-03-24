import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Config from '@/components/Config'
import store from '../store'
import Backlog from '@/components/Backlog'
import AddProject from '@/components/AddProject'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/board/lists'
    },
    {
      path: '/board',
      redirect: '/board/lists'
    },
    {
      path: '/board/lists/:id',
      name: 'Board',
      component: Board,
      props: (route) => ({
        activeCardId: Number(route.query.active),
        activeListId: Number(route.params.id)
      })
    },
    {
      path: '/board/lists',
      name: 'Board',
      component: Board,
      props: (route) => ({
        activeCardId: Number(route.query.active)
      })
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/backlog',
      name: 'Backlog',
      component: Backlog,
      props: (route) => ({
        activeBacklogItemId: Number(route.query.active),
        queryString: route.query.query,
        queryListId: Number(route.query.list)
      })
    },
    {
      path: '/project',
      name: 'AddProject',
      component: AddProject
    }
  ]
})

router.beforeEach((to, from, next) => {
  // プロジェクトが未作成の場合は、作成画面に飛ばす
  if (store.getters.isImported || to.path === '/project') {
    next()
  } else {
    next('/project')
  }
})

export default router
