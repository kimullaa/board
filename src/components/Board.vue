<template>
  <v-layout row wrap @click="changeRoute" class="board">
    <v-flex xs12>
      <lists-tab :id="activeListId"></lists-tab>
    </v-flex>
    <template  v-for="status in statuses">
      <v-flex xs4 :key="status.id">
        <lane :color="status.color" :title="status.name" :id="status.id" />
      </v-flex>
    </template>
    <card-delete-all-button></card-delete-all-button>
    <card-details :id="activeCardId" v-if="activeCardId"></card-details>
  </v-layout>
</template>

<script>
import Lane from './Lane.vue'
import CardDeleteAllButton from './CardDeleteAllButton.vue'
import CardDetails from './CardDetails.vue'
import ListsTab from './ListsTab.vue'

export default {
  name: 'Board',
  props: ['activeListId', 'activeCardId'],
  computed: {
    statuses () {
      return this.$store.state.statuses
    }
  },
  components: {
    Lane,
    CardDeleteAllButton,
    CardDetails,
    ListsTab
  },
  methods: {
    changeRoute: function () {
      const self = this
      if (isNaN(this.activeListId)) {
        self.$router.push('/board')
      } else {
        self.$router.push(`/board?list=${self.activeListId}`)
      }
    }
  }
}
</script>

<style scoped="scoped">
.board {
  height: 90vh;
}
</style>
