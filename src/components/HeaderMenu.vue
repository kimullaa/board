<template>
  <v-menu offset-y>
    <v-btn icon slot="activator">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile @click="$router.push('/'); dialog = true">
        <v-list-tile-action>
          <v-icon>assignment</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>
          カンバンボード
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="$router.push('/lists'); dialog = true">
        <v-list-tile-action>
          <v-icon>label_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>
          リストの管理
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="$router.push('/backlog'); dialog = true">
        <v-list-tile-action>
          <v-icon>list</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>
          バックログ
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="$router.push('/config'); dialog = true">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>
          システムの設定
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: {
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
