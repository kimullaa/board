<template>
  <v-card class="mb-2" color="grey lighten-4" hover>
    <v-toolbar card dense @click="changeRoute">
      <card-edit-button :id="item.id"></card-edit-button>
      <v-toolbar-title>
        {{item.title}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon :color="list.color">{{list.icon}}</v-icon>
      <v-btn @click="moveToBoard">
        <v-icon dark class="mr-1">assignment</v-icon>
        取り組む
      </v-btn>
    </v-toolbar>
    <v-card-text v-show="isActive">
      <v-text-field
      disabled
      label="Details"
      multi-line
      v-model="item.details"
      ></v-text-field>
    </v-card-text>
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
      details: String,
      list: Number
    },
    isActive: Boolean
  },
  computed: {
    list () {
      return this.$store.getters.getList(this.item.list)
    }
  },
  methods: {
    moveToBoard: function () {
      this.$store.commit('moveToBoard', this.item.id)
    },
    changeRoute: function () {
      if (this.isActive) {
        this.$router.push(this.$route.path)
      } else {
        this.$router.push(`${this.$route.path}?active=${this.item.id}`)
      }
    }
  },
  components: {
    CardEditButton
  }
}
</script>
