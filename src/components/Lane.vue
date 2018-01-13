<template>
  <div class="ml-2">
    <v-toolbar :color="color" flat dense class="mb-3">
      <v-badge color="blue">
        <span slot="badge">{{numberofCards}}</span>
        <v-toolbar-title class="white--text">
          {{title}}
        </v-toolbar-title>
      </v-badge>
      <v-spacer></v-spacer>
      <card-add-button :statusId="id" :board="true"></card-add-button>
    </v-toolbar>
    <!-- HACK: Vue.draggableで移動元のstatusを渡すためにstatusのidを埋め込む -->
    <draggable :list="cards" :options="{group:'card'}" @update="changePriority" @add="fromOtherLane" class="cards">
      <template v-for="card in cards">
        <card :key="card.id" :card="card" />
      </template>
    </draggable>
  </div>
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
    id: Number,
    listId: Number
  },
  computed: {
    cards () {
      if (isNaN(this.listId)) {
        return this.$store.getters.getActiveCardByStatus(this.id)
      } else {
        return this.$store.getters.getActiveCardByStatusAndList(this.id, this.listId)
      }
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
.cards {
  height:75vh;
  overflow-y: scroll;
}
</style>
