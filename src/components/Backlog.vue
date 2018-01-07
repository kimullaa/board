<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar  color="grey darken-2" flat dense class="mb-1">
          <v-toolbar-title class="white--text">
            バックログ
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <card-add-button :statusId="0" :board="false"></card-add-button>
        </v-toolbar-title>
      </v-toolbar>
      <draggable :list="backlogs">
        <template v-for="backlog in backlogs">
          <backlog-item :key="backlog.id" :item="backlog" />
        </template>
      </draggable>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import draggable from 'vuedraggable'
import BacklogItem from './BacklogItem.vue'
import CardAddButton from './CardAddButton.vue'

export default {
  name: 'Backlog',
  computed: {
    backlogs () {
      return this.$store.getters.getBacklog
    },
    statusId () {
      return this.$store.getters.getInitialLane
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  components: {
    BacklogItem,
    draggable,
    CardAddButton
  }
}
</script>
