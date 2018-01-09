import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 0,
        tags: [0],
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },
      {
        id: 1,
        tags: [],
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 2,
        tags: [0, 1],
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 3,
        tags: [0, 1],
        status: 0,
        title: 'sample1',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 4,
        tags: [0, 1],
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 5,
        tags: [0, 1],
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 6,
        tags: [0, 1],
        status: 0,
        title: 'sample1',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 7,
        tags: [0, 1],
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 8,
        tags: [0, 1],
        status: 1,
        title: 'sample2',
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
    tags: [
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
    getActiveCardByStatus: (state) => (id) => {
      return state.cards
      .filter(card => card.status === id)
      .filter(card => card.board)
    },
    getBacklog: state => {
      return state.cards.filter(card => !card.board)
    },
    getCard: (state) => (id) => {
      return state.cards.find(card => card.id === id)
    },
    getTag: (state) => (id) => {
      return state.tags.find(tag => tag.id === id)
    },
    getInitialLane: state => {
      return 0
    },
    getLastLane: state => {
      return 2
    }
  },
  mutations: {
    changeStatus (state, target) {
      state.cards.find(card => card.id === Number(target.id)).status = Number(target.status)
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
        tags: card.tags
      })
    },
    updateCard (state, card) {
      state.cards.find(item => item.id === Number(card.id)).title = card.title
      state.cards.find(item => item.id === Number(card.id)).details = card.details
      state.cards.find(item => item.id === Number(card.id)).tags = card.tags
    },
    updateTag (state, tag) {
      state.tags.find(item => item.id === Number(tag.id)).name = tag.name
      state.tags.find(item => item.id === Number(tag.id)).color = tag.color
      state.tags.find(item => item.id === Number(tag.id)).icon = tag.icon
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
    }
  }
})
