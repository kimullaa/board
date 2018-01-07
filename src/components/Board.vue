<template>
  <v-layout row wrap>
    <template  v-for="status in statuses">
      <v-flex xs4>
        <lane :color="status.color" :title="status.name" :id="status.id" />
      </v-flex>
    </template>
    <card-delete-all-button></card-delete-all-button>
  </v-layout>
</template>

<script>
import Lane from './Lane.vue'
import CardDeleteAllButton from './CardDeleteAllButton.vue'

export default {
  name: 'Board',
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
