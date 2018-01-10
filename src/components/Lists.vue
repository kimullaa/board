<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title class="headline">タグ一覧</v-card-title>
          <v-card-text>
            <v-chip :key="list.id" v-for="list in lists"  @click="dialog = true; selectedId=list.id">
              {{list.name}}
              <v-icon :color="list.color" class="ml-3">{{list.icon}}</v-icon>
              <v-dialog v-model="dialog" max-width="500px">
                <list-edit-form :id="selectedId" v-model="dialog"></list-edit-form>
              </v-dialog>
            </v-chip>
          </v-card-text>
        </v-card>
    </v-flex>
  </v-layout>
</v-container>
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
