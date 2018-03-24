import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 0,
        list: 0,
        status: 0,
        title: 'sample0',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },
      {
        id: 1,
        list: null,
        status: 1,
        title: 'sample1',
        details: ' yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 2,
        list: 0,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyy',
        priority: 0,
        board: false
      },
      {
        id: 3,
        list: null,
        status: 0,
        title: 'sample3',
        details: 'xxxx \nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },
      {
        id: 4,
        list: 1,
        status: 1,
        title: 'sample4',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 5,
        list: 1,
        status: 1,
        title: 'sample5',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 6,
        list: 1,
        status: 0,
        title: 'sample6',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 7,
        list: 1,
        status: 1,
        title: 'sample7',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 8,
        list: 1,
        status: 1,
        title: 'sample8',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 9,
        list: null,
        status: 0,
        title: 'sample9',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 10,
        list: 0,
        status: 0,
        title: 'sample10',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 11,
        list: 0,
        status: 0,
        title: 'sample11',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 12,
        list: null,
        status: 0,
        title: 'sample12',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 13,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 14,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 15,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 16,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 17,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },

      {
        id: 18,
        list: null,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },

      {
        id: 19,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },

      {
        id: 20,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },

      {
        id: 21,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },

      {
        id: 22,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },

      {
        id: 23,
        list: null,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },

      {
        id: 24,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },

      {
        id: 25,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 26,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 27,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 28,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 29,
        list: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },

      {
        id: 30,
        list: null,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      }
    ],
    statuses: [
      {
        id: 0,
        name: 'TODO',
        color: 'red darken-1'
      },
      {
        id: 1,
        name: 'DOING',
        color: 'lime darken-1'
      },
      {
        id: 2,
        name: 'DONE',
        color: 'grey darken-1'
      }
    ],
    project: {
      name: 'sample project'
    },
    lists: [
      {
        id: 0,
        name: '仕事',
        color: 'blue',
        icon: 'work'
      },
      {
        id: 1,
        name: '家庭',
        color: 'green',
        icon: 'home'
      }
    ]
  },
  getters: {
    dumpAll: state => {
      return state
    },
    getActiveCardByStatus: (state) => (statusId) => {
      return state.cards
      .filter(card => card.status === statusId)
      .filter(card => card.board)
    },
    getActiveCardByStatusAndList: (state) => (statusId, listId) => {
      return state.cards
      .filter(card => card.status === statusId)
      .filter(card => card.list === listId)
      .filter(card => card.board)
    },
    getCards: (state) => (query, list) => {
      return state.cards
      .filter(card => {
        if (query) {
          return card.title.match(query) || card.details.match(query)
        } else {
          return true
        }
      })
      .filter(card => {
        if (!isNaN(list)) {
          return card.list === list
        } else {
          return true
        }
      })
    },
    getCard: (state) => (id) => {
      return state.cards.find(card => card.id === id)
    },
    getList: (state) => (id) => {
      return state.lists.find(list => list.id === id)
    },
    getInitialLane: state => {
      return 0
    },
    getLastLane: state => {
      return 2
    },
    getBeforeCard: (state) => (id) => {
      for (let i = 0; i < state.cards.length - 1; i++) {
        if (state.cards[i + 1].id === id) {
          return state.cards[i]
        }
      }
      return undefined
    }
  },
  mutations: {
    importAll (state, target) {
      for (const prop in target) {
        state[prop] = target[prop]
      }
    },
    changeStatus (state, target) {
      state.cards.find(card => card.id === Number(target.id)).status = Number(target.status)
    },
    // from のカードの優先度を、to の次に設定する
    // toが設定されていなければ、一番上に設定する
    changePriority (state, swap) {
      let sourceIndex
      for (let i = 0; i < state.cards.length; i++) {
        if (state.cards[i].id === swap.from) {
          sourceIndex = i
        }
      }
      const sourceCards = state.cards.splice(sourceIndex, 1)

      let targetIndex

      if (swap.to !== undefined) {
        for (let i = 0; i < state.cards.length; i++) {
          if (state.cards[i].id === swap.to) {
            targetIndex = i
          }
        }
        state.cards.splice(targetIndex + 1, 0, sourceCards[0])
      } else {
        targetIndex = 0
        state.cards.splice(0, 0, sourceCards[0])
      }
    },
    deleteCard (state, id) {
      state.cards.forEach(function (value, index, array) {
        if (value.id === Number(id)) {
          array.splice(index, 1)
        }
      })
    },
    deleteCardByStatus (state, id) {
      state.cards
      .filter(card => card.status === Number(id))
      .filter(card => card.board)
      .forEach(value => state.cards.splice(state.cards.indexOf(value), 1))
    },
    createCard (state, card) {
      state.cards.push({
        id: Math.floor(Math.random() * 10000), // 適当にidふる
        title: card.title,
        details: card.details,
        status: card.status,
        board: card.board,
        list: card.list
      })
    },
    updateCard (state, card) {
      state.cards.find(item => item.id === Number(card.id)).title = card.title
      state.cards.find(item => item.id === Number(card.id)).details = card.details
      state.cards.find(item => item.id === Number(card.id)).list = card.list
    },
    createList (state, list) {
      state.lists.push({
        id: Math.floor(Math.random() * 10000), // 適当にidふる
        name: list.name,
        color: list.color,
        icon: list.icon
      })
    },
    updateList (state, list) {
      state.lists.find(item => item.id === Number(list.id)).name = list.name
      state.lists.find(item => item.id === Number(list.id)).color = list.color
      state.lists.find(item => item.id === Number(list.id)).icon = list.icon
    },
    updateProject (state, project) {
      state.project.name = project.name
    },
    updateLane (state, statuses) {
      statuses.forEach(function (status) {
        state.statuses.find(item => item.id === Number(status.id)).name = status.name
        state.statuses.find(item => item.id === Number(status.id)).color = status.color
      })
    },
    moveToBoard (state, id) {
      state.cards.find(card => card.id === Number(id)).board = true
    },
    moveToBacklog (state, id) {
      state.cards.find(card => card.id === Number(id)).board = false
    },
    deleteList (state, id) {
      state.lists.some((list, index) => {
        if (list.id === Number(id)) {
          state.lists.splice(index, 1)
        }
      })
      state.cards
      .filter(card => card.list === Number(id))
      .forEach((card) => {
        card.list = null
      })
    }
  }
})
