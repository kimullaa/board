<template>
  <!-- HACK: Vue.draggableで移動元のidを渡すためにcardのidを埋め込む -->
  <v-card
  class="grey lighten-4 mb-2"
  hover
  :id="`card-${card.id}`"
  >
    <v-toolbar
    card
    dense
    @click.stop="changeRoute"
    >
      <v-toolbar-title>
        {{card.title}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon :color="list.color">{{list.icon}}</v-icon>
      <card-menu :card="card"></card-menu>
    </v-toolbar>
    <v-card-text v-show="isActive">
      <v-text-field
      disabled
      label="Details"
      multi-line
      v-model="card.details"
      ></v-text-field>
    </v-card-text>
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
    },
    isActive: false
  },
  computed: {
    list () {
      return this.$store.getters.getList(this.card.list)
    }
  },
  methods: {
    changeRoute: function () {
      if (this.isActive) {
        this.$router.push(this.$route.path)
      } else {
        this.$router.push(`${this.$route.path}?card=${this.card.id}`)
      }
    }
  },
  components: {
    CardMenu
  }
}
</script>

<style scoped="scoped">
</style>
