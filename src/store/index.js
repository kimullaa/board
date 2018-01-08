import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 0,
        type: 0,
        status: 0,
        title: 'sampleX',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: false
      },
      {
        id: 1,
        type: 0,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 2,
        type: 0,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 3,
        status: 0,
        title: 'sample1',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 4,
        type: 0,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 5,
        type: 0,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 6,
        type: 1,
        status: 0,
        title: 'sample1',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 7,
        type: 1,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0,
        board: true
      },
      {
        id: 8,
        type: 1,
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
    types: [
      {
        id: 0,
        name: 'Story'
      },
      {
        id: 1,
        name: 'Task'
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
    getInitialLane: state => {
      return 0
    },
    getLastLane: state => {
      return 2
    },
    getDefaultType: state => {
      return 0
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
        type: card.type
      })
    },
    updateCard (state, card) {
      state.cards.find(item => item.id === Number(card.id)).title = card.title
      state.cards.find(item => item.id === Number(card.id)).details = card.details
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
