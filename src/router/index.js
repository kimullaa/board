import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Config from '@/components/Config'
import Backlog from '@/components/Backlog'
import ConfigLane from '@/components/ConfigLane'
import ConfigProject from '@/components/ConfigProject'

Vue.use(Router)

export default new Router({
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
      component: Config,
      children: [
        {
          path: 'lane',
          name: 'ConfigLane',
          component: ConfigLane
        },
        {
          path: 'project',
          name: 'ConfigProject',
          component: ConfigProject
        }
      ]
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
    }
  ]
})
