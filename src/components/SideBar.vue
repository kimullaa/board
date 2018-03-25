<template>
  <v-navigation-drawer
  fixed
  clipped
  disable-route-watcher
  v-model="drawer"
  app>
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
        <v-list-tile exact :to="{path: '/board/lists'}">
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
          <v-list-tile  :to="{path: `/board/lists/${list.id}`}" >
            <v-list-tile-action>
              <v-icon :color="list.color">{{list.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{list.name}}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <list-menu :id="list.id" />
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
              設定
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>

      <v-divider></v-divider>
      <v-list-group>
        <v-list-tile slot="item" :to="{path: '/project'}">
          <v-list-tile-action>
            <v-icon>folder</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              プロジェクト
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <v-divider></v-divider>

    </v-list>

    <v-dialog v-model="addDialog" max-width="500px">
      <list-add-form v-model="addDialog"></list-add-form>
    </v-dialog>

  </v-navigation-drawer>
</template>

<script>
import ListAddForm from './ListAddForm'
import ListMenu from './ListMenu'

export default {
  name: 'SideBar',
  computed: {
    lists () {
      return this.$store.state.lists
    }
  },
  watch: {
    value: function () {
      this.drawer = this.value
    },
    drawer: function () {
      this.$emit('input', this.drawer)
    }
  },
  props: {
    active: Number,
    value: Boolean
  },
  data () {
    return {
      addDialog: false,
      drawer: null
    }
  },
  components: {
    ListAddForm,
    ListMenu
  }
}
</script>
