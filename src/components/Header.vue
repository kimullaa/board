<template>
  <v-toolbar dense light fixed app>
    <header-menu></header-menu>
    <v-toolbar-title class="headline" @click="$router.push('/board')">Kanban Board</v-toolbar-title>
  </v-toolbar>
</template>

<script>
import HeaderMenu from './HeaderMenu'

export default {
  name: 'Header',
  components: {
    HeaderMenu
  }
}
</script>
