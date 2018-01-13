<template>
  <!-- HACK: Vue.draggableで移動元のidを渡すためにcardのidを埋め込む -->
  <v-card class="mb-2" color="grey lighten-3" hover :id="`card-${card.id}`">
    <v-toolbar card dense @click.stop="$router.push(`${$route.path}?card=${card.id}`)">
      <v-toolbar-title>
        {{card.title}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon :color="list.color">{{list.icon}}</v-icon>
      <card-menu :card="card"></card-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
import CardMenu from './CardMenu.vue'

export default {
  name: 'Card',
  props: {
    card: {
      id: Number,
      title: String,
      status: Number,
      details: String,
      list: Number
    }
  },
  computed: {
    list () {
      return this.$store.getters.getList(this.card.list)
    }
  },
  components: {
    CardMenu
  }
}
</script>

<style scoped="scoped">
.pre-like {
  white-space: pre-wrap;
}
</style>
