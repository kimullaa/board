<template>
  <!-- HACK: Vue.draggableで移動元のidを渡すためにcardのidを埋め込む -->
  <v-card
  class="grey lighten-4 mb-2 mr-2 ml-2"
  hover
  :id="`card-${card.id}`"
  >

  <v-container
  class="slim"
  @click.stop="changeRoute"
  >
    <v-layout row align-center>
      <v-flex xs11>
        <v-card-title
        class="title slim"
        >
        {{card.title}}
      </v-card-title>
    </v-flex>
    <v-flex>
      <v-card-actions class="slim">
        <v-spacer></v-spacer>
        <v-icon v-if="list" :color="list.color">{{list.icon}}</v-icon>
        <card-menu @click.native.stop :card="card"></card-menu>
      </v-card-actions>
    </v-flex>
  </v-layout>

  <v-layout row>
    <v-flex xs12>
      <v-card-text v-show="isActive">
        <v-text-field
        disabled
        label="Details"
        multi-line
        v-model="card.details"
        ></v-text-field>
      </v-card-text>
    </v-flex>
  </v-layout>
</v-container>
</v-card>

</template>

<script>
import CardMenu from './CardMenu.vue'

export default {
  name: 'Card',
  props: {
    card: {
      id: String,
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
        this.$router.push({query: {active: this.card.id}})
      }
    }
  },
  components: {
    CardMenu
  }
}
</script>

<style scoped="scoped">
.slim {
  padding-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 3px
}
</style>
