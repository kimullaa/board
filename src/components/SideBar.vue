<template>
  <v-navigation-drawer fixed clipped v-model="value" app>
    <v-list>
      <v-divider></v-divider>

      <!-- カンバンボード -->
      <v-list-group>
        <v-list-tile :to="{path: '/board'}" slot="item">
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              カンバンボード
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :exact="true" :to="{path: '/board/lists'}">
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              全リスト
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <template v-for="list in lists">
          <v-list-tile :exact="true" :to="{path: `/board/lists/${list.id}`}">
            <v-list-tile-action>
              <v-icon :color="list.color">{{list.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{list.name}}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon @click.stop="editDialog = true; selectedId=list.id">edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
        <v-list-tile @click.stop="addDialog = true">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              リストの追加
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <v-divider></v-divider>
      <!-- end カンバンボード -->

      <v-list-group>
        <v-list-tile :to="{path: '/backlog'}" slot="item">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              バックログ
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>

      <v-divider></v-divider>

      <v-list-group>
        <v-list-tile :to="{path: '/config'}" slot="item">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              システムの設定
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>

      <v-divider></v-divider>
    </v-list>

    <v-dialog v-model="addDialog" max-width="500px">
      <list-add-form v-model="addDialog"></list-add-form>
    </v-dialog>
    <v-dialog v-model="editDialog" max-width="500px">
      <list-edit-form :id="selectedId" v-model="editDialog"></list-edit-form>
    </v-dialog>

  </v-navigation-drawer>
</template>

<script>
import ListEditForm from './ListEditForm'
import ListAddForm from './ListAddForm'

export default {
  name: 'SideBar',
  computed: {
    lists () {
      return this.$store.state.lists
    }
  },
  props: {
    active: Number,
    value: Boolean
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
