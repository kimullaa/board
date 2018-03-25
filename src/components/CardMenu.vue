<template>
  <v-menu transition="fade-transition">
    <v-btn icon slot="activator">
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile @click="editDialog = true">
        <v-list-tile-action>
          <v-icon>edit</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          編集する
        </v-list-tile-content>
        <v-dialog v-model="editDialog" max-width="500px">
          <card-edit-form :id="card.id" v-model="editDialog"></card-edit-form>
        </v-dialog>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="moveToBacklog">
        <v-list-tile-action>
          <v-icon>list</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>バックログに戻す</v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="deleteDialog = true">
        <v-list-tile-action>
          <v-icon>delete</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>削除する</v-list-tile-content>
        <v-dialog v-model="deleteDialog" max-width="500px">
          <card-delete :id="card.id" v-model="deleteDialog"></card-delete>
        </v-dialog>
      </v-list-tile>
      <template v-for="status in statuses">
        <v-divider></v-divider>
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
      </template>
    </v-list>
  </v-menu>
</template>

<script>
import CardDelete from './CardDelete.vue'
import CardEditForm from './CardEditForm.vue'

export default {
  name: 'CardMenu',
  props: {
    card: {
      id: String,
      title: String,
      status: Number,
      details: String
    }
  },
  data () {
    return {
      deleteDialog: false,
      editDialog: false
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
    },
    moveToBacklog: function () {
      this.$store.commit('moveToBacklog', this.card.id)
    }
  },
  components: {
    CardDelete,
    CardEditForm
  }
}
</script>
