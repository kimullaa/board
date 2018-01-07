<template>
  <!-- HACK: Vue.draggableで移動元のidを渡すためにcardのidを埋め込む -->
  <v-layout row :id="`card-${card.id}`">
    <v-flex xs12>
      <v-card class="mb-2" color="grey lighten-3" hover>
        <v-toolbar card dense>
          <v-toolbar-title>{{card.title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <card-edit-button :id="card.id"></card-edit-button>
          <card-menu :card="card"></card-menu>
        </v-toolbar>
      </div>
      <v-divider></v-divider>
      <v-card-text class="pre-like">{{card.details}}</v-card-text>
    </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import CardMenu from './CardMenu.vue'
import CardEditButton from './CardEditButton.vue'

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
  data () {
    return {
    }
  },
  components: {
    CardMenu,
    CardEditButton
  }
}
</script>

<style scoped="scoped">
.pre-like {
  white-space: pre-wrap;
}
</style>
