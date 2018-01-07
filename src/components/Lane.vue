<template>
  <v-container fluid>
    <v-toolbar :color="color" flat dense class="mb-3">
      <v-badge color="blue">
        <span slot="badge">{{numberofCards}}</span>
        <v-toolbar-title class="white--text">
          {{title}}
        </v-toolbar-title>
      </v-badge>
      <v-spacer></v-spacer>
      <card-add-button :statusId="id"></card-add-button>
    </v-toolbar>
    <!-- HACK: Vue.draggableで移動元のstatusを渡すためにstatusのidを埋め込む -->
    <draggable :list="cards" :options="{group:'card'}" @update="changePriority" @add="fromOtherLane" class="lane">
      <template v-for="card in cards">
        <card :key="card.id" :card="card" />
      </template>
    </draggable>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
import Card from './Card.vue'
import CardAddButton from './CardAddButton.vue'

export default {
  name: 'Lane',
  props: {
    color: String,
    title: String,
    id: Number
  },
  computed: {
    cards () {
      return this.$store.getters.getCardByStatus(this.id)
    },
    numberofCards () {
      return this.cards.length
    }
  },
  methods: {
    changePriority: function (evt) {
      console.log('change priority')
    },
    fromOtherLane: function (evt) {
      this.$store.commit('changeStatus', {
        id: evt.item.id.split('card-')[1],
        status: this.id
      })
    }
  },
  components: {
    Card,
    draggable,
    CardAddButton
  }
}
</script>

<style scoped="scoped">
.lane {
  min-height: 100px
}
</style>
