import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Config from '@/components/Config'
import store from '../store'
import Backlog from '@/components/Backlog'
import Project from '@/components/Project'

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
        activeCardId: route.query.active,
        activeListId: route.params.id
      })
    },
    {
      path: '/board/lists',
      name: 'Board',
      component: Board,
      props: (route) => ({
        activeCardId: route.query.active
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
        activeBacklogItemId: route.query.active,
        queryString: route.query.query,
        queryListId: route.query.list
      })
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    }
  ]
})

router.beforeEach((to, from, next) => {
  // プロジェクトが未作成の場合は、作成画面に飛ばす
  if (store.getters.isImported || to.path === '/project') {
    next()
  } else {
    Vue.toasted.error('プロジェクトが存在しません')
    next('/project')
  }
})

export default router
