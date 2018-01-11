<template>
  <v-layout row wrap @click="$router.push('/board')" class="board">
    <template  v-for="status in statuses">
      <v-flex xs4 :key="status.id">
        <lane :color="status.color" :title="status.name" :id="status.id" />
      </v-flex>
    </template>
    <card-delete-all-button></card-delete-all-button>
    <router-view></router-view>
  </v-layout>
</template>

<script>
import Lane from './Lane.vue'
import CardDeleteAllButton from './CardDeleteAllButton.vue'
import CardDetails from './CardDetails.vue'

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
    CardDeleteAllButton,
    CardDetails
  }
}
</script>

<style scoped="scoped">
.board {
  height: 90vh;
}
</style>
