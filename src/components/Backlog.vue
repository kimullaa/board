<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-toolbar
      color="grey darken-2"
      flat
      dense
      >
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

    <template v-if="queryString || list">
      <span v-if="queryString">
        絞り込み: 「{{queryString}}」
      </span>
      <span v-if="list">
        リスト: 「<v-icon :color="list.color">{{list.icon}}</v-icon>」
      </span>
      <v-btn icon @click="$router.push('/backlog')">
        <v-icon>clear</v-icon>
      </v-btn>
    </template>

    <draggable
    :list="backlogs"
    class="backlogs mt-3"
    :options="{group:'backlogs'}"
    @update="changePriority"
    >
      <template v-for="backlog in backlogs">
        <backlog-item
        :key="backlog.id"
        :item="backlog"
        :isActive="activeBacklogItemId === backlog.id" />
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
    activeBacklogItemId: String,
    queryString: String,
    queryListId: String
  },
  computed: {
    list () {
      if (this.queryListId !== undefined) {
        return this.$store.getters.getList(this.queryListId)
      } else {
        return undefined
      }
    },
    backlogs () {
      return this.$store.getters.getCards(this.queryString, this.queryListId)
    },
    statusId () {
      return this.$store.getters.getInitialLane
    },
    numberofBacklogs () {
      return this.backlogs.length
    }
  },
  methods: {
    changePriority: function (evt) {
      // Draggableで :list を使っているので
      // this.cards の順番はドラッグ直後に変わっているため、扱いに注意する
      const sourceId = this.backlogs[evt.newIndex].id
      const targetId = this.desideTargetCardId(sourceId)

      this.$store.commit('changePriority', {
        from: sourceId,
        to: targetId
      })
    },
    desideTargetCardId: function (sourceId) {
      let targetId
      for (var i = 0; i < this.backlogs.length - 1; i++) {
        if (this.backlogs[i + 1].id === sourceId) {
          targetId = this.backlogs[i].id
        }
      }
      return targetId
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
