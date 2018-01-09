<template>
  <!-- HACK: Vue.draggableで移動元のidを渡すためにcardのidを埋め込む -->
  <v-layout row :id="`card-${card.id}`">
    <v-flex xs12>
      <v-card class="mb-2" color="grey lighten-3" hover>
        <v-toolbar card dense>
          <v-toolbar-title>{{card.title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon :key="tag.id" v-for="tag in tags">{{tag.icon}}</v-icon>
          <card-menu :card="card"></card-menu>
        </v-toolbar>
      </v-card>
    </v-flex>
  </v-layout>
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
      details: String
    }
  },
  computed: {
    tags () {
      return this.$store.state.tags.filter(tag => this.card.tags.includes(tag.id))
    }
  },
  data () {
    return {
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
