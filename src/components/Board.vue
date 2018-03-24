<template>
  <v-layout row wrap>
    <template  v-for="status in statuses">
      <v-flex xs-12 md-4 :key="status.id">
        <lane
        :id="status.id"
        :color="status.color"
        :title="status.name"
        :listId="activeListId"
        :activeCardId="activeCardId"
        ></lane>
      </v-flex>
    </template>
  </v-flex>
  <card-delete-all-button></card-delete-all-button>
</v-layout>
</template>

<script>
import Lane from './Lane.vue'
import CardDeleteAllButton from './CardDeleteAllButton.vue'

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
    CardDeleteAllButton
  }
}
</script>

<style scoped="scoped">
</style>
