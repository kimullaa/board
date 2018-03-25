import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v4'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
    ],
    project: {
    },
    lists: [
    ]
  },
  plugins: [createPersistedState()],
  getters: {
    isImported: (state) => {
      return state.project.name !== undefined
    },
    isValidFormat: (state) => (json) => {
      var isValid = true
      for (let prop in state) {
        isValid = isValid && json.hasOwnProperty(prop)
      }
      return isValid
    },
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
          return query.match(card.title) || query.match(card.details)
        } else {
          return true
        }
      })
      .filter(card => {
        if (list) {
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
      state.cards.find(card => card.id === target.id).status = Number(target.status)
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
        if (value.id === id) {
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
        id: uuid(),
        title: card.title,
        details: card.details,
        status: card.status,
        board: card.board,
        list: card.list
      })
    },
    updateCard (state, card) {
      state.cards.find(item => item.id === card.id).title = card.title
      state.cards.find(item => item.id === card.id).details = card.details
      state.cards.find(item => item.id === card.id).list = card.list
    },
    createList (state, list) {
      state.lists.push({
        id: uuid(),
        name: list.name,
        color: list.color,
        icon: list.icon
      })
    },
    updateList (state, list) {
      state.lists.find(item => item.id === list.id).name = list.name
      state.lists.find(item => item.id === list.id).color = list.color
      state.lists.find(item => item.id === list.id).icon = list.icon
    },
    updateProject (state, project) {
      state.project.name = project.name
    },
    updateLane (state, statuses) {
      statuses.forEach(function (status) {
        state.statuses.find(item => item.id === status.id).name = status.name
        state.statuses.find(item => item.id === status.id).color = status.color
      })
    },
    moveToBoard (state, id) {
      state.cards.find(card => card.id === id).board = true
    },
    moveToBacklog (state, id) {
      state.cards.find(card => card.id === id).board = false
    },
    deleteList (state, id) {
      state.lists.some((list, index) => {
        if (list.id === id) {
          state.lists.splice(index, 1)
        }
      })
      state.cards
      .filter(card => card.list === id)
      .forEach((card) => {
        card.list = null
      })
    }
  }
})
