<template>
  <v-menu transition="fade-transition">
    <v-btn icon slot="activator">
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile @click.stop="editDialog = true">
        <v-list-tile-action>
          <v-icon>edit</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          編集する
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click.stop="deleteDialog = true">
        <v-list-tile-action>
          <v-icon>delete</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          削除する
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-dialog v-model="editDialog" max-width="500px">
      <list-edit-form :id="id" v-model="editDialog"></list-edit-form>
    </v-dialog>
    <v-dialog v-model="deleteDialog" max-width="500px">
      <list-delete :id="id"/>
    </v-dialog>
  </v-menu>
</template>

<script>
import ListDelete from './ListDelete'
import ListEditForm from './ListEditForm'

export default {
  name: 'ListMenu',
  props: {
    id: String
  },
  data () {
    return {
      editDialog: false,
      deleteDialog: false
    }
  },
  components: {
    ListDelete,
    ListEditForm
  }
}
</script>
