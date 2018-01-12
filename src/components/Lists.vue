<template>
  <v-list>
    <template v-for="list in lists">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon :color="list.color">{{list.icon}}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          {{list.name}}
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon @click="dialog = true; selectedId=list.id">edit</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider></v-divider>
    </template>
    <v-dialog v-model="dialog" max-width="500px">
      <list-edit-form :id="selectedId" v-model="dialog"></list-edit-form>
    </v-dialog>
  </v-list>
</template>

<script>
import ListEditForm from './ListEditForm'

export default {
  name: 'Lists',
  computed: {
    lists () {
      return this.$store.state.lists
    }
  },
  data () {
    return {
      dialog: false,
      selectedId: null
    }
  },
  components: {
    ListEditForm
  }
}
</script>
