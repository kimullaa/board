<template>
  <v-menu transition="fade-transition">
    <v-btn icon slot="activator">
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
      <template v-for="status in statuses">
        <v-list-tile @click="changeStatus(status.id)">
          <v-list-tile-action>
            <v-chip label :color="status.color" text-color="white">
              {{status.name}}
            </v-chip>
          </v-list-tile-action>
          <v-list-tile-content>
            に移動する
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </template>
      <v-list-tile @click="dialog = true">
        <v-list-tile-action>
          <v-icon>delete</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>削除する</v-list-tile-content>
      </v-list-tile>
      <v-dialog v-model="dialog" max-width="500px">
        <card-delete :id="card.id" v-model="dialog"></card-delete>
      </v-dialog>
    </v-list>
  </v-menu>
</template>

<script>
import CardDelete from './CardDelete.vue'

export default {
  name: 'CardMenu',
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
      dialog: false
    }
  },
  computed: {
    statuses () {
      const self = this
      return this.$store.state.statuses.filter(status => status.id !== self.card.status)
    }
  },
  methods: {
    changeStatus: function (statusId) {
      this.$store.commit('changeStatus', {
        id: this.card.id,
        status: statusId
      })
    }
  },
  components: {
    CardDelete
  }
}
</script>
