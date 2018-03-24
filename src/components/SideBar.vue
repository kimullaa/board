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
        <v-list-tile exact :class="{active: $route.path === '/board/lists'}" :to="{path: '/board/lists'}">
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
          <v-list-tile active-class="active" :to="{path: `/board/lists/${list.id}`}" >
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
        <v-list-tile active-class="active" :to="{path: '/config'}" slot="item">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              プロジェクトの設定
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile :to="{path: '/project'}">
          <v-list-tile-action>
            <v-icon>add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              新規作成
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile @click="importData">
          <v-list-tile-action>
            <v-icon>input</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              インポート
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile @click="exportData">
          <v-list-tile-action>
            <v-icon>save</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              エクスポート
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
import ListEditForm from './ListEditForm'
import ListAddForm from './ListAddForm'
import ListMenu from './ListMenu'

export default {
  name: 'SideBar',
  computed: {
    lists () {
      return this.$store.state.lists
    },
    project () {
      return this.$store.state.project
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
    ListEditForm,
    ListAddForm,
    ListMenu
  },
  methods: {
    exportData: function () {
      var all = this.$store.getters.dumpAll
      var blob = new Blob([JSON.stringify(all)], {type: 'application/json'})
      var a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.target = '_blank'
      a.download = this.project.name + '.json'
      a.click()
    },
    importData: function () {
      const self = this
      var a = document.createElement('input')
      a.type = 'file'
      a.addEventListener('change', (evt) => {
        var reader = new FileReader()
        reader.addEventListener('load', () => {
          self.$store.commit('importAll', JSON.parse(reader.result))
          this.$router.push('/board')
        })
        reader.readAsText(evt.target.files[0])
      })
      a.click()
    }
  }
}
</script>

<style >
.active {
  background-color: #d9ecff;
}
</style>
