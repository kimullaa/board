<template>
  <v-card
  class="mb-2 mr-2"
  color="grey lighten-4"
  hover
  >

    <v-container
    class="slim"
    @click.stop="changeRoute"
    >
      <v-layout row align-center>
        <v-flex xs10>
          <v-card-title
          class="title slim"
          >
          <card-edit-button class="slim-btn" @click.native.stop :id="item.id"></card-edit-button>
          {{item.title}}
        </v-card-title>
      </v-flex>
      <v-flex xs-2>
        <v-card-actions class="slim">
          <v-spacer></v-spacer>
          <v-icon v-if="list" :color="list.color">{{list.icon}}</v-icon>
          <v-btn @click.native.stop="moveToBoard">
            <v-icon dark class="mr-1">assignment</v-icon>
            取り組む
          </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-card-text
        v-show="isActive"
        >
          <v-text-field
          disabled
          label="Details"
          multi-line
          v-model="item.details"
          ></v-text-field>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
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
      var queries = Object.assign({}, this.$route.query)
      if (this.isActive) {
        // 検索条件が消えないように、現在のqueryからactiveだけ取り除く
        delete queries['active']
        this.$router.push({query: queries})
      } else {
        // 検索条件が消えないように、現在のqueryに混ぜ込む
        queries.active = this.item.id
        this.$router.push({query: queries})
      }
    }
  },
  components: {
    CardEditButton
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
.slim-btn {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
