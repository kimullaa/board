<template>
  <v-layout row wrap @click="changeRoute">
    <lists :active="activeListId"></lists>
      <v-layout row wrap>
        <template  v-for="status in statuses">
          <v-flex xs4 :key="status.id">
            <lane :color="status.color" :title="status.name" :id="status.id" :listId="activeListId" />
          </v-flex>
        </template>
      </v-layout>
  </v-flex>
  <card-delete-all-button></card-delete-all-button>
  <card-details :id="activeCardId" v-if="activeCardId"></card-details>
</v-layout>
</template>

<script>
import Lane from './Lane.vue'
import CardDeleteAllButton from './CardDeleteAllButton.vue'
import CardDetails from './CardDetails.vue'
import Lists from './Lists.vue'

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
    Lists
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
</style>
