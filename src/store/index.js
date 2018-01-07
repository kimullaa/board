import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 0,
        status: 0,
        title: 'sample1',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
      },
      {
        id: 1,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
      },
      {
        id: 2,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
      },
      {
        id: 3,
        status: 0,
        title: 'sample1',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
      },
      {
        id: 4,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
      },
      {
        id: 5,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
      },
      {
        id: 6,
        status: 0,
        title: 'sample1',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
      },
      {
        id: 7,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
      },
      {
        id: 8,
        status: 1,
        title: 'sample2',
        details: 'xxxx xxxx\nyy yyyyyyyyy\nzzzzzzzzzzzz',
        priority: 0
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
    ]
  },
  getters: {
    getCardByStatus: (state) => (id) => {
      return state.cards.filter(card => card.status === id)
    },
    getCard: (state) => (id) => {
      return state.cards.find(card => card.id === id)
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
      .forEach(value => state.cards.splice(state.cards.indexOf(value), 1))
    },
    createCard (state, card) {
      state.cards.push({
        id: Math.floor(Math.random() * 10000), // 適当にidふる
        title: card.title,
        details: card.details,
        status: card.status
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
    }
  }
})
