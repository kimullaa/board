<template>
  <v-navigation-drawer fixed clipped app>
    <v-list>
      <v-divider></v-divider>
      <v-list-tile
      avatar
      @click.stop="$router.push('/board')"
      :class="{active: isActive()}"
      >
      <v-list-tile-avatar>
      </v-list-tile-avatar>
      <v-list-tile-content>
        全リスト
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
    <template v-for="list in lists">
      <v-list-tile
      avatar
      :class="{active: isActive(list.id)}"
      @click.stop="$router.push(`/board?list=${list.id}`)"
      >
      <v-list-tile-avatar>
        <v-icon :color="list.color">{{list.icon}}</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        {{list.name}}
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon @click.stop="editDialog = true; selectedId=list.id">edit</v-icon>
      </v-list-tile-action>
    </v-list-tile>
    <v-divider></v-divider>
  </template>

      <v-list-tile
      avatar
      @click.stop="addDialog = true"
      >
      <v-list-tile-avatar>
        <v-icon>add</v-icon>
      </v-list-tile-avatar>
      <v-list-tile-content>
        リストの追加
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>

  <v-dialog v-model="addDialog" max-width="500px">
    <list-add-form v-model="addDialog"></list-add-form>
  </v-dialog>
  <v-dialog v-model="editDialog" max-width="500px">
    <list-edit-form :id="selectedId" v-model="editDialog"></list-edit-form>
  </v-dialog>
</v-list>
</v-navigation-drawer>
</template>

<script>
import ListEditForm from './ListEditForm'
import ListAddForm from './ListAddForm'

export default {
  name: 'Lists',
  computed: {
    lists () {
      return this.$store.state.lists
    }
  },
  props: {
    active: Number
  },
  data () {
    return {
      editDialog: false,
      addDialog: false,
      selectedId: null
    }
  },
  methods: {
    isActive (id) {
      if (id !== undefined) {
        return this.active === id
      } else {
        if (isNaN(this.active)) {
          return true
        } else {
          return false
        }
      }
    }
  },
  components: {
    ListEditForm,
    ListAddForm
  }
}
</script>

<style scoped="scoped">
.active {
  background-color: #d9ecff;
}
</style>
