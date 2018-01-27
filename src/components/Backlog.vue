<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-toolbar  color="grey darken-2" flat dense class="mb-3">
        <v-badge color="blue">
          <span slot="badge">{{numberofBacklogs}}</span>
          <v-toolbar-title class="white--text">
            バックログ
          </v-toolbar-title>
        </v-badge>
        <v-spacer></v-spacer>
        <card-add-button :statusId="0" :board="false"></card-add-button>
      </v-toolbar-title>
    </v-toolbar>
    <draggable :list="backlogs" class="backlogs">
      <template v-for="backlog in backlogs">
        <backlog-item :key="backlog.id" :item="backlog" :isActive="activeBacklogItemId === backlog.id" />
      </template>
    </draggable>
  </v-flex>
  <backlog-item-search></backlog-item-search>
</v-layout>
</template>

<script>
import draggable from 'vuedraggable'
import BacklogItem from './BacklogItem'
import CardAddButton from './CardAddButton'
import BacklogItemSearch from './BacklogItemSearch'

export default {
  name: 'Backlog',
  props: {
    activeBacklogItemId: Number
  },
  computed: {
    backlogs () {
      return this.$store.getters.getBacklog
    },
    statusId () {
      return this.$store.getters.getInitialLane
    },
    numberofBacklogs () {
      return this.backlogs.length
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
    CardAddButton,
    BacklogItemSearch
  }
}
</script>

<style scoped="scoped">
.backlogs {
  /* FIXME: 鷹さ指定が固定幅 */
  height:70vh;
  overflow-y: scroll;
}
</style>
