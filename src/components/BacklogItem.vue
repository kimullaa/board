<template>
  <v-card tile>
    <v-toolbar card dense>
      <v-toolbar-title class="grey--text text--darken-3">{{item.title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <card-edit-button :id="item.id"></card-edit-button>
      <v-btn @click="moveToBoard">
        <v-icon dark class="mr-1">assignment</v-icon>
        取り組む
      </v-btn>
    </v-toolbar>
  </div>
</v-card>
</template>

<script>
import CardEditButton from './CardEditButton.vue'

export default {
  name: 'BacklogItem',
  props: {
    item: {
      id: Number,
      title: String,
      status: Number,
      details: String
    }
  },
  methods: {
    moveToBoard: function () {
      this.$store.commit('moveToBoard', this.item.id)
    }
  },
  components: {
    CardEditButton
  }
}
</script>
