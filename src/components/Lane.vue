<template>
  <div>
    <v-toolbar :color="color" flat dense class="mb-3">
      <v-badge color="blue">
        <span slot="badge">{{numberofCards}}</span>
        <v-toolbar-title class="white--text">
          {{title}}
        </v-toolbar-title>
      </v-badge>
      <v-spacer></v-spacer>
      <card-add-button :statusId="id" :listId="listId" :board="true"></card-add-button>
    </v-toolbar>
    <!-- HACK: Vue.draggableで移動元のstatusを渡すためにstatusのidを埋め込む -->
    <draggable :list="cards"
    :options="{group:'cards'}"
    @update="changePriority"
    @add="fromOtherLane"
    class="cards">
      <template v-for="card in cards">
        <card :key="card.id" :card="card" :isActive="card.id === activeCardId"/>
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
    listId: String,
    activeCardId: String
  },
  computed: {
    cards () {
      // リストが選択されていない場合
      if (!this.listId) {
        return this.$store.getters.getActiveCardByStatus(this.id)
      } else {
        // リストが選択されている場合
        return this.$store.getters.getActiveCardByStatusAndList(this.id, this.listId)
      }
    },
    numberofCards () {
      return this.cards.length
    }
  },
  methods: {
    changePriority: function (evt) {
      const sourceId = Number(evt.item.id.split('card-')[1])
      const targetId = this.decideTargetCardId(sourceId)
      if (this.cards.length !== 1) {
        this.$store.commit('changePriority', {
          from: sourceId,
          to: targetId
        })
      }
    },
    decideTargetCardId: function (sourceId) {
      // Draggableで :list を使っているので
      // this.cards の順番はドラッグ直後に変わっているため、扱いに注意する

      let targetId

      // Laneの途中だった場合は、sourceIdの上にある要素を設定する
      for (var i = 0; i < this.cards.length - 1; i++) {
        if (this.cards[i + 1].id === sourceId) {
          targetId = this.cards[i].id
        }
      }

      if (!targetId) {
        // 空のレーンの場合は、順番を入れ替えないように自分自身より一つ優先度の高い要素を設定する
        if (this.cards.length === 1) {
          this.getBeforeCard(this.cards[0].id)

        // Laneの先頭だった場合は、一番上の要素より一つ優先度の高い要素を設定する
        } else {
          this.getBeforeCard(this.cards[1].id)
        }
      } else {
        return targetId
      }
    },
    getBeforeCard: function (id) {
      const card = this.$store.getters.getBeforeCard(id)
      if (card) {
        return card.id
      } else {
        return undefined
      }
    },
    fromOtherLane: function (evt) {
      this.changePriority(evt)
      this.$store.commit('changeStatus', {
        id: evt.item.id.split('card-')[1],
        status: this.id
      })
      this.$router.push(this.$route.path)
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
  /* FIXME: 鷹さ指定が固定幅 */
  height:75vh;
  overflow-y: scroll;
}
</style>
