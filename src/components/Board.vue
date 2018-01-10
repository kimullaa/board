<template>
  <v-layout row wrap>
    <template  v-for="status in statuses">
      <v-flex xs4 :key="status.id">
        <lane :color="status.color" :title="status.name" :id="status.id" />
      </v-flex>
    </template>
    <card-delete-all-button></card-delete-all-button>
    <card-details :id="id"></card-details>
  </v-layout>
</template>

<script>
import Lane from './Lane.vue'
import CardDetails from './CardDetails.vue'
import CardDeleteAllButton from './CardDeleteAllButton.vue'

export default {
  name: 'Board',
  props: ['id'],
  computed: {
    statuses () {
      return this.$store.state.statuses
    }
  },
  components: {
    Lane,
    CardDetails,
    CardDeleteAllButton
  }
}
</script>
